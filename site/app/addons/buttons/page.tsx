import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Buttons Addon - Sizes, Colors, and States',
  description:
    'A complete button component system for The New CSS. Sizes, colors, outline/ghost/link styles, loading states, button groups, and icon buttons.',
  path: '/addons/buttons',
});

const jsonLd = techArticleJsonLd({
  headline: 'Buttons Addon',
  description:
    'A complete button component system for The New CSS. Sizes, colors, outline/ghost/link styles, loading states, button groups, and icon buttons.',
  path: '/addons/buttons',
});

export default function ButtonsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-4">Buttons</h1>

      <p className="text-gray-600 mb-4 leading-relaxed">
        A complete button component system with sizes, colors, outline/ghost/link styles, loading
        states with spinner animation, and button groups. Built on the core design tokens.
      </p>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-8">
        <p className="text-blue-800 text-sm font-medium">
          This addon is ~3KB and works alongside the core library. Install it separately to keep
          your base bundle lean.
        </p>
      </div>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <p className="text-gray-600 mb-4">
        Install via npm or load from a CDN. The buttons addon uses the same design tokens as the
        core library.
      </p>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/buttons">
                npm install @thenewcss/buttons
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/buttons/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/buttons/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Basic Usage */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Basic Usage</h2>
      <p className="text-gray-600 mb-4">
        Add the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">.btn</code> class to
        any button or anchor element. Combine with color and style modifiers for different
        appearances.
      </p>

      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary btn-outline">Secondary</button>
          <button className="btn btn-danger btn-outline">Danger</button>
        </div>
      </div>
      <div className="mb-8">
        <CodeBlock code={`<button class="btn btn-primary">Primary</button>\n<button class="btn btn-secondary btn-outline">Secondary</button>\n<button class="btn btn-danger btn-outline">Danger</button>`}>
          {`<button class="btn btn-primary">Primary</button>\n<button class="btn btn-secondary btn-outline">Secondary</button>\n<button class="btn btn-danger btn-outline">Danger</button>`}
        </CodeBlock>
      </div>

      {/* Base Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Base Class</h2>
      <p className="text-gray-600 mb-4">
        The <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">.btn</code> class provides
        the foundation for all buttons.
      </p>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.btn</code></td>
              <td>
                inline-flex, padding 0.5rem 1rem, font-size 0.875rem, font-weight 500,
                border-radius md, bg blue-600, color white, cursor pointer, transition 150ms.
                Hover: bg blue-700. Focus-visible: outline 2px blue-600.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sizes */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Sizes</h2>
      <p className="text-gray-600 mb-4">
        Use size modifier classes to change button dimensions. The default size sits between
        <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">.btn-sm</code> and
        <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">.btn-lg</code>.
      </p>

      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-xs">Extra Small</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn">Default</button>
          <button className="btn btn-lg">Large</button>
          <button className="btn btn-xl">Extra Large</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-xs">Extra Small</button>\n<button class="btn btn-sm">Small</button>\n<button class="btn">Default</button>\n<button class="btn btn-lg">Large</button>\n<button class="btn btn-xl">Extra Large</button>`}>
          {`<button class="btn btn-xs">Extra Small</button>\n<button class="btn btn-sm">Small</button>\n<button class="btn">Default</button>\n<button class="btn btn-lg">Large</button>\n<button class="btn btn-xl">Extra Large</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Sizes Reference</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Padding</th>
              <th>Font Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.btn-xs</code></td>
              <td>0.25rem 0.5rem</td>
              <td>0.75rem</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-sm</code></td>
              <td>0.25rem 0.75rem</td>
              <td>0.875rem</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn</code> (default)</td>
              <td>0.5rem 1rem</td>
              <td>0.875rem</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-lg</code></td>
              <td>0.75rem 1.5rem</td>
              <td>1rem</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-xl</code></td>
              <td>1rem 2rem</td>
              <td>1.125rem</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Colors */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Colors</h2>
      <p className="text-gray-600 mb-4">
        Color classes change the background and text color of a button. Each variant includes
        appropriate hover states.
      </p>

      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-dark">Dark</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-primary">Primary</button>\n<button class="btn btn-secondary">Secondary</button>\n<button class="btn btn-danger">Danger</button>\n<button class="btn btn-success">Success</button>\n<button class="btn btn-warning">Warning</button>\n<button class="btn btn-dark">Dark</button>`}>
          {`<button class="btn btn-primary">Primary</button>\n<button class="btn btn-secondary">Secondary</button>\n<button class="btn btn-danger">Danger</button>\n<button class="btn btn-success">Success</button>\n<button class="btn btn-warning">Warning</button>\n<button class="btn btn-dark">Dark</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Colors Reference</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.btn-primary</code></td>
              <td>Blue background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-secondary</code></td>
              <td>Gray background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-danger</code></td>
              <td>Red background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-success</code></td>
              <td>Green background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-warning</code></td>
              <td>Yellow background, dark text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-dark</code></td>
              <td>Gray-900 background, white text</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Style Variants */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Style Variants</h2>
      <p className="text-gray-600 mb-4">
        Style modifiers change the visual appearance of buttons. Combine with color classes for
        themed variants.
      </p>

      <h3 className="font-semibold mt-6 mb-3">Outline</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-primary btn-outline">Primary Outline</button>
          <button className="btn btn-danger btn-outline">Danger Outline</button>
          <button className="btn btn-success btn-outline">Success Outline</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-outline">Outline</button>\n<button class="btn btn-primary btn-outline">Primary Outline</button>\n<button class="btn btn-danger btn-outline">Danger Outline</button>\n<button class="btn btn-success btn-outline">Success Outline</button>`}>
          {`<button class="btn btn-outline">Outline</button>\n<button class="btn btn-primary btn-outline">Primary Outline</button>\n<button class="btn btn-danger btn-outline">Danger Outline</button>\n<button class="btn btn-success btn-outline">Success Outline</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Ghost</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-ghost">Ghost</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-ghost">Ghost</button>`}>
          {`<button class="btn btn-ghost">Ghost</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Link</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-link">Link Button</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-link">Link Button</button>`}>
          {`<button class="btn btn-link">Link Button</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Styles Reference</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.btn-outline</code></td>
              <td>Transparent background, currentColor border. Hover: blue-600 bg, white text.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-ghost</code></td>
              <td>Transparent background, blue-600 text. Hover: blue-50 background.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-link</code></td>
              <td>Transparent background, blue-600 text, underlined. No padding or border-radius.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* States */}
      <h2 className="text-xl font-semibold mt-10 mb-4">States</h2>
      <p className="text-gray-600 mb-4">
        Buttons support disabled and loading states out of the box.
      </p>

      <h3 className="font-semibold mt-6 mb-3">Disabled</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-primary" disabled>Disabled</button>
          <button className="btn btn-secondary btn-outline" disabled>Disabled Outline</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-primary" disabled>Disabled</button>\n<button class="btn btn-secondary btn-outline" disabled>Disabled Outline</button>`}>
          {`<button class="btn btn-primary" disabled>Disabled</button>\n<button class="btn btn-secondary btn-outline" disabled>Disabled Outline</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Loading</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-primary btn-loading">Loading</button>
          <button className="btn btn-secondary btn-loading">Loading</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-primary btn-loading">Loading</button>\n<button class="btn btn-secondary btn-loading">Loading</button>`}>
          {`<button class="btn btn-primary btn-loading">Loading</button>\n<button class="btn btn-secondary btn-loading">Loading</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">States Reference</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class / Attribute</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>disabled</code> / <code>[disabled]</code></td>
              <td>Reduces opacity to 0.5, sets cursor to not-allowed.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-loading</code></td>
              <td>Makes text transparent and displays a ::after spinner animation.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Layout */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Layout</h2>
      <p className="text-gray-600 mb-4">
        Layout modifiers control button width, aspect ratio, and grouping.
      </p>

      <h3 className="font-semibold mt-6 mb-3">Block Button</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <button className="btn btn-primary btn-block">Full Width Button</button>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-primary btn-block">Full Width Button</button>`}>
          {`<button class="btn btn-primary btn-block">Full Width Button</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Icon Button</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <button className="btn btn-icon" aria-label="Close">&#x2715;</button>
          <button className="btn btn-icon btn-outline" aria-label="Add">&#x2b;</button>
          <button className="btn btn-icon btn-sm" aria-label="Check">&#x2713;</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn btn-icon" aria-label="Close">&#x2715;</button>\n<button class="btn btn-icon btn-outline" aria-label="Add">&#x2b;</button>\n<button class="btn btn-icon btn-sm" aria-label="Check">&#x2713;</button>`}>
          {`<button class="btn btn-icon" aria-label="Close">&#x2715;</button>\n<button class="btn btn-icon btn-outline" aria-label="Add">&#x2b;</button>\n<button class="btn btn-icon btn-sm" aria-label="Check">&#x2713;</button>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Button Group</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="btn-group">
          <button className="btn btn-outline">Left</button>
          <button className="btn btn-outline">Center</button>
          <button className="btn btn-outline">Right</button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="btn-group">\n  <button class="btn btn-outline">Left</button>\n  <button class="btn btn-outline">Center</button>\n  <button class="btn btn-outline">Right</button>\n</div>`}>
          {`<div class="btn-group">\n  <button class="btn btn-outline">Left</button>\n  <button class="btn btn-outline">Center</button>\n  <button class="btn btn-outline">Right</button>\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-3">Layout Reference</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.btn-block</code></td>
              <td>Makes the button full width (display: block, width: 100%).</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-icon</code></td>
              <td>Square button with aspect-ratio 1, ideal for icon-only buttons.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-group</code></td>
              <td>
                Wraps buttons in an inline-flex container. Children lose inner border-radius;
                first and last keep outer corners.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Full Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Full Class Reference</h2>
      <p className="text-gray-600 mb-4">
        All available classes from the buttons addon at a glance.
      </p>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.btn</code></td>
              <td>Base</td>
              <td>Base button styles with padding, font, radius, color, and transitions</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-xs</code></td>
              <td>Size</td>
              <td>Extra small: 0.25rem/0.5rem padding, 0.75rem font</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-sm</code></td>
              <td>Size</td>
              <td>Small: 0.25rem/0.75rem padding, 0.875rem font</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-lg</code></td>
              <td>Size</td>
              <td>Large: 0.75rem/1.5rem padding, 1rem font</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-xl</code></td>
              <td>Size</td>
              <td>Extra large: 1rem/2rem padding, 1.125rem font</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-primary</code></td>
              <td>Color</td>
              <td>Blue background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-secondary</code></td>
              <td>Color</td>
              <td>Gray background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-danger</code></td>
              <td>Color</td>
              <td>Red background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-success</code></td>
              <td>Color</td>
              <td>Green background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-warning</code></td>
              <td>Color</td>
              <td>Yellow background, dark text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-dark</code></td>
              <td>Color</td>
              <td>Gray-900 background, white text</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-outline</code></td>
              <td>Style</td>
              <td>Transparent bg, currentColor border; hover fills blue-600</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-ghost</code></td>
              <td>Style</td>
              <td>Transparent bg, blue-600 text; hover fills blue-50</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-link</code></td>
              <td>Style</td>
              <td>Transparent, blue-600, underlined, no padding/radius</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-loading</code></td>
              <td>State</td>
              <td>Transparent text with ::after spinner animation</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-block</code></td>
              <td>Layout</td>
              <td>Full-width button</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-icon</code></td>
              <td>Layout</td>
              <td>Square button with aspect-ratio 1</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-group</code></td>
              <td>Layout</td>
              <td>Inline-flex container; children share inner edges</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
