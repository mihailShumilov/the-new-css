# @thenewcss/forms

Styled form controls for [the-new-css](https://github.com/mihailShumilov/the-new-css) utility-first CSS library.

## What's included

- Base `.form-control` with focus states and disabled styling
- `.form-label` and `.form-text` for labels and help text
- `.form-select` with custom dropdown arrow
- `.form-check` and `.form-check-input` for checkboxes and radios
- `.form-switch` toggle variant
- `.form-range` styled range slider
- `.input-group` with `.input-group-text` for prepend/append
- `.form-floating` for floating labels
- `.is-valid` / `.is-invalid` validation states with feedback messages
- `.form-control-sm` / `.form-control-lg` size variants

## Install

```bash
npm install @thenewcss/forms
```

## Usage

Include the CSS after the-new-css base library:

```html
<link rel="stylesheet" href="path/to/the-new-css.min.css" />
<link rel="stylesheet" href="path/to/@thenewcss/forms/dist/index.min.css" />
```

### Basic Input

```html
<label class="form-label">Email address</label>
<input type="email" class="form-control" placeholder="name@example.com">
<div class="form-text">We'll never share your email.</div>
```

### Select

```html
<select class="form-select">
  <option selected>Choose an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### Checkboxes and Radios

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1">
  <label class="form-check-label" for="check1">Check me</label>
</div>
```

### Switch

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1">
  <label class="form-check-label" for="switch1">Toggle me</label>
</div>
```

### Validation

```html
<input type="text" class="form-control is-valid">
<div class="valid-feedback">Looks good!</div>

<input type="text" class="form-control is-invalid">
<div class="invalid-feedback">Please provide a valid value.</div>
```

## License

MIT
