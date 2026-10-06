# Yucheng Xing — homepage preview

Astro 7 static website with Welcome, Home, Research, Publications, Service, and
a custom 404 page. The design keeps the original minimal academic layout and
uses the owner's five landscape photographs. All images are in `public/images`.

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

## Current phase: private development

Keep `SBU-YCX/homepage-preview` private while building and reviewing the design.
Uploading or pushing this project does not publish a website: the included
deployment workflow has only a manual trigger. Preview the site locally with
`npm run dev`, or open the separately supplied `homepage-preview.html` file.

When uploading through GitHub's web interface, unzip the source archive first
and preserve the project directory structure. Put `package.json`, `src/`, and
`public/` at the repository root. GitHub does not unpack a ZIP merely because
it was uploaded. A normal git push from the server also preserves directories.

## Future publication on GitHub Pages

Do this only after explicitly deciding to publish. The current repository's
Pages settings require either a supported paid plan or public visibility.
Do not change repository visibility just to complete the development setup.

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
