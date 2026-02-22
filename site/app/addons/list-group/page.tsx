import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'List Group Addon - Lists with Actions and Color Variants',
  description:
    'List group component with actionable items, flush variant, numbered lists, and color variants for primary, success, warning, and danger states.',
  path: '/addons/list-group',
});

const jsonLd = techArticleJsonLd({
  headline: 'List Group Addon',
  description:
    'List group component with actionable items, flush variant, numbered lists, and color variants for primary, success, warning, and danger states.',
  path: '/addons/list-group',
});

export default function ListGroupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">List Group</h1>
      <p className="text-gray-600 mb-6">
        Flexible list components for displaying content in an ordered or unordered list format.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/list-group</code> addon package.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/list-group">
                npm install @thenewcss/list-group
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/list-group/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/list-group/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Basic */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Basic List Group</h2>
      <p className="text-gray-600 mb-4">
        The base <code className="bg-gray-100 px-2 py-1 rounded text-sm">.list-group</code> creates a
        vertical list with bordered items.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <ul className="list-group">
          <li className="list-group-item">First item</li>
          <li className="list-group-item">Second item</li>
          <li className="list-group-item">Third item</li>
          <li className="list-group-item">Fourth item</li>
        </ul>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<ul class="list-group">\n  <li class="list-group-item">First item</li>\n  <li class="list-group-item">Second item</li>\n  <li class="list-group-item">Third item</li>\n</ul>`}>
          {`<ul class="list-group">\n  <li class="list-group-item">First item</li>\n  <li class="list-group-item">Second item</li>\n  <li class="list-group-item">Third item</li>\n</ul>`}
        </CodeBlock>
      </div>

      {/* Actionable */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Actionable Items</h2>
      <p className="text-gray-600 mb-4">
        Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.list-group-item-action</code> for
        hover effects and pointer cursor on clickable items.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action active">Active link</a>
          <a href="#" className="list-group-item list-group-item-action">Regular link</a>
          <a href="#" className="list-group-item list-group-item-action">Another link</a>
          <a href="#" className="list-group-item list-group-item-action disabled">Disabled link</a>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="list-group">\n  <a href="#" class="list-group-item list-group-item-action active">Active link</a>\n  <a href="#" class="list-group-item list-group-item-action">Regular link</a>\n  <a href="#" class="list-group-item list-group-item-action disabled">Disabled link</a>\n</div>`}>
          {`<div class="list-group">\n  <a href="#" class="list-group-item list-group-item-action active">Active link</a>\n  <a href="#" class="list-group-item list-group-item-action">Regular link</a>\n  <a href="#" class="list-group-item list-group-item-action disabled">Disabled link</a>\n</div>`}
        </CodeBlock>
      </div>

      {/* Flush */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Flush</h2>
      <p className="text-gray-600 mb-4">
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.list-group-flush</code> to remove
        outer borders and rounded corners, useful when nesting inside cards.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Flush item one</li>
          <li className="list-group-item">Flush item two</li>
          <li className="list-group-item">Flush item three</li>
        </ul>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<ul class="list-group list-group-flush">\n  <li class="list-group-item">Flush item one</li>\n  <li class="list-group-item">Flush item two</li>\n  <li class="list-group-item">Flush item three</li>\n</ul>`}>
          {`<ul class="list-group list-group-flush">\n  <li class="list-group-item">Flush item one</li>\n  <li class="list-group-item">Flush item two</li>\n  <li class="list-group-item">Flush item three</li>\n</ul>`}
        </CodeBlock>
      </div>

      {/* Color Variants */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Color Variants</h2>
      <p className="text-gray-600 mb-4">
        Add color modifiers to individual items for contextual backgrounds.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <ul className="list-group">
          <li className="list-group-item list-group-item-primary">Primary item</li>
          <li className="list-group-item list-group-item-success">Success item</li>
          <li className="list-group-item list-group-item-warning">Warning item</li>
          <li className="list-group-item list-group-item-danger">Danger item</li>
        </ul>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<ul class="list-group">\n  <li class="list-group-item list-group-item-primary">Primary item</li>\n  <li class="list-group-item list-group-item-success">Success item</li>\n  <li class="list-group-item list-group-item-warning">Warning item</li>\n  <li class="list-group-item list-group-item-danger">Danger item</li>\n</ul>`}>
          {`<ul class="list-group">\n  <li class="list-group-item list-group-item-primary">Primary item</li>\n  <li class="list-group-item list-group-item-success">Success item</li>\n  <li class="list-group-item list-group-item-warning">Warning item</li>\n  <li class="list-group-item list-group-item-danger">Danger item</li>\n</ul>`}
        </CodeBlock>
      </div>

      {/* Numbered */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Numbered</h2>
      <p className="text-gray-600 mb-4">
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.list-group-numbered</code> for
        auto-incrementing numbers via CSS counters.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">First numbered item</li>
          <li className="list-group-item">Second numbered item</li>
          <li className="list-group-item">Third numbered item</li>
        </ol>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<ol class="list-group list-group-numbered">\n  <li class="list-group-item">First numbered item</li>\n  <li class="list-group-item">Second numbered item</li>\n  <li class="list-group-item">Third numbered item</li>\n</ol>`}>
          {`<ol class="list-group list-group-numbered">\n  <li class="list-group-item">First numbered item</li>\n  <li class="list-group-item">Second numbered item</li>\n  <li class="list-group-item">Third numbered item</li>\n</ol>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>
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
              <td className="cell-nowrap"><code>.list-group</code></td>
              <td>Flex column container with border-radius and overflow hidden.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.list-group-item</code></td>
              <td>Individual list item with padding, border-bottom, and background.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.list-group-item-action</code></td>
              <td>Adds hover background and pointer cursor for clickable items.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.list-group-flush</code></td>
              <td>Removes outer borders and border-radius.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.list-group-numbered</code></td>
              <td>Auto-incrementing numbers using CSS counters.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.list-group-item-primary</code></td>
              <td>Blue background for primary context.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.list-group-item-success</code></td>
              <td>Green background for success context.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.list-group-item-warning</code></td>
              <td>Yellow background for warning context.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.list-group-item-danger</code></td>
              <td>Red background for danger context.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
