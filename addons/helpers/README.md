# @thenewcss/helpers

Utility helpers for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- `.clearfix` for float clearing
- `.ratio-*` aspect ratio containers (1x1, 4x3, 16x9, 21x9)
- `.vstack` and `.hstack` for vertical/horizontal stacks
- `.stretched-link` to make a link's clickable area cover its container
- `.vr` vertical rule divider
- `.focus-ring` custom focus indicator
- `.object-*` object-fit utilities (contain, cover, fill, none, scale-down)
- `.float-*` float utilities (start, end, none)
- `.align-*` vertical alignment utilities

## Install

```bash
npm install @thenewcss/helpers
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/helpers/dist/index.min.css" />
```

### Aspect Ratios

```html
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe>
</div>
```

### Stacks

```html
<div class="vstack">
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</div>

<div class="hstack">
  <div>Left</div>
  <div class="vr"></div>
  <div>Right</div>
</div>
```

### Object Fit

```html
<img src="photo.jpg" class="object-cover" style="width: 200px; height: 200px;">
```

## License

MIT
