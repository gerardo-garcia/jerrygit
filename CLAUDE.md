# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview built site locally
```

No lint or test commands exist in this project.

## Architecture

**Stack:** Astro 6 + Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Static site deployed to GitHub Pages at `jerrygit.com` via `.github/workflows/deploy.yml`.

**Routing:** All content pages live under `src/pages/{lang}/`. The root `src/pages/index.astro` redirects to `/en/`. Astro's built-in i18n is configured with `prefixDefaultLocale: true`, so both `/en/` and `/es/` are always explicit in URLs.

**Internationalization:** Two locales — `en` (default) and `es`. All UI strings live in `src/i18n/ui.ts`. Pages retrieve the current language with `getLangFromUrl()` from `src/i18n/utils.ts` and look up strings via `useTranslations(lang)`. When adding new UI strings, add keys to **both** `en` and `es` objects in `ui.ts`.

**Content collections:** Defined in `src/content.config.ts` using Astro's Content Layer API (`glob` loader).
- `blog`: markdown/MDX files under `src/content/blog/{lang}/`. Frontmatter: `title`, `description`, `date`, `tags[]`, `featured`.
- `projects`: markdown/MDX files under `src/content/projects/{lang}/`. Frontmatter: `title`, `description`, `status` (`active`|`ongoing`|`completed`), `tags[]`, `links[]`, `featured`, `order`.

Blog/project pages filter by `id.startsWith('{lang}/')` to serve only the correct locale's content. Slugs are derived by stripping the `{lang}/` prefix and file extension from the content `id`.

**BASE_URL pattern:** All internal links are prefixed with `(import.meta.env.BASE_URL + '/').replace(/\/+$/, '/')` to support potential base path deployments. Follow this pattern when adding new links.

**Layout:** `src/layouts/Base.astro` is the single shared layout — sticky nav with language switcher, `<slot />` main content area, footer with social links.
