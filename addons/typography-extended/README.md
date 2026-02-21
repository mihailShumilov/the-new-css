# @thenewcss/typography-extended

Extended typography utilities for [the-new-css](https://github.com/mihailShumilov/the-new-css).

## What's included

- **Extended text sizes** (`text-5xl` through `text-9xl`) with corresponding design tokens
- **Gradient text** (`.text-gradient`) for use with background gradient utilities
- **Prose** (`.prose`) for auto-styling rich text / markdown content
- **Text pretty** (`.text-pretty`) for improved text wrapping

## Install

```bash
npm install @thenewcss/typography-extended
```

## Usage

Import after the core `the-new-css` stylesheet:

```html
<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css" />
<link rel="stylesheet" href="https://unpkg.com/@thenewcss/typography-extended/dist/index.min.css" />
```

Or in CSS:

```css
@import "the-new-css/dist/the-new-css.min.css";
@import "@thenewcss/typography-extended/dist/index.min.css";
```

## Classes

| Class | Description |
|-------|-------------|
| `text-5xl` | `font-size: 3rem` |
| `text-6xl` | `font-size: 3.75rem` |
| `text-7xl` | `font-size: 4.5rem` |
| `text-8xl` | `font-size: 6rem` |
| `text-9xl` | `font-size: 8rem` |
| `text-gradient` | Clip background to text for gradient effects |
| `prose` | Auto-style rich text content (headings, lists, code, tables, etc.) |
| `text-pretty` | `text-wrap: pretty` |
