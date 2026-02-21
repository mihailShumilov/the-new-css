# @thenewcss/tables

Table components for [the-new-css](https://github.com/mihailShumilov/the-new-css).

Provides styled table classes including striped rows, hover effects, bordered tables, compact sizing, responsive wrappers, and cell utilities.

## Install

```bash
npm install @thenewcss/tables
```

## Usage

Add the CSS to your project after the core `the-new-css` stylesheet:

```html
<link rel="stylesheet" href="node_modules/@thenewcss/tables/dist/index.min.css">
```

Then use the classes in your HTML:

```html
<div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th class="cell-right">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jane Doe</td>
        <td class="cell-truncate">jane.doe@example.com</td>
        <td class="cell-right cell-nowrap">Edit | Delete</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Classes

| Class | Description |
|-------|-------------|
| `.table` | Base table styling |
| `.table-striped` | Alternating row backgrounds |
| `.table-hover` | Highlight rows on hover |
| `.table-bordered` | Borders on all cells |
| `.table-compact` | Reduced cell padding |
| `.table-fixed` | Fixed table layout |
| `.table-responsive` | Horizontal scroll wrapper |
| `.cell-nowrap` | Prevent text wrapping |
| `.cell-truncate` | Truncate overflowing text with ellipsis |
| `.cell-center` | Center-align cell text |
| `.cell-right` | Right-align cell text |
| `.cell-middle` | Vertically center cell content |
