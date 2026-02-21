# @thenewcss/badges

Badge and tag components for [the-new-css](https://github.com/mihailShumilov/the-new-css).

## Install

```bash
npm install @thenewcss/badges
```

## Usage

Add the CSS after the core `the-new-css` stylesheet:

```html
<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css" />
<link rel="stylesheet" href="https://unpkg.com/@thenewcss/badges/dist/index.min.css" />
```

Or import in your CSS:

```css
@import "@thenewcss/badges/dist/index.min.css";
```

## Classes

### Badges

| Class | Description |
|-------|-------------|
| `.badge` | Base badge (pill shape, blue by default) |
| `.badge-primary` | Blue badge |
| `.badge-danger` | Red badge |
| `.badge-success` | Green badge |
| `.badge-warning` | Yellow badge |
| `.badge-dark` | Dark badge |
| `.badge-outline` | Outlined variant (transparent background, border) |
| `.badge-dot` | Badge with a leading dot indicator |
| `.badge-sm` | Small badge |
| `.badge-lg` | Large badge |

### Tags

| Class | Description |
|-------|-------------|
| `.tag` | Base tag (rounded rectangle, gray) |
| `.tag-list` | Flex container for a list of tags |

## Examples

```html
<span class="badge">Default</span>
<span class="badge badge-danger">Error</span>
<span class="badge badge-success badge-outline">Active</span>
<span class="badge badge-warning badge-dot">Pending</span>
<span class="badge badge-sm">Small</span>

<div class="tag-list">
  <span class="tag">HTML</span>
  <span class="tag">CSS</span>
  <span class="tag">JavaScript</span>
</div>
```
