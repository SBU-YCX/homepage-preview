import { readFile, writeFile, readdir } from 'node:fs/promises';
import { dirname, join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Export the built site as one HTML file for local, private design review.
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const routes = ['/', '/home/', '/research/', '/publications/', '/service/', '/404.html'];
const pages = {};
const styles = new Set();
let head;
let exportBase = '/';
// Keep the portable preview ASCII-safe even when a download viewer guesses a
// legacy encoding. JSON/JavaScript escapes preserve the original Unicode text.
const asciiScript = (text) =>
  text.replace(
    /[\u007f-\uffff]/g,
    (character) => `\\u${character.charCodeAt(0).toString(16).padStart(4, '0')}`,
  );
const asciiHtml = (text) =>
  text.replace(/[^\x00-\x7f]/gu, (character) => `&#x${character.codePointAt(0).toString(16)};`);
const asciiCss = (text) =>
  text.replace(/[^\x00-\x7f]/gu, (character) => `\\${character.codePointAt(0).toString(16)} `);
const json = (value) => asciiScript(JSON.stringify(value).replace(/</g, '\\u003c'));

for (const route of routes) {
  const file = route.endsWith('.html') ? route.slice(1) : `${route.slice(1)}index.html`;
  const html = await readFile(join(dist, file), 'utf8');
  const configMatch = html.match(/<script id="site-photo-config"[^>]*>([\s\S]*?)<\/script>/);
  const config = JSON.parse(configMatch[1]);
  const base = config.welcome;
  if (route === '/') exportBase = base;
  const local = (url) => (url.startsWith(base) ? `/${url.slice(base.length)}` : url);
  config.home = local(config.home);
  config.welcome = '/';
  config.photos = config.photos.map((photo) => ({ ...photo, url: local(photo.url) }));
  let body = html
    .match(/<body[^>]*>([\s\S]*?)<\/body>/)[1]
    .replace(
      configMatch[0],
      `<script id="site-photo-config" type="application/json">${json(config)}</script>`,
    )
    .replace(/<script\b[^>]*\bsrc="[^"]*scripts\/site\.js"[^>]*><\/script>/g, '')
    .replace(/\bsrc="(\/[^"]+)"/g, (_, url) => `src="${local(url)}"`)
    .replace(/\bhref="([^"]+)"/g, (match, url) => {
      if (url.startsWith('#')) return `href="#${route}${url}"`;
      if (url.startsWith('/') && !url.startsWith('//')) return `href="#${local(url)}"`;
      return match;
    });
  pages[route] = {
    title: html.match(/<title>([\s\S]*?)<\/title>/)[1],
    page: route === '/' ? 'welcome' : route.split('/')[1],
    opacity: config.backgroundOpacity,
    body,
  };
  for (const style of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) styles.add(style[1]);
  if (route === '/')
    head = html.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<style[^>]*>[\s\S]*?<\/style>/g, '');
}

const assets = {};
const types = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ttf': 'font/ttf',
  '.woff2': 'font/woff2',
};
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) await collect(file);
    else if (types[extname(file)]) {
      const key = `/${relative(join(root, 'public'), file).split('\\').join('/')}`;
      assets[key] =
        `data:${types[extname(file)]};base64,${(await readFile(file)).toString('base64')}`;
    }
  }
}
await collect(join(root, 'public'));
head = head.replace(
  /(<link[^>]*rel="icon"[^>]*href=")[^"]+("[^>]*>)/,
  `$1${assets['/favicon.svg']}$2`,
);
const router = `
(() => {
  const pages = JSON.parse(document.getElementById('preview-pages').textContent);
  const assets = JSON.parse(document.getElementById('preview-assets').textContent);
  const host = document.getElementById('preview-app');
  window.homepagePreviewAsset = url => assets[url] || url;
  function render() {
    const url = new URL(location.hash.slice(1) || '/', 'https://preview.invalid/');
    const page = pages[url.pathname] || pages['/404.html'];
    window.homepagePreviewRoute = url.pathname + url.search;
    document.title = page.title;
    document.body.dataset.page = page.page;
    document.body.classList.toggle('welcome-page', page.page === 'welcome');
    document.body.style.setProperty('--photo-opacity', page.opacity);
    host.innerHTML = page.body.replace(/\\bsrc="([^\"]+)"/g, (match, src) => 'src="' + (assets[src] || src) + '"');
    window.initHomepage?.();
    requestAnimationFrame(() => {
      const target = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
  }
  window.homepagePreviewNavigate = (path, replace = false) => {
    const url = new URL(path, 'https://preview.invalid/');
    const hash = '#' + url.pathname + url.search + url.hash;
    if (replace) { history.replaceState(null, '', hash); render(); }
    else if (location.hash === hash) render();
    else location.hash = hash;
  };
  addEventListener('hashchange', render);
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#/"]');
    if (link && link.hash === location.hash) { event.preventDefault(); render(); }
  });
  render();
})();`;
const siteScript = await readFile(join(root, 'public/scripts/site.js'), 'utf8');
const styleText = [...styles].join('\n');
const importRule = /@import\s+(?:"[^"]*"|'[^']*'|url\([^)]*\))[^;]*;/g;
const fontImports = [...new Set(styleText.match(importRule) || [])].join('\n');
const css = (fontImports + '\n' + styleText.replace(importRule, '')).replace(
  /url\(["']?(\/[^)"']+)["']?\)/g,
  (match, url) => {
    const key = url.startsWith(exportBase) ? `/${url.slice(exportBase.length)}` : url;
    return assets[key] ? `url("${assets[key]}")` : match;
  },
);
// display:contents preserves the live site's stacking and layout in this wrapper.
const output = `<!doctype html><html lang="en"><head>${asciiHtml(head)}<style>${asciiCss(css)}\n#preview-app{display:contents}#preview-app>.site-header,#preview-app>main,#preview-app>.site-footer{position:relative;z-index:1}</style></head><body><div id="preview-app"></div><noscript>This local preview needs JavaScript. The source project also includes a static build.</noscript><script id="preview-pages" type="application/json">${json(pages)}</script><script id="preview-assets" type="application/json">${json(assets)}</script><script>${asciiScript(router)}</script><script>${asciiScript(siteScript)}</script></body></html>`;
const outputPath = join(root, 'homepage-preview.html');
if (/[^\x00-\x7f]/.test(output))
  throw new Error('Portable preview contains unescaped non-ASCII text');
// The BOM also makes the intended encoding explicit to Windows text viewers.
await writeFile(outputPath, '\ufeff' + output, 'utf8');
console.log(
  `Exported ${routes.length} pages and ${Object.keys(assets).length} local assets: ${outputPath}`,
);
