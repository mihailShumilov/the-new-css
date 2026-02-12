import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Grid',
  description: 'CSS Grid utilities for The New CSS. Control grid columns, column spans, row spans, flow direction, and placement.',
};

export default function GridPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Grid</h1>
      <p className="text-gray-600 mb-6">Utilities for creating CSS Grid layouts. Define column templates, span items across columns and rows, and control placement. Use with the <code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid</code> display utility.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Grid Template Columns</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid-cols-1</code></td><td className="py-2"><code className="text-sm">grid-template-columns: repeat(1, minmax(0, 1fr))</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid-cols-2</code></td><td className="py-2"><code className="text-sm">grid-template-columns: repeat(2, minmax(0, 1fr))</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid-cols-3</code></td><td className="py-2"><code className="text-sm">grid-template-columns: repeat(3, minmax(0, 1fr))</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid-cols-4</code></td><td className="py-2"><code className="text-sm">grid-template-columns: repeat(4, minmax(0, 1fr))</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid-cols-6</code></td><td className="py-2"><code className="text-sm">grid-template-columns: repeat(6, minmax(0, 1fr))</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid-cols-12</code></td><td className="py-2"><code className="text-sm">grid-template-columns: repeat(12, minmax(0, 1fr))</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Column Span</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.col-auto</code></td><td className="py-2"><code className="text-sm">grid-column: auto</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.col-span-1</code></td><td className="py-2"><code className="text-sm">grid-column: span 1 / span 1</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.col-span-2</code></td><td className="py-2"><code className="text-sm">grid-column: span 2 / span 2</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.col-span-3</code></td><td className="py-2"><code className="text-sm">grid-column: span 3 / span 3</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.col-span-4</code></td><td className="py-2"><code className="text-sm">grid-column: span 4 / span 4</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.col-span-full</code></td><td className="py-2"><code className="text-sm">grid-column: 1 / -1</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Row Span</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.row-span-2</code></td><td className="py-2"><code className="text-sm">grid-row: span 2 / span 2</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.row-span-3</code></td><td className="py-2"><code className="text-sm">grid-row: span 3 / span 3</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Grid Flow</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid-flow-row</code></td><td className="py-2"><code className="text-sm">grid-auto-flow: row</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid-flow-col</code></td><td className="py-2"><code className="text-sm">grid-auto-flow: column</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Place Items & Content</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.place-items-center</code></td><td className="py-2"><code className="text-sm">place-items: center</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.place-content-center</code></td><td className="py-2"><code className="text-sm">place-content: center</code></td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Examples</h2>

      <h3 className="font-semibold mt-6 mb-2">Three-Column Card Grid</h3>
      <p className="text-gray-600 mb-3">A basic three-column grid with equal-width cards and gap spacing:</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Card 1</div>
          <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Card 2</div>
          <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Card 3</div>
          <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Card 4</div>
          <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Card 5</div>
          <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Card 6</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="grid grid-cols-3 gap-4">\n  <div class="bg-gray-100 rounded-lg p-4">Card 1</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 2</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 3</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 4</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 5</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 6</div>\n</div>`}>
          {`<div class="grid grid-cols-3 gap-4">\n  <div class="bg-gray-100 rounded-lg p-4">Card 1</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 2</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 3</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 4</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 5</div>\n  <div class="bg-gray-100 rounded-lg p-4">Card 6</div>\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Column Spanning</h3>
      <p className="text-gray-600 mb-3">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">col-span-*</code> to make items span multiple columns. The <code className="bg-gray-100 px-2 py-1 rounded text-sm">col-span-full</code> class spans the entire row:</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-3">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-full bg-blue-600 text-white rounded-lg p-4 text-sm text-center">Header (col-span-full)</div>
          <div className="col-span-3 bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Content (col-span-3)</div>
          <div className="bg-gray-200 rounded-lg p-4 text-sm text-gray-600 text-center">Side</div>
          <div className="col-span-2 bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Left (col-span-2)</div>
          <div className="col-span-2 bg-gray-100 rounded-lg p-4 text-sm text-gray-600 text-center">Right (col-span-2)</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="grid grid-cols-4 gap-4">\n  <div class="col-span-full">Header</div>\n  <div class="col-span-3">Content</div>\n  <div>Sidebar</div>\n  <div class="col-span-2">Left</div>\n  <div class="col-span-2">Right</div>\n</div>`}>
          {`<div class="grid grid-cols-4 gap-4">\n  <div class="col-span-full">Header</div>\n  <div class="col-span-3">Content</div>\n  <div>Sidebar</div>\n  <div class="col-span-2">Left</div>\n  <div class="col-span-2">Right</div>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
