# @thenewcss/list-group

List group components for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- Base `.list-group` and `.list-group-item` with borders and padding
- `.list-group-item-action` for clickable/hoverable items
- `.list-group-flush` borderless variant
- `.list-group-numbered` with auto-incrementing numbers
- Color variants: `.list-group-item-primary`, `.list-group-item-success`, `.list-group-item-warning`, `.list-group-item-danger`

## Install

```bash
npm install @thenewcss/list-group
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/list-group/dist/index.min.css" />
```

### Basic List Group

```html
<ul class="list-group">
  <li class="list-group-item">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>
```

### Actionable Items

```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">Active link</a>
  <a href="#" class="list-group-item list-group-item-action">Regular link</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Disabled link</a>
</div>
```

## License

MIT
