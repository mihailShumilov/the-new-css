# The New CSS

A super lightweight, utility-first CSS library. Modern CSS, no build step required.

[![Size](https://img.shields.io/badge/gzipped-~5KB-brightgreen)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## Features

- **Under 5KB gzipped** - Full library with responsive variants
- **No build step** - Just add a `<link>` tag
- **Modern CSS** - oklch() colors, @layer, container queries
- **Utility-first** - Tailwind-inspired class names
- **Dark mode** - Automatic + manual toggle support
- **Customizable** - Override CSS custom properties
- **Modular** - Import only what you need

## Quick Start

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">
```

### npm

```bash
npm install the-new-css
```

```css
@import 'the-new-css/dist/the-new-css.min.css';
```

## Usage

```html
<div class="flex items-center gap-4 p-6 bg-white rounded-lg shadow">
  <h2 class="text-xl font-bold">Hello World</h2>
  <p class="text-gray-600">Built with The New CSS</p>
</div>
```

## What's Included

| Category | Classes |
|----------|---------|
| Layout | display, position, overflow, z-index, visibility |
| Flexbox | direction, wrap, align, justify, gap, grow, shrink |
| Grid | columns, spans, flow, place |
| Spacing | padding, margin, space-between |
| Sizing | width, height, min/max |
| Typography | font size/weight/family, text align, line height |
| Colors | text colors, background colors, gradients |
| Borders | width, radius, ring, divide |
| Effects | opacity, shadow, blur |
| Transforms | translate, rotate, scale |
| Transitions | property, duration, timing |
| Interactivity | cursor, pointer-events, select, scroll |
| Responsive | sm (640px), md (768px), lg (1024px) |
| Variants | hover, focus, active, dark mode |

## Customization

Override CSS custom properties to customize:

```css
:root {
  --color-blue-500: oklch(0.6 0.2 250);
  --font-sans: "Inter", system-ui, sans-serif;
  --radius-lg: 0.75rem;
}
```

## Browser Support

- Chrome/Edge 111+
- Firefox 113+
- Safari 16.4+

## Development

```bash
npm install
npm run build      # Build dist/
npm test           # Run unit tests
npm run test:e2e   # Run E2E tests
npm run size       # Check size budget
npm run dev        # Serve site locally
```

## License

MIT
