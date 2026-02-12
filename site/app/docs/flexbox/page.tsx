import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';

export const metadata = docMeta({
  title: 'Flexbox Utilities',
  description: 'Flexbox utility classes for direction, wrapping, alignment, justification, grow, shrink, and gap. Build flexible layouts with The New CSS.',
  path: '/docs/flexbox',
});

const jsonLd = techArticleJsonLd({
  headline: 'Flexbox Utilities',
  description: 'Flexbox utility classes for direction, wrapping, alignment, justification, grow, shrink, and gap. Build flexible layouts with The New CSS.',
  path: '/docs/flexbox',
});

export default function FlexboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Flexbox</h1>
      <p className="text-gray-600 mb-6">Utilities for controlling flex container direction, wrapping, alignment, and child sizing. Use with the <code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex</code> display utility.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Direction</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-row</code></td><td className="py-2"><code className="text-sm">flex-direction: row</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-row-reverse</code></td><td className="py-2"><code className="text-sm">flex-direction: row-reverse</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-col</code></td><td className="py-2"><code className="text-sm">flex-direction: column</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-col-reverse</code></td><td className="py-2"><code className="text-sm">flex-direction: column-reverse</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Wrap</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-wrap</code></td><td className="py-2"><code className="text-sm">flex-wrap: wrap</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-nowrap</code></td><td className="py-2"><code className="text-sm">flex-wrap: nowrap</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Align Items</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.items-start</code></td><td className="py-2"><code className="text-sm">align-items: flex-start</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.items-end</code></td><td className="py-2"><code className="text-sm">align-items: flex-end</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.items-center</code></td><td className="py-2"><code className="text-sm">align-items: center</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.items-baseline</code></td><td className="py-2"><code className="text-sm">align-items: baseline</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.items-stretch</code></td><td className="py-2"><code className="text-sm">align-items: stretch</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Justify Content</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.justify-start</code></td><td className="py-2"><code className="text-sm">justify-content: flex-start</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.justify-end</code></td><td className="py-2"><code className="text-sm">justify-content: flex-end</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.justify-center</code></td><td className="py-2"><code className="text-sm">justify-content: center</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.justify-between</code></td><td className="py-2"><code className="text-sm">justify-content: space-between</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Align Self</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.self-start</code></td><td className="py-2"><code className="text-sm">align-self: flex-start</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.self-end</code></td><td className="py-2"><code className="text-sm">align-self: flex-end</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.self-center</code></td><td className="py-2"><code className="text-sm">align-self: center</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.self-stretch</code></td><td className="py-2"><code className="text-sm">align-self: stretch</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Flex Shorthand</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-1</code></td><td className="py-2"><code className="text-sm">flex: 1 1 0%</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-auto</code></td><td className="py-2"><code className="text-sm">flex: 1 1 auto</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex-none</code></td><td className="py-2"><code className="text-sm">flex: none</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Grow & Shrink</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grow</code></td><td className="py-2"><code className="text-sm">flex-grow: 1</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grow-0</code></td><td className="py-2"><code className="text-sm">flex-grow: 0</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.shrink</code></td><td className="py-2"><code className="text-sm">flex-shrink: 1</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.shrink-0</code></td><td className="py-2"><code className="text-sm">flex-shrink: 0</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Gap</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-0</code></td><td className="py-2"><code className="text-sm">gap: 0</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-1</code></td><td className="py-2"><code className="text-sm">gap: var(--spacing-1)</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-2</code></td><td className="py-2"><code className="text-sm">gap: var(--spacing-2)</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-3</code></td><td className="py-2"><code className="text-sm">gap: var(--spacing-3)</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-4</code></td><td className="py-2"><code className="text-sm">gap: var(--spacing-4)</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-6</code></td><td className="py-2"><code className="text-sm">gap: var(--spacing-6)</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-8</code></td><td className="py-2"><code className="text-sm">gap: var(--spacing-8)</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-10</code></td><td className="py-2"><code className="text-sm">gap: var(--spacing-10)</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.gap-12</code></td><td className="py-2"><code className="text-sm">gap: var(--spacing-12)</code></td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Examples</h2>

      <h3 className="font-semibold mt-6 mb-2">Horizontal Navigation Bar</h3>
      <p className="text-gray-600 mb-3">A common navbar pattern with logo on the left and links on the right:</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-3">
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
          <span className="font-bold text-sm">Logo</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Home</span>
            <span className="text-sm text-gray-600">About</span>
            <span className="text-sm text-gray-600">Contact</span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="flex items-center justify-between px-4 py-3">\n  <span class="font-bold">Logo</span>\n  <div class="flex items-center gap-4">\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </div>\n</div>`}>
          {`<div class="flex items-center justify-between px-4 py-3">\n  <span class="font-bold">Logo</span>\n  <div class="flex items-center gap-4">\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </div>\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Sidebar + Content Layout</h3>
      <p className="text-gray-600 mb-3">A flex layout with a fixed-width sidebar and a flexible content area:</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-3">
        <div className="flex gap-4" style={{ height: 120 }}>
          <div className="shrink-0 bg-gray-200 rounded-lg p-3 text-sm text-gray-600" style={{ width: 100 }}>Sidebar</div>
          <div className="flex-1 bg-gray-100 rounded-lg p-3 text-sm text-gray-600">Main content area grows to fill remaining space.</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="flex gap-4">\n  <aside class="shrink-0" style="width: 200px;">Sidebar</aside>\n  <main class="flex-1">Main content</main>\n</div>`}>
          {`<div class="flex gap-4">\n  <aside class="shrink-0" style="width: 200px;">Sidebar</aside>\n  <main class="flex-1">Main content</main>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
