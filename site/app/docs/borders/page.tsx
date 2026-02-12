import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';

export const metadata = docMeta({
  title: 'Border Utilities',
  description: 'Border width, style, color, radius, ring, and divide utility classes for The New CSS. Style element boundaries with utility classes.',
  path: '/docs/borders',
});

const jsonLd = techArticleJsonLd({
  headline: 'Border Utilities',
  description: 'Border width, style, color, radius, ring, and divide utility classes for The New CSS. Style element boundaries with utility classes.',
  path: '/docs/borders',
});

export default function BordersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Borders</h1>
      <p className="text-gray-600 mb-6">Utilities for controlling border width, style, color, radius, ring outlines, and dividers between child elements.</p>

      {/* Border Width */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Border Width</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>border-0</code></td><td>border-width: var(--border-width-0)</td></tr>
          <tr><td><code>border</code></td><td>border-width: var(--border-width)</td></tr>
          <tr><td><code>border-2</code></td><td>border-width: var(--border-width-2)</td></tr>
          <tr><td><code>border-t</code></td><td>border-top-width: var(--border-width)</td></tr>
          <tr><td><code>border-b</code></td><td>border-bottom-width: var(--border-width)</td></tr>
        </tbody>
      </table>

      {/* Border Style */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Border Style</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>border-solid</code></td><td>border-style: solid</td></tr>
          <tr><td><code>border-dashed</code></td><td>border-style: dashed</td></tr>
          <tr><td><code>border-none</code></td><td>border-style: none</td></tr>
        </tbody>
      </table>

      {/* Border Color */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Border Color</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>border-transparent</code></td><td>border-color: transparent</td></tr>
          <tr><td><code>border-current</code></td><td>border-color: currentColor</td></tr>
          <tr><td><code>border-gray-200</code></td><td>border-color: var(--color-gray-200)</td></tr>
          <tr><td><code>border-gray-300</code></td><td>border-color: var(--color-gray-300)</td></tr>
          <tr><td><code>border-blue-500</code></td><td>border-color: var(--color-blue-500)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-4">
        <div className="p-4 border border-gray-200 rounded">border-gray-200</div>
        <div className="p-4 border-2 border-blue-500 rounded">border-2 border-blue-500</div>
        <div className="p-4 border-2 border-dashed border-gray-300 rounded">border-dashed</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="border border-gray-200 rounded p-4">Default border</div>\n<div class="border-2 border-blue-500 rounded p-4">Thick blue border</div>\n<div class="border-2 border-dashed border-gray-300 rounded p-4">Dashed border</div>`}>
          {`<div class="border border-gray-200 rounded p-4">Default border</div>\n<div class="border-2 border-blue-500 rounded p-4">Thick blue border</div>\n<div class="border-2 border-dashed border-gray-300 rounded p-4">Dashed border</div>`}
        </CodeBlock>
      </div>

      {/* Border Radius */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Border Radius</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>rounded-none</code></td><td>border-radius: var(--radius-none)</td></tr>
          <tr><td><code>rounded-sm</code></td><td>border-radius: var(--radius-sm)</td></tr>
          <tr><td><code>rounded</code></td><td>border-radius: var(--radius)</td></tr>
          <tr><td><code>rounded-md</code></td><td>border-radius: var(--radius-md)</td></tr>
          <tr><td><code>rounded-lg</code></td><td>border-radius: var(--radius-lg)</td></tr>
          <tr><td><code>rounded-xl</code></td><td>border-radius: var(--radius-xl)</td></tr>
          <tr><td><code>rounded-2xl</code></td><td>border-radius: var(--radius-2xl)</td></tr>
          <tr><td><code>rounded-full</code></td><td>border-radius: var(--radius-full)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-4 items-end">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-none"></div>
          <span className="text-xs text-gray-500">none</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-sm"></div>
          <span className="text-xs text-gray-500">sm</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded"></div>
          <span className="text-xs text-gray-500">default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-md"></div>
          <span className="text-xs text-gray-500">md</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
          <span className="text-xs text-gray-500">lg</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-xl"></div>
          <span className="text-xs text-gray-500">xl</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl"></div>
          <span className="text-xs text-gray-500">2xl</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
          <span className="text-xs text-gray-500">full</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="bg-blue-500 rounded-none">...</div>\n<div class="bg-blue-500 rounded-lg">...</div>\n<div class="bg-blue-500 rounded-full">...</div>`}>
          {`<div class="bg-blue-500 rounded-none">...</div>\n<div class="bg-blue-500 rounded-lg">...</div>\n<div class="bg-blue-500 rounded-full">...</div>`}
        </CodeBlock>
      </div>

      {/* Ring */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Ring</h2>
      <p className="text-gray-600 mb-4">Ring utilities add box-shadow outlines, useful for focus states.</p>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>ring-0</code></td><td>box-shadow: 0 0 0 0px var(--ring-color)</td></tr>
          <tr><td><code>ring-1</code></td><td>box-shadow: 0 0 0 1px var(--ring-color)</td></tr>
          <tr><td><code>ring-2</code></td><td>box-shadow: 0 0 0 2px var(--ring-color)</td></tr>
          <tr><td><code>ring-blue-500</code></td><td>--ring-color: var(--color-blue-500)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-6">
        <div className="p-4 rounded-lg ring-1 ring-blue-500">ring-1</div>
        <div className="p-4 rounded-lg ring-2 ring-blue-500">ring-2</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="ring-2 ring-blue-500 rounded-lg p-4">\n  Ring outline\n</div>`}>
          {`<div class="ring-2 ring-blue-500 rounded-lg p-4">\n  Ring outline\n</div>`}
        </CodeBlock>
      </div>

      {/* Divide */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Divide</h2>
      <p className="text-gray-600 mb-4">Add borders between child elements.</p>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>divide-y</code></td><td>{'> * + * { border-top-width: 1px }'}</td></tr>
          <tr><td><code>divide-x</code></td><td>{'> * + * { border-left-width: 1px }'}</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3">
        <div className="divide-y">
          <div className="py-3">First item</div>
          <div className="py-3">Second item</div>
          <div className="py-3">Third item</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="divide-y">\n  <div class="py-3">First item</div>\n  <div class="py-3">Second item</div>\n  <div class="py-3">Third item</div>\n</div>`}>
          {`<div class="divide-y">\n  <div class="py-3">First item</div>\n  <div class="py-3">Second item</div>\n  <div class="py-3">Third item</div>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
