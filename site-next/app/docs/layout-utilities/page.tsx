import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Layout',
  description: 'Layout utilities for The New CSS. Control display, position, overflow, z-index, and visibility with utility classes.',
};

export default function LayoutPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Layout</h1>
      <p className="text-gray-600 mb-6">Utilities for controlling display, position, overflow, z-index, and visibility of elements.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Display</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.block</code></td><td className="py-2"><code className="text-sm">display: block</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.inline-block</code></td><td className="py-2"><code className="text-sm">display: inline-block</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.inline</code></td><td className="py-2"><code className="text-sm">display: inline</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.flex</code></td><td className="py-2"><code className="text-sm">display: flex</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.inline-flex</code></td><td className="py-2"><code className="text-sm">display: inline-flex</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.grid</code></td><td className="py-2"><code className="text-sm">display: grid</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.hidden</code></td><td className="py-2"><code className="text-sm">display: none</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.contents</code></td><td className="py-2"><code className="text-sm">display: contents</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Position</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.static</code></td><td className="py-2"><code className="text-sm">position: static</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.relative</code></td><td className="py-2"><code className="text-sm">position: relative</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.absolute</code></td><td className="py-2"><code className="text-sm">position: absolute</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.fixed</code></td><td className="py-2"><code className="text-sm">position: fixed</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.sticky</code></td><td className="py-2"><code className="text-sm">position: sticky</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Inset</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.inset-0</code></td><td className="py-2"><code className="text-sm">inset: 0</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.top-0</code></td><td className="py-2"><code className="text-sm">top: 0</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.right-0</code></td><td className="py-2"><code className="text-sm">right: 0</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.bottom-0</code></td><td className="py-2"><code className="text-sm">bottom: 0</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.left-0</code></td><td className="py-2"><code className="text-sm">left: 0</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Overflow</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.overflow-auto</code></td><td className="py-2"><code className="text-sm">overflow: auto</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.overflow-hidden</code></td><td className="py-2"><code className="text-sm">overflow: hidden</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.overflow-x-auto</code></td><td className="py-2"><code className="text-sm">overflow-x: auto</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.overflow-y-auto</code></td><td className="py-2"><code className="text-sm">overflow-y: auto</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Z-Index</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.z-10</code></td><td className="py-2"><code className="text-sm">z-index: 10</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.z-20</code></td><td className="py-2"><code className="text-sm">z-index: 20</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.z-50</code></td><td className="py-2"><code className="text-sm">z-index: 50</code></td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Visibility & Isolation</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.visible</code></td><td className="py-2"><code className="text-sm">visibility: visible</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.invisible</code></td><td className="py-2"><code className="text-sm">visibility: hidden</code></td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="bg-gray-100 px-2 py-1 rounded text-sm">.isolate</code></td><td className="py-2"><code className="text-sm">isolation: isolate</code></td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Examples</h2>

      <h3 className="font-semibold mt-6 mb-2">Absolute Positioning with Inset</h3>
      <p className="text-gray-600 mb-3">Position a badge in the corner of a card using <code className="bg-gray-100 px-2 py-1 rounded text-sm">relative</code> and <code className="bg-gray-100 px-2 py-1 rounded text-sm">absolute</code>:</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-3">
        <div className="relative inline-block bg-gray-100 rounded-lg p-6" style={{ width: 200, height: 120 }}>
          <span className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-2 py-1 rounded">Badge</span>
          <p className="text-gray-600 text-sm">Card content</p>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="relative bg-gray-100 rounded-lg p-6">\n  <span class="absolute top-0 right-0 bg-blue-600 text-white text-sm px-2 py-1 rounded">Badge</span>\n  <p class="text-gray-600">Card content</p>\n</div>`}>
          {`<div class="relative bg-gray-100 rounded-lg p-6">\n  <span class="absolute top-0 right-0 bg-blue-600 text-white text-sm px-2 py-1 rounded">Badge</span>\n  <p class="text-gray-600">Card content</p>\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Overflow Hidden</h3>
      <p className="text-gray-600 mb-3">Clip overflowing content with <code className="bg-gray-100 px-2 py-1 rounded text-sm">overflow-hidden</code>:</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-3">
        <div className="overflow-hidden rounded-lg bg-gray-100" style={{ width: 200, height: 60 }}>
          <p className="p-4 text-sm text-gray-600">This text is long enough to overflow the container. The extra content is clipped and hidden from view.</p>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="overflow-hidden rounded-lg bg-gray-100" style="width: 200px; height: 60px;">\n  <p class="p-4 text-sm">This text overflows and is clipped.</p>\n</div>`}>
          {`<div class="overflow-hidden rounded-lg bg-gray-100" style="width: 200px; height: 60px;">\n  <p class="p-4 text-sm">This text overflows and is clipped.</p>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
