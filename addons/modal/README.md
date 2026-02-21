# @thenewcss/modal

Modal and offcanvas dialog components for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- `.modal` using native `<dialog>` element with backdrop, focus trap, and Escape key
- `.modal-header`, `.modal-title`, `.modal-body`, `.modal-footer` sections
- Size variants: `.modal-sm`, `.modal-lg`, `.modal-xl`, `.modal-fullscreen`
- `.offcanvas` slide-in panel with `.offcanvas-start` and `.offcanvas-end`

## Install

```bash
npm install @thenewcss/modal
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/modal/dist/index.min.css" />
```

### Modal

```html
<dialog class="modal" id="myModal">
  <div class="modal-header">
    <h2 class="modal-title">Modal Title</h2>
    <button class="btn-close" onclick="this.closest('dialog').close()"></button>
  </div>
  <div class="modal-body">
    <p>Modal body content goes here.</p>
  </div>
  <div class="modal-footer">
    <button onclick="this.closest('dialog').close()">Close</button>
    <button class="btn btn-primary">Save</button>
  </div>
</dialog>

<button onclick="document.getElementById('myModal').showModal()">Open Modal</button>
```

### Offcanvas

```html
<dialog class="offcanvas offcanvas-start" id="sidebar">
  <div class="offcanvas-header">
    <h3>Sidebar</h3>
    <button class="btn-close" onclick="this.closest('dialog').close()"></button>
  </div>
  <div class="offcanvas-body">
    <p>Offcanvas content here.</p>
  </div>
</dialog>

<button onclick="document.getElementById('sidebar').showModal()">Open Sidebar</button>
```

## License

MIT
