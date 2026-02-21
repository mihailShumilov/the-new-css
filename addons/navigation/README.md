# @thenewcss/navigation

Navigation components for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- `.nav` and `.nav-link` base navigation
- `.nav-tabs` with underline active indicator
- `.nav-pills` with pill-shaped active state
- `.navbar` responsive navigation bar with `.navbar-brand`, `.navbar-nav`
- `.navbar-toggle` CSS-only mobile toggle using `<details>/<summary>`
- `.navbar-dark` dark color scheme
- `.breadcrumb` with separator markers
- `.pagination` with `.page-item` and `.page-link`

## Install

```bash
npm install @thenewcss/navigation
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/navigation/dist/index.min.css" />
```

### Tabs

```html
<ul class="nav nav-tabs">
  <li><a class="nav-link active" href="#">Active</a></li>
  <li><a class="nav-link" href="#">Link</a></li>
  <li><a class="nav-link disabled" href="#">Disabled</a></li>
</ul>
```

### Pills

```html
<ul class="nav nav-pills">
  <li><a class="nav-link active" href="#">Active</a></li>
  <li><a class="nav-link" href="#">Link</a></li>
</ul>
```

### Breadcrumb

```html
<nav>
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active">Data</li>
  </ol>
</nav>
```

### Pagination

```html
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
  <li class="page-item active"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
</ul>
```

## License

MIT
