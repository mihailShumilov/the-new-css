import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Colors',
  description: 'Color utilities in The New CSS. Text colors, background colors, and gradient classes.',
};

export default function ColorsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Colors</h1>
      <p className="text-gray-600 mb-6">Utilities for controlling text color, background color, and gradients.</p>

      {/* Text Colors */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Text Color</h2>
      <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'text-{color}'}</code> to set the text color of an element.</p>

      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>text-white</code></td><td>color: var(--color-white)</td></tr>
          <tr><td><code>text-black</code></td><td>color: var(--color-black)</td></tr>
          <tr><td><code>text-transparent</code></td><td>color: transparent</td></tr>
          <tr><td><code>text-current</code></td><td>color: currentColor</td></tr>
          <tr><td><code>text-gray-400</code></td><td>color: var(--color-gray-400)</td></tr>
          <tr><td><code>text-gray-500</code></td><td>color: var(--color-gray-500)</td></tr>
          <tr><td><code>text-gray-600</code></td><td>color: var(--color-gray-600)</td></tr>
          <tr><td><code>text-gray-700</code></td><td>color: var(--color-gray-700)</td></tr>
          <tr><td><code>text-gray-800</code></td><td>color: var(--color-gray-800)</td></tr>
          <tr><td><code>text-gray-900</code></td><td>color: var(--color-gray-900)</td></tr>
          <tr><td><code>text-blue-500</code></td><td>color: var(--color-blue-500)</td></tr>
          <tr><td><code>text-blue-600</code></td><td>color: var(--color-blue-600)</td></tr>
          <tr><td><code>text-blue-700</code></td><td>color: var(--color-blue-700)</td></tr>
          <tr><td><code>text-red-500</code></td><td>color: var(--color-red-500)</td></tr>
          <tr><td><code>text-red-600</code></td><td>color: var(--color-red-600)</td></tr>
          <tr><td><code>text-green-500</code></td><td>color: var(--color-green-500)</td></tr>
          <tr><td><code>text-green-600</code></td><td>color: var(--color-green-600)</td></tr>
          <tr><td><code>text-yellow-600</code></td><td>color: var(--color-yellow-600)</td></tr>
          <tr><td><code>text-purple-600</code></td><td>color: var(--color-purple-600)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-4">
        <span className="text-gray-500">gray-500</span>
        <span className="text-blue-600">blue-600</span>
        <span className="text-red-500">red-500</span>
        <span className="text-green-600">green-600</span>
        <span className="text-yellow-600">yellow-600</span>
        <span className="text-purple-600">purple-600</span>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<span class="text-blue-600">Blue text</span>\n<span class="text-red-500">Red text</span>\n<span class="text-green-600">Green text</span>`}>
          {`<span class="text-blue-600">Blue text</span>\n<span class="text-red-500">Red text</span>\n<span class="text-green-600">Green text</span>`}
        </CodeBlock>
      </div>

      {/* Background Colors */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Background Color</h2>
      <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'bg-{color}'}</code> to set the background color of an element.</p>

      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>bg-white</code></td><td>background-color: var(--color-white)</td></tr>
          <tr><td><code>bg-black</code></td><td>background-color: var(--color-black)</td></tr>
          <tr><td><code>bg-transparent</code></td><td>background-color: transparent</td></tr>
          <tr><td><code>bg-gray-50</code></td><td>background-color: var(--color-gray-50)</td></tr>
          <tr><td><code>bg-gray-100</code></td><td>background-color: var(--color-gray-100)</td></tr>
          <tr><td><code>bg-gray-200</code></td><td>background-color: var(--color-gray-200)</td></tr>
          <tr><td><code>bg-gray-800</code></td><td>background-color: var(--color-gray-800)</td></tr>
          <tr><td><code>bg-gray-900</code></td><td>background-color: var(--color-gray-900)</td></tr>
          <tr><td><code>bg-gray-950</code></td><td>background-color: var(--color-gray-950)</td></tr>
          <tr><td><code>bg-blue-50</code></td><td>background-color: var(--color-blue-50)</td></tr>
          <tr><td><code>bg-blue-100</code></td><td>background-color: var(--color-blue-100)</td></tr>
          <tr><td><code>bg-blue-500</code></td><td>background-color: var(--color-blue-500)</td></tr>
          <tr><td><code>bg-blue-600</code></td><td>background-color: var(--color-blue-600)</td></tr>
          <tr><td><code>bg-blue-700</code></td><td>background-color: var(--color-blue-700)</td></tr>
          <tr><td><code>bg-red-50</code></td><td>background-color: var(--color-red-50)</td></tr>
          <tr><td><code>bg-red-500</code></td><td>background-color: var(--color-red-500)</td></tr>
          <tr><td><code>bg-green-50</code></td><td>background-color: var(--color-green-50)</td></tr>
          <tr><td><code>bg-green-500</code></td><td>background-color: var(--color-green-500)</td></tr>
          <tr><td><code>bg-yellow-50</code></td><td>background-color: var(--color-yellow-50)</td></tr>
          <tr><td><code>bg-purple-50</code></td><td>background-color: var(--color-purple-50)</td></tr>
          <tr><td><code>bg-purple-500</code></td><td>background-color: var(--color-purple-500)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example - Color Swatches</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3">
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200"></div>
            <span className="text-xs text-gray-500">gray-50</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-gray-200"></div>
            <span className="text-xs text-gray-500">gray-200</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-gray-800"></div>
            <span className="text-xs text-gray-500">gray-800</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-gray-900"></div>
            <span className="text-xs text-gray-500">gray-900</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-blue-50"></div>
            <span className="text-xs text-gray-500">blue-50</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-blue-500"></div>
            <span className="text-xs text-gray-500">blue-500</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-blue-700"></div>
            <span className="text-xs text-gray-500">blue-700</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-red-500"></div>
            <span className="text-xs text-gray-500">red-500</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-green-500"></div>
            <span className="text-xs text-gray-500">green-500</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg bg-purple-500"></div>
            <span className="text-xs text-gray-500">purple-500</span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="bg-blue-500 text-white p-4 rounded-lg">\n  Blue background with white text\n</div>`}>
          {`<div class="bg-blue-500 text-white p-4 rounded-lg">\n  Blue background with white text\n</div>`}
        </CodeBlock>
      </div>

      {/* Gradients */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Gradients</h2>
      <p className="text-gray-600 mb-4">Combine <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'bg-gradient-to-{direction}'}</code> with <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'from-{color}'}</code> and <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'to-{color}'}</code> to create gradients.</p>

      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>bg-gradient-to-r</code></td><td>background-image: linear-gradient(to right, ...)</td></tr>
          <tr><td><code>bg-gradient-to-br</code></td><td>background-image: linear-gradient(to bottom right, ...)</td></tr>
          <tr><td><code>from-blue-500</code></td><td>--gradient-from: var(--color-blue-500)</td></tr>
          <tr><td><code>from-purple-500</code></td><td>--gradient-from: var(--color-purple-500)</td></tr>
          <tr><td><code>to-blue-500</code></td><td>--gradient-to: var(--color-blue-500)</td></tr>
          <tr><td><code>to-purple-500</code></td><td>--gradient-to: var(--color-purple-500)</td></tr>
          <tr><td><code>to-pink-500</code></td><td>--gradient-to: var(--color-pink-500)</td></tr>
          <tr><td><code>to-teal-500</code></td><td>--gradient-to: var(--color-teal-500)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 space-y-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg font-medium">Blue to Purple (right)</div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-lg font-medium">Purple to Pink (bottom-right)</div>
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-lg font-medium">Blue to Teal (right)</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg">\n  Gradient background\n</div>`}>
          {`<div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg">\n  Gradient background\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
