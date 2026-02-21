# @thenewcss/buttons

Button components for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- Base `.btn` class with sensible defaults
- Size variants: `.btn-xs`, `.btn-sm`, `.btn-lg`, `.btn-xl`
- Color variants: `.btn-primary`, `.btn-secondary`, `.btn-danger`, `.btn-success`, `.btn-warning`, `.btn-dark`
- Style variants: `.btn-outline`, `.btn-ghost`, `.btn-link`
- States: disabled, `.btn-loading` with spinner animation
- Layout: `.btn-block`, `.btn-icon`, `.btn-group`

## Install

```bash
npm install @thenewcss/buttons
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/buttons/dist/index.min.css" />
```

### Examples

```html
<!-- Default button -->
<button class="btn">Click me</button>

<!-- Color variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-danger">Delete</button>
<button class="btn btn-success">Save</button>

<!-- Sizes -->
<button class="btn btn-sm">Small</button>
<button class="btn btn-lg">Large</button>

<!-- Styles -->
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>

<!-- States -->
<button class="btn" disabled>Disabled</button>
<button class="btn btn-loading">Loading</button>

<!-- Layout -->
<button class="btn btn-block">Full width</button>

<!-- Button group -->
<div class="btn-group">
  <button class="btn">Left</button>
  <button class="btn">Center</button>
  <button class="btn">Right</button>
</div>
```
