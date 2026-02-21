# @thenewcss/progress

Progress bars, spinners, and placeholder components for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- `.progress` and `.progress-bar` with color and striped variants
- `.progress-bar-animated` with CSS animation
- `.spinner-border` and `.spinner-grow` loading indicators
- `.placeholder`, `.placeholder-glow`, `.placeholder-wave` skeleton loaders

## Install

```bash
npm install @thenewcss/progress
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/progress/dist/index.min.css" />
```

### Progress Bar

```html
<div class="progress">
  <div class="progress-bar" style="width: 75%">75%</div>
</div>
```

### Striped & Animated

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 50%"></div>
</div>
```

### Spinners

```html
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-grow" role="status">
  <span class="sr-only">Loading...</span>
</div>
```

### Placeholders

```html
<p class="placeholder-glow">
  <span class="placeholder" style="width: 75%"></span>
</p>
```

## License

MIT
