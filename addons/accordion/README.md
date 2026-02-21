# @thenewcss/accordion

CSS-only accordion components for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- `.accordion` container with `.accordion-item` sections
- `.accordion-header` styled `<summary>` with custom chevron indicator
- `.accordion-body` content panel
- `.accordion-flush` borderless variant
- Uses native `<details>/<summary>` elements (no JavaScript required)
- Exclusive mode via HTML `name` attribute (one panel open at a time)

## Install

```bash
npm install @thenewcss/accordion
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/accordion/dist/index.min.css" />
```

### Basic Accordion

```html
<div class="accordion">
  <details class="accordion-item" name="faq">
    <summary class="accordion-header">Section One</summary>
    <div class="accordion-body">Content for section one.</div>
  </details>
  <details class="accordion-item" name="faq">
    <summary class="accordion-header">Section Two</summary>
    <div class="accordion-body">Content for section two.</div>
  </details>
</div>
```

### Flush Variant

```html
<div class="accordion accordion-flush">
  <details class="accordion-item" name="flush-faq">
    <summary class="accordion-header">Section One</summary>
    <div class="accordion-body">Content without outer borders.</div>
  </details>
</div>
```

## License

MIT
