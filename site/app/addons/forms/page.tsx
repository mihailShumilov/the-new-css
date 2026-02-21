import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Forms Addon - Styled Inputs, Selects, and Validation',
  description:
    'Styled form controls with custom inputs, selects, checkboxes, radios, switches, range sliders, input groups, floating labels, and validation states.',
  path: '/addons/forms',
});

const jsonLd = techArticleJsonLd({
  headline: 'Forms Addon',
  description:
    'Styled form controls with custom inputs, selects, checkboxes, radios, switches, range sliders, input groups, floating labels, and validation states.',
  path: '/addons/forms',
});

export default function FormsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Forms</h1>
      <p className="text-gray-600 mb-6">
        Styled form controls with custom inputs, selects, checkboxes, switches, and validation.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/forms</code> addon package.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/forms">
                npm install @thenewcss/forms
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/forms/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/forms/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Basic Input */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Text Input</h2>
      <p className="text-gray-600 mb-4">
        The <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-control</code> class styles text inputs
        with consistent padding, borders, and focus states.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" placeholder="name@example.com" />
        <div className="form-text">We&apos;ll never share your email.</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<label class="form-label">Email address</label>\n<input type="email" class="form-control" placeholder="name@example.com">\n<div class="form-text">We'll never share your email.</div>`}>
          {`<label class="form-label">Email address</label>\n<input type="email" class="form-control" placeholder="name@example.com">\n<div class="form-text">We'll never share your email.</div>`}
        </CodeBlock>
      </div>

      {/* Select */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Select</h2>
      <p className="text-gray-600 mb-4">
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-select</code> for a custom-styled dropdown
        with a chevron indicator.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <select className="form-select">
          <option>Choose an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<select class="form-select">\n  <option>Choose an option</option>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n</select>`}>
          {`<select class="form-select">\n  <option>Choose an option</option>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n</select>`}
        </CodeBlock>
      </div>

      {/* Checkboxes & Radios */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Checkboxes &amp; Radios</h2>
      <p className="text-gray-600 mb-4">
        Wrap checkbox/radio inputs in <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-check</code> with
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-check-input</code> for custom styling.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="check1" defaultChecked />
          <label className="form-check-label" htmlFor="check1">Checked checkbox</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="check2" />
          <label className="form-check-label" htmlFor="check2">Unchecked checkbox</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="radio1" id="radio1" defaultChecked />
          <label className="form-check-label" htmlFor="radio1">Selected radio</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="radio1" id="radio2" />
          <label className="form-check-label" htmlFor="radio2">Other radio</label>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="form-check">\n  <input class="form-check-input" type="checkbox" id="check1" checked>\n  <label class="form-check-label" for="check1">Checked checkbox</label>\n</div>\n<div class="form-check">\n  <input class="form-check-input" type="radio" name="radio1" id="radio1" checked>\n  <label class="form-check-label" for="radio1">Selected radio</label>\n</div>`}>
          {`<div class="form-check">\n  <input class="form-check-input" type="checkbox" id="check1" checked>\n  <label class="form-check-label" for="check1">Checked checkbox</label>\n</div>\n<div class="form-check">\n  <input class="form-check-input" type="radio" name="radio1" id="radio1" checked>\n  <label class="form-check-label" for="radio1">Selected radio</label>\n</div>`}
        </CodeBlock>
      </div>

      {/* Switch */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Switch</h2>
      <p className="text-gray-600 mb-4">
        Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-switch</code> to the check container
        for a toggle switch appearance.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="switch1" defaultChecked />
          <label className="form-check-label" htmlFor="switch1">Enabled</label>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="switch2" />
          <label className="form-check-label" htmlFor="switch2">Disabled</label>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="form-check form-switch">\n  <input class="form-check-input" type="checkbox" id="switch1" checked>\n  <label class="form-check-label" for="switch1">Enabled</label>\n</div>`}>
          {`<div class="form-check form-switch">\n  <input class="form-check-input" type="checkbox" id="switch1" checked>\n  <label class="form-check-label" for="switch1">Enabled</label>\n</div>`}
        </CodeBlock>
      </div>

      {/* Input Group */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Input Group</h2>
      <p className="text-gray-600 mb-4">
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.input-group</code> with{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.input-group-text</code> to prepend or append
        text/icons to form controls.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Amount" />
          <span className="input-group-text">.00</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="input-group">\n  <span class="input-group-text">@</span>\n  <input type="text" class="form-control" placeholder="Username">\n</div>`}>
          {`<div class="input-group">\n  <span class="input-group-text">@</span>\n  <input type="text" class="form-control" placeholder="Username">\n</div>`}
        </CodeBlock>
      </div>

      {/* Floating Labels */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Floating Labels</h2>
      <p className="text-gray-600 mb-4">
        Wrap a <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-control</code> and label in{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-floating</code> for labels that
        float above the input on focus.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatEmail" placeholder="name@example.com" />
          <label htmlFor="floatEmail">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatPass" placeholder="Password" />
          <label htmlFor="floatPass">Password</label>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="form-floating">\n  <input type="email" class="form-control" id="floatEmail" placeholder="name@example.com">\n  <label for="floatEmail">Email address</label>\n</div>`}>
          {`<div class="form-floating">\n  <input type="email" class="form-control" id="floatEmail" placeholder="name@example.com">\n  <label for="floatEmail">Email address</label>\n</div>`}
        </CodeBlock>
      </div>

      {/* Validation */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Validation</h2>
      <p className="text-gray-600 mb-4">
        Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.is-valid</code> or{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.is-invalid</code> to form controls
        to show validation states with feedback messages.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="mb-3">
          <label className="form-label">Valid input</label>
          <input type="text" className="form-control is-valid" defaultValue="Correct value" />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div>
          <label className="form-label">Invalid input</label>
          <input type="text" className="form-control is-invalid" defaultValue="" />
          <div className="invalid-feedback">Please provide a valid value.</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<input type="text" class="form-control is-valid" value="Correct value">\n<div class="valid-feedback">Looks good!</div>\n\n<input type="text" class="form-control is-invalid">\n<div class="invalid-feedback">Please provide a valid value.</div>`}>
          {`<input type="text" class="form-control is-valid" value="Correct value">\n<div class="valid-feedback">Looks good!</div>\n\n<input type="text" class="form-control is-invalid">\n<div class="invalid-feedback">Please provide a valid value.</div>`}
        </CodeBlock>
      </div>

      {/* Sizes */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Sizes</h2>
      <p className="text-gray-600 mb-4">
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-control-sm</code> or{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.form-control-lg</code> for smaller or larger inputs.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <input type="text" className="form-control form-control-sm mb-3" placeholder="Small input" />
        <input type="text" className="form-control mb-3" placeholder="Default input" />
        <input type="text" className="form-control form-control-lg" placeholder="Large input" />
      </div>
      <div className="mb-6">
        <CodeBlock code={`<input type="text" class="form-control form-control-sm" placeholder="Small input">\n<input type="text" class="form-control" placeholder="Default input">\n<input type="text" class="form-control form-control-lg" placeholder="Large input">`}>
          {`<input type="text" class="form-control form-control-sm" placeholder="Small input">\n<input type="text" class="form-control" placeholder="Default input">\n<input type="text" class="form-control form-control-lg" placeholder="Large input">`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Base</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.form-control</code></td>
              <td>Full-width text input with padding, border, border-radius, and focus ring.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-label</code></td>
              <td>Block label with margin-bottom and medium font weight.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-text</code></td>
              <td>Small help text below inputs. Gray color, 0.75rem font-size.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-select</code></td>
              <td>Custom-styled select dropdown with chevron indicator.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Checks &amp; Switches</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.form-check</code></td>
              <td>Container for checkbox/radio with left padding for the input.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-check-input</code></td>
              <td>Custom-styled checkbox or radio input. Blue when checked.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-check-label</code></td>
              <td>Label for checkbox/radio with cursor pointer.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-switch</code></td>
              <td>Modifier on .form-check for a toggle switch appearance.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Groups &amp; Layout</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.input-group</code></td>
              <td>Flex container for prepend/append text around form controls.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.input-group-text</code></td>
              <td>Text/icon addon inside an input group. Gray background.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-floating</code></td>
              <td>Container for floating label pattern. Label floats on focus/filled.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-range</code></td>
              <td>Custom-styled range slider input.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Validation &amp; Sizes</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.is-valid</code></td>
              <td>Green border indicating valid input.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.is-invalid</code></td>
              <td>Red border indicating invalid input.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.valid-feedback</code></td>
              <td>Green feedback text, shown when sibling has .is-valid.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.invalid-feedback</code></td>
              <td>Red feedback text, shown when sibling has .is-invalid.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-control-sm</code></td>
              <td>Small input with reduced padding and font-size.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.form-control-lg</code></td>
              <td>Large input with increased padding and font-size.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
