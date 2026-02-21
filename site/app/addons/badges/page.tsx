import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Badges Addon - Tags and Status Indicators',
  description:
    'Pill-shaped badges and rectangular tags for status indicators, labels, and categorization. Includes color variants, sizes, outline/dot styles, and tag lists.',
  path: '/addons/badges',
});

const jsonLd = techArticleJsonLd({
  headline: 'Badges',
  description:
    'Pill-shaped badges and rectangular tags for status indicators, labels, and categorization. Includes color variants, sizes, outline/dot styles, and tag lists.',
  path: '/addons/badges',
});

export default function BadgesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Badges</h1>
      <p className="text-gray-600 mb-6">
        Pill-shaped badges and rectangular tags for status indicators, labels, and categorization.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/badges</code> addon package.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <p className="text-gray-600 mb-4">
        Install the badges addon via npm or load it from a CDN. Requires the core library.
      </p>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/badges">
                npm install @thenewcss/badges
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/badges/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/badges/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Default Badge + Color Variants */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Color Variants</h2>
      <p className="text-gray-600 mb-4">
        The base <code className="bg-gray-100 px-2 py-1 rounded text-sm">.badge</code> class creates a
        pill-shaped label with blue styling. Add a color modifier to change the color scheme.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3">
          <span className="badge">Default</span>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-dark">Dark</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<span class="badge">Default</span>\n<span class="badge badge-primary">Primary</span>\n<span class="badge badge-danger">Danger</span>\n<span class="badge badge-success">Success</span>\n<span class="badge badge-warning">Warning</span>\n<span class="badge badge-dark">Dark</span>`}>
          {`<span class="badge">Default</span>\n<span class="badge badge-primary">Primary</span>\n<span class="badge badge-danger">Danger</span>\n<span class="badge badge-success">Success</span>\n<span class="badge badge-warning">Warning</span>\n<span class="badge badge-dark">Dark</span>`}
        </CodeBlock>
      </div>

      {/* Sizes */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Sizes</h2>
      <p className="text-gray-600 mb-4">
        Badges come in three sizes. The default size works for most use cases. Use{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.badge-sm</code> for compact layouts and{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.badge-lg</code> for emphasis.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="badge badge-primary badge-sm">Small</span>
          <span className="badge badge-primary">Default</span>
          <span className="badge badge-primary badge-lg">Large</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<span class="badge badge-primary badge-sm">Small</span>\n<span class="badge badge-primary">Default</span>\n<span class="badge badge-primary badge-lg">Large</span>`}>
          {`<span class="badge badge-primary badge-sm">Small</span>\n<span class="badge badge-primary">Default</span>\n<span class="badge badge-primary badge-lg">Large</span>`}
        </CodeBlock>
      </div>

      {/* Outline */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Outline Badges</h2>
      <p className="text-gray-600 mb-4">
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.badge-outline</code> for a transparent
        background with a 1px solid border in the current text color.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-outline">Default</span>
          <span className="badge badge-primary badge-outline">Primary</span>
          <span className="badge badge-danger badge-outline">Danger</span>
          <span className="badge badge-success badge-outline">Success</span>
          <span className="badge badge-warning badge-outline">Warning</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<span class="badge badge-outline">Default</span>\n<span class="badge badge-primary badge-outline">Primary</span>\n<span class="badge badge-danger badge-outline">Danger</span>\n<span class="badge badge-success badge-outline">Success</span>\n<span class="badge badge-warning badge-outline">Warning</span>`}>
          {`<span class="badge badge-outline">Default</span>\n<span class="badge badge-primary badge-outline">Primary</span>\n<span class="badge badge-danger badge-outline">Danger</span>\n<span class="badge badge-success badge-outline">Success</span>\n<span class="badge badge-warning badge-outline">Warning</span>`}
        </CodeBlock>
      </div>

      {/* Dot */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Dot Badges</h2>
      <p className="text-gray-600 mb-4">
        Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.badge-dot</code> to prepend a small
        circle dot indicator via a <code className="bg-gray-100 px-2 py-1 rounded text-sm">::before</code> pseudo-element.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-dot">Default</span>
          <span className="badge badge-primary badge-dot">Primary</span>
          <span className="badge badge-danger badge-dot">Danger</span>
          <span className="badge badge-success badge-dot">Success</span>
          <span className="badge badge-warning badge-dot">Warning</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<span class="badge badge-dot">Default</span>\n<span class="badge badge-primary badge-dot">Primary</span>\n<span class="badge badge-danger badge-dot">Danger</span>\n<span class="badge badge-success badge-dot">Success</span>\n<span class="badge badge-warning badge-dot">Warning</span>`}>
          {`<span class="badge badge-dot">Default</span>\n<span class="badge badge-primary badge-dot">Primary</span>\n<span class="badge badge-danger badge-dot">Danger</span>\n<span class="badge badge-success badge-dot">Success</span>\n<span class="badge badge-warning badge-dot">Warning</span>`}
        </CodeBlock>
      </div>

      {/* Tags */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Tags</h2>
      <p className="text-gray-600 mb-4">
        Tags are rectangular labels for categorization. Use{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.tag</code> for individual tags and{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.tag-list</code> for a flex container
        that wraps tags with consistent spacing.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="tag-list">
          <span className="tag">HTML</span>
          <span className="tag">CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">TypeScript</span>
          <span className="tag">React</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="tag-list">\n  <span class="tag">HTML</span>\n  <span class="tag">CSS</span>\n  <span class="tag">JavaScript</span>\n  <span class="tag">TypeScript</span>\n  <span class="tag">React</span>\n</div>`}>
          {`<div class="tag-list">\n  <span class="tag">HTML</span>\n  <span class="tag">CSS</span>\n  <span class="tag">JavaScript</span>\n  <span class="tag">TypeScript</span>\n  <span class="tag">React</span>\n</div>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      {/* Base */}
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
              <td className="cell-nowrap"><code>.badge</code></td>
              <td>Pill-shaped inline-flex label. Padding 0.125rem/0.5rem, font-size 0.75rem, font-weight 500, full border-radius, blue-50 background, blue-600 text, nowrap.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Colors */}
      <h3 className="font-semibold mt-6 mb-2">Colors</h3>
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
              <td className="cell-nowrap"><code>.badge-primary</code></td>
              <td>Blue background and text color.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.badge-danger</code></td>
              <td>Red background and text color.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.badge-success</code></td>
              <td>Green background and text color.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.badge-warning</code></td>
              <td>Yellow background and text color.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.badge-dark</code></td>
              <td>Gray-900 background with white text.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sizes */}
      <h3 className="font-semibold mt-6 mb-2">Sizes</h3>
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
              <td className="cell-nowrap"><code>.badge-sm</code></td>
              <td>Small badge. Padding 0/0.25rem, font-size 0.625rem.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.badge-lg</code></td>
              <td>Large badge. Padding 0.25rem/0.75rem, font-size 0.875rem.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Styles */}
      <h3 className="font-semibold mt-6 mb-2">Styles</h3>
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
              <td className="cell-nowrap"><code>.badge-outline</code></td>
              <td>Transparent background with a 1px solid currentColor border.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.badge-dot</code></td>
              <td>Prepends a 0.375rem circle dot indicator via ::before pseudo-element.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tags */}
      <h3 className="font-semibold mt-6 mb-2">Tags</h3>
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
              <td className="cell-nowrap"><code>.tag</code></td>
              <td>Inline-flex rectangular label. Padding 0.25rem/0.75rem, font-size 0.875rem, medium border-radius, gray-100 background, gray-800 text.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.tag-list</code></td>
              <td>Flex container with wrap and 0.5rem gap for grouping tags.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
