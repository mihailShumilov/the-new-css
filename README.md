# The New CSS

**Modern semantic CSS baseline with no build step.**

[![npm version](https://img.shields.io/npm/v/the-new-css)](https://www.npmjs.com/package/the-new-css)
[![npm downloads](https://img.shields.io/npm/dm/the-new-css)](https://www.npmjs.com/package/the-new-css)
[![gzipped size](https://img.shields.io/badge/gzipped-~5KB-brightgreen)](https://thenewcss.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## What is it?

The New CSS is a lightweight, zero-config CSS base built for readable HTML and fast adoption. It provides sensible defaults — typography, colors, layout, spacing, responsive breakpoints, and dark mode — in a single stylesheet under 5KB gzipped.

Add one `<link>` tag and your HTML looks professional. No PostCSS, no Webpack, no config files.

## Why it exists

CSS tooling has become unnecessarily complex. Build pipelines, config files, utility class overload, purge steps — all just to style a web page.

The New CSS takes a different approach: **start with good defaults**. Semantic HTML should look good without writing custom CSS. When you need precise control, utility classes are available — but they are not the default mode of working.

If you want clean HTML, fast adoption, and a small footprint, this is for you.

## Features

- **No build step** — one `<link>` tag, no tooling
- **Clean semantic HTML** — sensible defaults for headings, paragraphs, forms, tables
- **Under 5KB gzipped** — layout, typography, colors, responsive, dark mode
- **Responsive variants** — mobile-first breakpoints: `sm:`, `md:`, `lg:`
- **Dark mode** — automatic (prefers-color-scheme) + manual toggle
- **CSS variables** — all design tokens are custom properties, easy to override
- **Modern CSS** — built on oklch() colors, @layer, container queries
- **Modular** — import only what you need from `dist/modules/`
- **Works everywhere** — plain HTML, React, Vue, Svelte, Astro, any stack

## Quick Start

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">
```

### npm

```bash
npm install the-new-css
```

```js
import "the-new-css/dist/the-new-css.css";
```

### Example

```html
<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-4">Hello World</h1>
  <p class="text-gray-600 leading-relaxed">
    Built with The New CSS. Clean HTML, no build step.
  </p>
  <div class="grid sm:grid-cols-3 gap-4 mt-6">
    <div class="p-4 bg-gray-100 rounded-lg">Card A</div>
    <div class="p-4 bg-gray-100 rounded-lg">Card B</div>
    <div class="p-4 bg-gray-100 rounded-lg">Card C</div>
  </div>
</div>
```

## Comparison

|                    | Tailwind CSS          | Bootstrap          | Pure CSS       | **The New CSS**             |
|--------------------|----------------------|--------------------|-----------------|-----------------------------|
| **Build step**     | Usually yes          | No                 | No              | **No**                      |
| **HTML readability** | Low (utility-heavy) | Medium             | High            | **High (semantic defaults)**|
| **Bundle size**    | ~10-30KB+ (purged)   | ~23KB              | ~4KB            | **~5KB**                    |
| **Learning curve** | Medium               | Low-medium         | Low             | **Low**                     |
| **Best for**       | Utility-driven apps  | Classic components | Minimal layouts | **Clean baselines + fast sites** |

## Examples

**Buttons + forms:**

```html
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
  Primary
</button>
<input placeholder="Email" class="px-3 py-2 border border-gray-300 rounded-lg" />
```

**Typography:**

```html
<article>
  <h1 class="text-3xl font-bold mb-2">Clean defaults</h1>
  <p class="text-gray-600 leading-relaxed">
    Readable spacing, sensible headings, and modern typography out of the box.
  </p>
</article>
```

**Responsive grid:**

```html
<div class="grid sm:grid-cols-3 gap-4">
  <div class="p-4 bg-gray-100 rounded-lg">Fast</div>
  <div class="p-4 bg-gray-100 rounded-lg">Simple</div>
  <div class="p-4 bg-gray-100 rounded-lg">Clean</div>
</div>
```

See live examples at [thenewcss.com/#examples](https://thenewcss.com/#examples).

## Templates

Ready-to-use HTML templates built with The New CSS:

- **[Landing page](https://thenewcss.com/templates/landing)** — Hero + features + CTA for product pages
- **[Dashboard](https://thenewcss.com/templates/dashboard)** — Nav + cards + tables for admin UIs
- **[Blog layout](https://thenewcss.com/templates/blog)** — Typography-first layout for content sites

Each template is plain HTML + The New CSS. Copy the code and customize with CSS variables.

## Official Addons

Extend The New CSS with standalone addon packages. Each addon is plain CSS, uses the same design tokens, and requires no build step.

| Package | Description | Size |
|---------|-------------|------|
| [@thenewcss/buttons](https://www.npmjs.com/package/@thenewcss/buttons) | Buttons with sizes, colors, outline/ghost/link styles, loading states, and groups | ~3KB |
| [@thenewcss/badges](https://www.npmjs.com/package/@thenewcss/badges) | Badges, tags, and status indicators with color variants and dot styles | ~2KB |
| [@thenewcss/cards](https://www.npmjs.com/package/@thenewcss/cards) | Cards with header/body/footer, hover effects, horizontal layout, and compact mode | ~2KB |
| [@thenewcss/tables](https://www.npmjs.com/package/@thenewcss/tables) | Styled tables with striped rows, hover, bordered, responsive, and cell utilities | ~2KB |
| [@thenewcss/colors-extended](https://www.npmjs.com/package/@thenewcss/colors-extended) | 13 additional color palettes with full shade ranges and utility classes | ~15KB |
| [@thenewcss/typography-extended](https://www.npmjs.com/package/@thenewcss/typography-extended) | Display sizes (5xl–9xl), gradient text, prose formatting, and text-pretty | ~5KB |

Install any addon via npm or CDN:

```bash
npm install @thenewcss/buttons @thenewcss/cards
```

```html
<link rel="stylesheet" href="https://unpkg.com/@thenewcss/buttons/dist/index.min.css">
```

```html
<button class="btn btn-primary">Save</button>
<button class="btn btn-outline btn-danger">Delete</button>

<div class="card card-hover">
  <div class="card-body">
    <h3>Feature</h3>
    <p>Card content here.</p>
  </div>
</div>
```

Browse all addons at [thenewcss.com/addons](https://thenewcss.com/addons).

## Customization

All design tokens are CSS custom properties. Override them in your own stylesheet:

```css
:root {
  --color-blue-500: oklch(0.6 0.2 250);
  --font-sans: "Inter", system-ui, sans-serif;
  --radius-lg: 0.75rem;
}
```

## What's Included

| Category     | Utilities                                                |
|-------------|----------------------------------------------------------|
| Layout       | display, position, overflow, z-index, visibility        |
| Flexbox      | direction, wrap, align, justify, gap, grow, shrink      |
| Grid         | columns, spans, flow, place                              |
| Spacing      | padding, margin, space-between                           |
| Sizing       | width, height, min/max                                   |
| Typography   | font size/weight/family, text align, line height         |
| Colors       | text colors, background colors, gradients (oklch)        |
| Borders      | width, radius, ring, divide                              |
| Effects      | opacity, shadow, blur, transitions                       |
| Responsive   | sm (640px), md (768px), lg (1024px)                      |
| Variants     | hover, focus, active, dark mode                          |

## Browser Support

- Chrome / Edge 111+
- Firefox 113+
- Safari 16.4+

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

```bash
npm install
npm run build      # Build dist/
npm test           # Run unit tests
npm run test:e2e   # Run E2E tests
npm run size       # Check size budget (must stay under 5KB gzipped)
npm run dev        # Serve docs site on localhost:3000
```

## Links

- **Website:** [thenewcss.com](https://thenewcss.com)
- **Docs:** [thenewcss.com/docs](https://thenewcss.com/docs)
- **Addons:** [thenewcss.com/addons](https://thenewcss.com/addons)
- **Blog:** [thenewcss.com/blog](https://thenewcss.com/blog)
- **Templates:** [thenewcss.com/templates](https://thenewcss.com/templates)
- **npm:** [npmjs.com/package/the-new-css](https://www.npmjs.com/package/the-new-css)

## License

MIT
