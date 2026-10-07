# Yucheng Xing — homepage preview

Astro 7 static website with Welcome, Home, Research, Publications, Service, and
a custom 404 page. The design keeps the original minimal academic layout and
uses the owner's five landscape photographs. All images are in `public/images`.

## 从哪里改内容

请编辑 `src/` 里的源文件。`dist/` 里的 HTML 是自动生成的发布文件；
其中的 HTML 和 CSS 会被压缩，下一次构建也会覆盖手动修改。
单文件 `homepage-preview.html` 用来预览，不是日常维护入口。

| 要修改的内容 | 源文件 |
| --- | --- |
| 论文名称、作者、会议/期刊、年份、Paper/Code/Poster 链接、BibTeX | `src/data/publications.ts` |
| 每篇论文的显示格式、链接按钮 | `src/components/Paper.astro` |
| Publication 页面标题、年份分组结构 | `src/pages/publications.astro` |
| Google Scholar、GitHub、LinkedIn、CV、News | `src/data/profile.ts` |
| 首页自我介绍和 Education | `src/pages/home.astro` |
| 研究方向文字 | `src/pages/research.astro` |
| Service 记录 | `src/data/service.ts` |
| 颜色、字体、间距、边框、页面布局 | `src/styles/global.css` |
| 欢迎照片、轮播速度、背景浓淡 | `src/data/appearance.ts` |

论文文件中，每一个 `{ ... }` 区块就是一篇论文，每个字段单独一行。
修改引号中的内容即可；在相邻字段之间保留逗号。`id` 用于站内跳转，
一般保留原值。`bibtex` 使用反引号包住多行文字，可以直接阅读和编辑。
当前 `paper` 字段同时供论文标题和 Paper / arXiv 按钮使用。

这次功能修改仅为外站链接在新标签页打开；论文内容、PDF 地址、引用内容和
录用率仍由你自己编辑。站内导航和年份锚点在当前标签页跳转。

可以直接在 GitHub 的文件页面点击铅笔按钮编辑并提交；或者在 Windows 中
编辑源文件后按原目录上传。提交后，到 **Actions → Publish homepage
(manual only) → Run workflow** 运行一次，网页才会更新。

## Run locally on Windows or a server

Use Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:4173 in your browser. On Windows, run these commands in
PowerShell in the unzipped project directory; no server connection is needed.
SSH port forwarding is only needed if you choose to run on a remote server.
`npm run build` produces the static website in `dist/`. `npm run export` also
creates a self-contained `homepage-preview.html` that opens by double-clicking.
If Windows opens it in a text editor, use **Open with → Chrome or Edge**. Download
the actual file rather than copying the code from a preview pane. The portable
export includes an explicit UTF-8 signature and escapes multilingual text for
viewers that guess legacy encodings; the displayed names and symbols are unchanged.

## Changes in this revision

- An independent welcome page cycles through five original photographs, with
  pause and previous/next controls. Clicking **Enter homepage** keeps the current
  photo as a faint, fixed background throughout the content pages.
- One light theme, with dark slate text and a softer background behind reading
  areas. The background stays in the viewport as the text scrolls.
- Home, Research, Publications, and Service each have their own page. The portrait,
  News, and Education stay on the right on desktop. The Chinese and English names
  have similar visual size.
- Scholar, GitHub, and LinkedIn use outlined buttons. Email is displayed with
  `[at]` and `[dot]`, without a mailto link. CV appears only in the top navigation.
- Home shows Selected Professional Service; the Service page includes the public
  conference, journal, secondary reviewer, and teaching records.
- Publications have type labels, stronger year boundaries, and lighter dividers
  within each year. The journal article, Stochastic Networks, and book chapter
  have text-only entries without repeated or placeholder figures.
- Research links use short names and venue/year labels in small translucent cards.
  Research prose, categories, and figures remain available for a later content review.
- News preserves the complete list, showing three entries and an inline expansion.

The entry route is `/`; the academic homepage is `/home/`. After entering once in
a tab, revisiting `/` skips the welcome screen. **Photography** in the footer opens
it again. The slideshow changes every eight seconds and starts paused when the
visitor requests reduced motion. Manual previous/next also pauses it. Without
JavaScript, the first photograph and entry link still work.

Edit `src/data/appearance.ts` to change the photo order, crops, interval, or
background opacity. The original photos are in `public/images/photography/`.

## Current phase: GitHub Pages preview

`SBU-YCX/homepage-preview` is now public and the preview uses
https://sbu-ycx.github.io/homepage-preview/. The included deployment workflow
has only a manual trigger: uploading or pushing edits does not update the site
until **Publish homepage (manual only)** is run again. You can also preview
locally with `npm run dev` or the separate `homepage-preview.html` file.

When uploading through GitHub's web interface, unzip the source archive first
and preserve the project directory structure. Put `package.json`, `src/`, and
`public/` at the repository root. GitHub does not unpack a ZIP merely because
it was uploaded. A normal git push from the server also preserves directories.

## GitHub Pages deployment

The dedicated preview repository is already configured for GitHub Pages.
The setup and manual publishing steps are listed below for reference.

1. Use only the new, dedicated homepage repository. A project repository such
   as `homepage-preview` keeps this preview separate from any existing site.
2. Commit this directory, including `package-lock.json` and
   `.github/workflows/deploy.yml`, to its `main` branch.
3. In that repository, set **Settings → Pages → Source → GitHub Actions**.
4. Manually run the **Publish homepage (manual only)** workflow from Actions.
5. Open the URL reported by the successful deployment.

`astro.config.mjs` derives `site` and `base` from `GITHUB_REPOSITORY` in Actions.
Both ordinary project repositories and the special `<owner>.github.io`
repository naming pattern are supported. Internal page and image URLs use that
base. No custom domain is configured.

For a local project-path build check:

```bash
GITHUB_REPOSITORY=SBU-YCX/homepage-preview npm run build
```

There is no automatic deployment on push. Repository access for the ChatGPT GitHub app can be limited to this repository
using **Only select repositories**. Do not expand access to unrelated repositories.

## Edit the site

| Content | File |
| --- | --- |
| Contact links and news | `src/data/profile.ts` |
| Papers, authors, venues, resource links | `src/data/publications.ts` |
| Welcome photographs and background settings | `src/data/appearance.ts` |
| Welcome layout | `src/pages/index.astro` |
| Homepage and biography | `src/pages/home.astro` |
| Research descriptions | `src/pages/research.astro` |
| Professional service and teaching records | `src/data/service.ts` |
| Shared typography, colors, and responsive layout | `src/styles/global.css` |
| Navigation, footer, metadata | `src/layouts/Layout.astro` |

Google Fonts supplies DM Sans and Source Serif 4; system fonts are configured as
fallbacks. Content-page navigation, News expansion, and BibTeX disclosures work
without JavaScript. Welcome slideshow controls and remembering a selected photo
use a small local script. The self-contained HTML preview uses JavaScript for its
internal page switching and embeds all images, so no local server is required.
The three Chinese name characters use a small bundled Noto Serif SC font subset;
its SIL Open Font License is included in `public/fonts/OFL.txt`.

### Maintain the News list

Add news entries to the `news` array in `src/data/profile.ts`. Keep old entries:
the homepage automatically sorts the full list by `iso` (newest first), shows
the latest **three**, and puts the remaining entries in an inline **Show more**
disclosure. **Show less** collapses them again. There is no separate archive page.
The disclosure is a native HTML control and works without JavaScript.

Use `iso` for the sorting date (`YYYY-MM` or `YYYY-MM-DD`), `date` for the display
label (for example, `October 2026`), `text` for the news, and an optional `href`
for a relevant link. Entries may be appended to the file; they do not need to be
manually reordered. Entries sharing the same `iso` retain their order in the
file. With three or fewer entries, the disclosure is omitted automatically.

This version is a static site: editing the data file and rebuilding updates the
News section. It does not include a browser-based admin dashboard.

## Before replacing the current website

- Review the design and wording.
- Replace the existing external CV link with a current CV PDF when available.
  The original public CV is still used by this preview; it has not been rewritten.
- Review the migrated professional service dates. These reproduce the old public
  page, including its AAAI 2026–2027 label; no missing dates were inferred.
- Add any missing paper or code links only after they are actually public.
- Remove `noindex, nofollow` from the layout only when ready for indexing.
- Plan redirects for the old WordPress paths before a domain migration.
- Configure a custom domain and DNS only when explicitly requested.

## Content sources

- https://yuchengxing.me/
- https://yuchengxing.me/works/
- https://yuchengxing.me/works/publications/
- https://yuchengxing.me/works/services/
- https://yuchengxing.me/cv/
- https://link.springer.com/chapter/10.1007/978-3-032-37556-8_31
- https://docs.astro.build/en/guides/deploy/github/

Content and original research assets belong to their respective authors.
