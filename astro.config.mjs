import { defineConfig } from 'astro/config';

// GitHub Actions supplies the repository identity. Local previews use /.
const repository = process.env.GITHUB_REPOSITORY || '';
const [owner, repo] = repository.split('/');
const isUserSite = owner && repo?.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.SITE_BASE || (owner && repo && !isUserSite ? `/${repo}/` : '/');

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || (owner ? `https://${owner.toLowerCase()}.github.io` : undefined),
  base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  server: { host: true, port: 4173, allowedHosts: ['terminal.local'] },
});
