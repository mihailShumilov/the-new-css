import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Effects',
  description: 'Effect utilities in The New CSS. Opacity, box shadows, blur, and backdrop blur classes.',
};

export default function EffectsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Effects</h1>
      <p className="text-gray-600 mb-6">Utilities for controlling opacity, box shadows, blur, and backdrop blur filters.</p>

      {/* Opacity */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Opacity</h2>
      <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">opacity-{'{value}'}</code> to control the opacity of an element.</p>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>opacity-0</code></td><td>opacity: 0</td></tr>
          <tr><td><code>opacity-25</code></td><td>opacity: 0.25</td></tr>
          <tr><td><code>opacity-50</code></td><td>opacity: 0.5</td></tr>
          <tr><td><code>opacity-75</code></td><td>opacity: 0.75</td></tr>
          <tr><td><code>opacity-100</code></td><td>opacity: 1</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-4 items-end">
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-lg opacity-100"></div>
          <span className="text-xs text-gray-500">100</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-lg opacity-75"></div>
          <span className="text-xs text-gray-500">75</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-lg opacity-50"></div>
          <span className="text-xs text-gray-500">50</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-blue-500 rounded-lg opacity-25"></div>
          <span className="text-xs text-gray-500">25</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="bg-blue-500 opacity-100">...</div>\n<div class="bg-blue-500 opacity-75">...</div>\n<div class="bg-blue-500 opacity-50">...</div>\n<div class="bg-blue-500 opacity-25">...</div>`}>
          {`<div class="bg-blue-500 opacity-100">...</div>\n<div class="bg-blue-500 opacity-75">...</div>\n<div class="bg-blue-500 opacity-50">...</div>\n<div class="bg-blue-500 opacity-25">...</div>`}
        </CodeBlock>
      </div>

      {/* Shadow */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Box Shadow</h2>
      <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">shadow-{'{size}'}</code> to add box shadows to elements.</p>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>shadow-sm</code></td><td>box-shadow: var(--shadow-sm)</td></tr>
          <tr><td><code>shadow</code></td><td>box-shadow: var(--shadow)</td></tr>
          <tr><td><code>shadow-md</code></td><td>box-shadow: var(--shadow-md)</td></tr>
          <tr><td><code>shadow-lg</code></td><td>box-shadow: var(--shadow-lg)</td></tr>
          <tr><td><code>shadow-xl</code></td><td>box-shadow: var(--shadow-xl)</td></tr>
          <tr><td><code>shadow-none</code></td><td>box-shadow: var(--shadow-none)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-6 items-end">
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-gray-100 rounded-lg shadow-sm"></div>
          <span className="text-xs text-gray-500">sm</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-gray-100 rounded-lg shadow"></div>
          <span className="text-xs text-gray-500">default</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-gray-100 rounded-lg shadow-md"></div>
          <span className="text-xs text-gray-500">md</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-gray-100 rounded-lg shadow-lg"></div>
          <span className="text-xs text-gray-500">lg</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 bg-gray-100 rounded-lg shadow-xl"></div>
          <span className="text-xs text-gray-500">xl</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="shadow-sm rounded-lg p-6">Small shadow</div>\n<div class="shadow-md rounded-lg p-6">Medium shadow</div>\n<div class="shadow-xl rounded-lg p-6">Extra-large shadow</div>`}>
          {`<div class="shadow-sm rounded-lg p-6">Small shadow</div>\n<div class="shadow-md rounded-lg p-6">Medium shadow</div>\n<div class="shadow-xl rounded-lg p-6">Extra-large shadow</div>`}
        </CodeBlock>
      </div>

      {/* Blur */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Blur</h2>
      <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">blur-{'{size}'}</code> to apply a blur filter to an element.</p>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>blur-sm</code></td><td>filter: blur(4px)</td></tr>
          <tr><td><code>blur</code></td><td>filter: blur(8px)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-6 items-end">
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-bold text-blue-600">Sharp</div>
          <span className="text-xs text-gray-500">no blur</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-bold text-blue-600 blur-sm">Soft</div>
          <span className="text-xs text-gray-500">blur-sm</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-lg font-bold text-blue-600 blur">Blurry</div>
          <span className="text-xs text-gray-500">blur</span>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="blur-sm">Slightly blurred</div>\n<div class="blur">More blurred</div>`}>
          {`<div class="blur-sm">Slightly blurred</div>\n<div class="blur">More blurred</div>`}
        </CodeBlock>
      </div>

      {/* Backdrop Blur */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Backdrop Blur</h2>
      <p className="text-gray-600 mb-4">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">backdrop-blur-{'{size}'}</code> to blur the content behind an element. Commonly used for frosted-glass overlays.</p>
      <table className="comparison-table mb-6">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>backdrop-blur-sm</code></td><td>backdrop-filter: blur(4px)</td></tr>
          <tr><td><code>backdrop-blur</code></td><td>backdrop-filter: blur(8px)</td></tr>
        </tbody>
      </table>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3">
        <div className="relative rounded-lg overflow-hidden" style={{ height: 160 }}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 h-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">Background Content</span>
          </div>
          <div className="absolute inset-x-0 bottom-0 backdrop-blur bg-white/25 p-4">
            <span className="text-white font-medium">Frosted glass overlay with backdrop-blur</span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="relative">\n  <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-6">\n    Background content\n  </div>\n  <div class="absolute inset-x-0 bottom-0 backdrop-blur bg-white/25 p-4">\n    Frosted glass overlay\n  </div>\n</div>`}>
          {`<div class="relative">\n  <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-6">\n    Background content\n  </div>\n  <div class="absolute inset-x-0 bottom-0 backdrop-blur bg-white/25 p-4">\n    Frosted glass overlay\n  </div>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
