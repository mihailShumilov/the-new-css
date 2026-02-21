import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Accordion Addon - CSS-Only Collapsible Panels',
  description:
    'CSS-only accordion using native details/summary elements. Custom chevron indicator, flush variant, and exclusive mode via HTML name attribute.',
  path: '/addons/accordion',
});

const jsonLd = techArticleJsonLd({
  headline: 'Accordion Addon',
  description:
    'CSS-only accordion using native details/summary elements. Custom chevron indicator, flush variant, and exclusive mode via HTML name attribute.',
  path: '/addons/accordion',
});

export default function AccordionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Accordion</h1>
      <p className="text-gray-600 mb-6">
        CSS-only collapsible panels using native{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;details&gt;</code> /{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;summary&gt;</code> elements.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/accordion</code> addon package.
      </p>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-8">
        <p className="text-blue-800 text-sm font-medium">
          No JavaScript required. Uses the HTML <code className="bg-blue-100 px-1 rounded">name</code> attribute
          for exclusive mode (one panel open at a time) in modern browsers.
        </p>
      </div>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/accordion">
                npm install @thenewcss/accordion
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/accordion/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/accordion/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Basic Accordion */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Basic Accordion</h2>
      <p className="text-gray-600 mb-4">
        Wrap <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;details&gt;</code> elements
        with <code className="bg-gray-100 px-2 py-1 rounded text-sm">.accordion-item</code> inside an{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">.accordion</code> container.
        Use the <code className="bg-gray-100 px-2 py-1 rounded text-sm">name</code> attribute for exclusive mode.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="accordion">
          <details className="accordion-item" name="demo">
            <summary className="accordion-header">Accordion Item #1</summary>
            <div className="accordion-body">
              This is the content for the first accordion panel. It can contain any HTML content.
            </div>
          </details>
          <details className="accordion-item" name="demo">
            <summary className="accordion-header">Accordion Item #2</summary>
            <div className="accordion-body">
              This is the content for the second accordion panel. Only one panel is open at a time
              when using the same <code>name</code> attribute.
            </div>
          </details>
          <details className="accordion-item" name="demo">
            <summary className="accordion-header">Accordion Item #3</summary>
            <div className="accordion-body">
              This is the content for the third accordion panel.
            </div>
          </details>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="accordion">\n  <details class="accordion-item" name="faq">\n    <summary class="accordion-header">Accordion Item #1</summary>\n    <div class="accordion-body">\n      Content for the first panel.\n    </div>\n  </details>\n  <details class="accordion-item" name="faq">\n    <summary class="accordion-header">Accordion Item #2</summary>\n    <div class="accordion-body">\n      Content for the second panel.\n    </div>\n  </details>\n</div>`}>
          {`<div class="accordion">\n  <details class="accordion-item" name="faq">\n    <summary class="accordion-header">Accordion Item #1</summary>\n    <div class="accordion-body">\n      Content for the first panel.\n    </div>\n  </details>\n  <details class="accordion-item" name="faq">\n    <summary class="accordion-header">Accordion Item #2</summary>\n    <div class="accordion-body">\n      Content for the second panel.\n    </div>\n  </details>\n</div>`}
        </CodeBlock>
      </div>

      {/* Always Open */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Always Open</h2>
      <p className="text-gray-600 mb-4">
        Omit the <code className="bg-gray-100 px-2 py-1 rounded text-sm">name</code> attribute to allow
        multiple panels to be open simultaneously. Add{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">open</code> to start a panel expanded.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="accordion">
          <details className="accordion-item" open>
            <summary className="accordion-header">First Item (open by default)</summary>
            <div className="accordion-body">This panel starts open.</div>
          </details>
          <details className="accordion-item">
            <summary className="accordion-header">Second Item</summary>
            <div className="accordion-body">Click to expand independently.</div>
          </details>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="accordion">\n  <details class="accordion-item" open>\n    <summary class="accordion-header">First Item (open by default)</summary>\n    <div class="accordion-body">This panel starts open.</div>\n  </details>\n  <details class="accordion-item">\n    <summary class="accordion-header">Second Item</summary>\n    <div class="accordion-body">Click to expand independently.</div>\n  </details>\n</div>`}>
          {`<div class="accordion">\n  <details class="accordion-item" open>\n    <summary class="accordion-header">First Item (open by default)</summary>\n    <div class="accordion-body">This panel starts open.</div>\n  </details>\n  <details class="accordion-item">\n    <summary class="accordion-header">Second Item</summary>\n    <div class="accordion-body">Click to expand independently.</div>\n  </details>\n</div>`}
        </CodeBlock>
      </div>

      {/* Flush */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Flush</h2>
      <p className="text-gray-600 mb-4">
        Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.accordion-flush</code> to remove
        outer borders and rounded corners.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="accordion accordion-flush">
          <details className="accordion-item" name="flush-demo">
            <summary className="accordion-header">Flush Item #1</summary>
            <div className="accordion-body">Content without outer borders.</div>
          </details>
          <details className="accordion-item" name="flush-demo">
            <summary className="accordion-header">Flush Item #2</summary>
            <div className="accordion-body">Clean edge-to-edge appearance.</div>
          </details>
          <details className="accordion-item" name="flush-demo">
            <summary className="accordion-header">Flush Item #3</summary>
            <div className="accordion-body">Great for embedding in cards.</div>
          </details>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="accordion accordion-flush">\n  <details class="accordion-item" name="flush-faq">\n    <summary class="accordion-header">Flush Item #1</summary>\n    <div class="accordion-body">Content without outer borders.</div>\n  </details>\n</div>`}>
          {`<div class="accordion accordion-flush">\n  <details class="accordion-item" name="flush-faq">\n    <summary class="accordion-header">Flush Item #1</summary>\n    <div class="accordion-body">Content without outer borders.</div>\n  </details>\n</div>`}
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
              <td className="cell-nowrap"><code>.accordion</code></td>
              <td>Container for accordion items.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.accordion-item</code></td>
              <td>Applied to details element. Has border-bottom and border-radius on first/last child.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.accordion-header</code></td>
              <td>Applied to summary element. Styled heading with custom chevron indicator that rotates on open.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.accordion-body</code></td>
              <td>Content panel with padding.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.accordion-flush</code></td>
              <td>Modifier that removes outer borders and border-radius.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
