# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

The New CSS is a utility-first CSS library (like Tailwind) that ships as plain CSS with no build step required for consumers. It uses modern CSS features: oklch() colors, @layer, CSS custom properties, and container queries. The full bundle must stay **under 5KB gzipped**.

## Commands

```bash
npm run build          # Build dist/ (full, minified, core bundles)
npm run build:modules  # Build individual module files in dist/modules/
npm run size           # Check gzipped size against 5KB budget
npm test               # Unit tests (vitest)
npm run test:watch     # Unit tests in watch mode
npm run test:e2e       # E2E tests (Playwright, starts local server on :3000)
npm run test:all       # Unit + E2E
npm run dev            # Serve site/ on localhost:3000
```

Run a single unit test file: `npx vitest run tests/unit/build.test.js`

## Architecture

### CSS Source (`src/`)

Entry points:
- `src/the-new-css.css` — Full bundle (base + tokens + utilities + variants)
- `src/the-new-css-core.css` — Core bundle (base + tokens + utilities, no variants)

CSS is organized into four layers, declared in order: `@layer base, utilities, variants;`

| Directory | Layer | Purpose |
|-----------|-------|---------|
| `src/tokens/` | *(none — global custom properties)* | Design tokens as CSS custom properties (colors, spacing, typography, shadows, borders, transitions, z-index) |
| `src/base/` | `base` | Reset, root styles, base typography, form defaults |
| `src/utilities/` | `utilities` | Utility classes (layout, flexbox, grid, spacing, sizing, typography, colors, borders, effects, transforms, transitions, interactivity, container) |
| `src/components/` | `utilities` | Component classes (sr-only) |
| `src/variants/` | `variants` | Responsive (sm/md/lg breakpoints), hover, focus, active, dark mode, container queries |

**Key conventions:**
- Tokens are CSS custom properties on `:root` — no `@layer` wrapper
- Utilities/components use `@layer utilities { ... }`
- Variants use `@layer variants { ... }`
- Colors use `oklch()` color space throughout
- Spacing/typography utilities reference token custom properties (e.g., `var(--spacing-6)`)
- Responsive variants use `\:` escaped colon in class names (e.g., `.sm\:flex`)
- Dark mode works via `prefers-color-scheme` (auto) and `[data-theme="dark"]` (manual toggle)

### Build System (`scripts/`)

- `build.js` — Uses **lightningcss** to bundle and minify. Produces three dist files: `the-new-css.css`, `the-new-css.min.css`, `the-new-css.core.min.css`. Also copies minified CSS to `site/` for local dev.
- `build-modules.js` — Builds each CSS file from `base/`, `tokens/`, `utilities/`, `variants/` as a standalone minified module in `dist/modules/`.
- `size-report.js` — Reports raw/gzipped sizes. Enforces 5KB gzipped budget on `the-new-css.min.css` (exits with code 1 if over).

### Tests

- **Unit tests** (`tests/unit/`): Vitest. Tests run `node scripts/build.js` in `beforeAll`, then validate the built CSS — parse validity (css-tree), @layer ordering, expected selectors, build output existence, and size budget.
- **E2E tests** (`tests/e2e/`): Playwright (Chromium only). Tests the documentation site on localhost:3000 — page loads, SEO/meta tags, dark mode toggle, and axe accessibility checks (WCAG 2.0 AA).

### Documentation Site (`site/`)

Static HTML site served with sirv-cli. Uses the built CSS (`site/the-new-css.min.css`). Contains `index.html`, docs pages, and a donate page.

## Size Budget

The full minified bundle (`dist/the-new-css.min.css`) must be **≤ 5KB gzipped**. This is enforced by both `scripts/size-report.js` and `tests/unit/build.test.js`. Run `npm run size` to check.
