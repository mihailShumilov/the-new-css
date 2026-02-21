# @thenewcss/cards

Card components for [the-new-css](https://github.com/mihailShumilov/the-new-css).

Provides `.card`, `.card-header`, `.card-body`, `.card-footer`, `.card-img-top`, hover effects, horizontal layout, compact and flat variants, and padding modifiers.

## Install

```bash
npm install @thenewcss/cards
```

## Usage

Include the CSS after the core `the-new-css` stylesheet:

```html
<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">
<link rel="stylesheet" href="https://unpkg.com/@thenewcss/cards/dist/index.min.css">
```

Then use the card classes in your HTML:

```html
<div class="card card-hover">
  <img class="card-img-top" src="image.jpg" alt="Card image">
  <div class="card-body">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <a href="#">Read more</a>
  </div>
</div>
```
