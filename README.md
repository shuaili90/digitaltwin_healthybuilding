# Digital Twins for Healthy Built Environments

Research project website, built with [Astro](https://astro.build) and published with GitHub Pages.

The site is a single project page (`/`) plus an accessibility page (`/accessibility/`).
It deploys to `https://<owner>.github.io/digitaltwin_healthybuilding/`; the base path comes from the repository name.

## Where to edit

| What | File |
| --- | --- |
| Page text and section layout | `src/components/projects/HealthyContent.astro` |
| Page styles | `src/styles/healthy.css` (shared base: `src/styles/project.css`) |
| Title, subtitle, and source notes | `src/data/lab-projects.ts` (`labProjects`) |
| Video titles, descriptions, and credits | `src/data/lab-projects.ts` (`projectClips`) |
| Image alt text, descriptions, and credits | `src/data/lab-figures.ts` |
| Images and videos | `public/projects/` |

Each video needs `<name>.mp4`, a `<name>.jpg` poster, and a `<name>.vtt` description track; narrated videos also need `<name>.en.vtt` captions.

## Run locally

Requires Node.js 24.

```sh
npm ci
npm run dev              # live preview at http://localhost:4321/
```

## Check before publishing

```sh
SITE_URL=https://<owner>.github.io BASE_PATH=/digitaltwin_healthybuilding npm run build
SITE_URL=https://<owner>.github.io BASE_PATH=/digitaltwin_healthybuilding npx astro preview --port 4480 &
npm run lint
npm run test:a11y        # axe WCAG 2.1 A/AA scan plus keyboard, reflow, and media checks
```

Automated checks do not establish full WCAG or ADA compliance.

## Publish

Pushing to `main` runs `.github/workflows/astro.yml`: it audits dependencies, lints, builds, runs the accessibility checks, and deploys to GitHub Pages.
In a new repository, set **Settings → Pages → Source** to **GitHub Actions** once.

## Origin

Split from Songyang Liu’s personal research homepage in November 2026. Original research materials are credited on the accessibility page.
