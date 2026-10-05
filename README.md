# Yucheng Xing — homepage preview

Astro 7 static website. Home, Research, Publications, and a custom 404 page.
The first design uses the existing public biography, portrait, research figures,
publication list, and contact links. All images are stored in `public/images`.

## Run on your server

Use Node.js 24 and npm.

```bash
npm ci
npm run dev
```

The development server listens on port 4173. Forward that port through your SSH
connection when developing on a remote server. `npm run build` produces the
static website in `dist/`.

## Publish the preview on GitHub Pages

1. Use only the new, dedicated homepage repository. A project repository such
   as `homepage-preview` keeps this preview separate from any existing site.
2. Commit this directory, including `package-lock.json` and
   `.github/workflows/deploy.yml`, to its `main` branch.
3. In that repository, set **Settings → Pages → Source → GitHub Actions**.
4. Run the **Publish homepage preview** workflow (or push another commit).
5. Open the URL reported by the successful deployment.

`astro.config.mjs` derives `site` and `base` from `GITHUB_REPOSITORY` in Actions.
Both ordinary project repositories and the special `<owner>.github.io`
repository naming pattern are supported. Internal page and image URLs use that
base. No custom domain is configured.

For a local project-path build check:

```bash
GITHUB_REPOSITORY=SBU-YCX/homepage-preview npm run build
```

Repository access for the ChatGPT GitHub app can be limited to this repository
using **Only select repositories**. Do not expand access to unrelated repositories.

## Edit the site

| Content | File |
| --- | --- |
| Contact links and news | `src/data/profile.ts` |
| Papers, authors, venues, resource links | `src/data/publications.ts` |
| Homepage and biography | `src/pages/index.astro` |
| Research descriptions | `src/pages/research.astro` |
| Shared typography, colors, and responsive layout | `src/styles/global.css` |
| Navigation, footer, metadata | `src/layouts/Layout.astro` |

Google Fonts supplies DM Sans and Source Serif 4; system fonts are configured as
fallbacks. The public site requires no JavaScript for navigation or citations.
BibTeX entries use native HTML disclosure controls.

## Before replacing the current website

- Review the design and wording.
- Replace the existing external CV link with a current CV PDF when available.
  The original public CV is still used by this preview; it has not been rewritten.
- Review professional service details if moving them off the existing site.
- Add any missing paper or code links only after they are actually public.
- Remove `noindex, nofollow` from the layout only when ready for indexing.
- Plan redirects for the old WordPress paths before a domain migration.
- Configure a custom domain and DNS only when explicitly requested.

The incoming employer, unpublished research, private repositories, and personal
conversation details were not added. No WordPress, registrar, or DNS settings
were modified.

## Content sources

- https://yuchengxing.me/
- https://yuchengxing.me/works/
- https://yuchengxing.me/works/publications/
- https://yuchengxing.me/cv/
- https://link.springer.com/chapter/10.1007/978-3-032-37556-8_31
- https://docs.astro.build/en/guides/deploy/github/

Content and original research assets belong to their respective authors.
