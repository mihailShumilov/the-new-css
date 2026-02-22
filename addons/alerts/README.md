# @thenewcss/alerts

Alert components for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- Base `.alert` with padding, border, and border-radius
- Color variants: `.alert-info`, `.alert-success`, `.alert-warning`, `.alert-danger`
- `.btn-close` reusable close button with X icon
- `.alert-dismissible` for dismissible alerts with positioned close button

## Install

```bash
npm install @thenewcss/alerts
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/alerts/dist/index.min.css" />
```

### Basic Alerts

```html
<div class="alert alert-info">This is an info alert.</div>
<div class="alert alert-success">This is a success alert.</div>
<div class="alert alert-warning">This is a warning alert.</div>
<div class="alert alert-danger">This is a danger alert.</div>
```

### Dismissible Alert

```html
<div class="alert alert-warning alert-dismissible">
  <strong>Warning!</strong> Something needs your attention.
  <button class="btn-close" aria-label="Close"></button>
</div>
```

## License

MIT
