import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Sizing',
  description: 'Sizing utilities for width, height, min-width, max-width, min-height, and size in The New CSS.',
};

export default function SizingPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Sizing</h1>
      <p className="text-gray-600 mb-6">Utilities for controlling the width, height, and overall size of elements.</p>

      {/* Width */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Width</h2>

      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">w-0</code></td><td>width: 0</td></tr>
          <tr><td><code className="text-sm">w-auto</code></td><td>width: auto</td></tr>
          <tr><td><code className="text-sm">w-full</code></td><td>width: 100%</td></tr>
          <tr><td><code className="text-sm">w-screen</code></td><td>width: 100vw</td></tr>
          <tr><td><code className="text-sm">w-fit</code></td><td>width: fit-content</td></tr>
          <tr><td><code className="text-sm">w-1/2</code></td><td>width: 50%</td></tr>
          <tr><td><code className="text-sm">w-1/3</code></td><td>width: 33.333333%</td></tr>
          <tr><td><code className="text-sm">w-2/3</code></td><td>width: 66.666667%</td></tr>
          <tr><td><code className="text-sm">w-1/4</code></td><td>width: 25%</td></tr>
          <tr><td><code className="text-sm">w-3/4</code></td><td>width: 75%</td></tr>
        </tbody>
      </table>

      {/* Width Example */}
      <h3 className="font-semibold mt-6 mb-2">Example: Fractional widths</h3>
      <div className="mb-4 rounded-lg border border-gray-200 p-4 space-y-2">
        <div className="w-1/4 bg-blue-100 rounded p-2 text-center text-sm font-medium text-blue-700">w-1/4</div>
        <div className="w-1/2 bg-blue-100 rounded p-2 text-center text-sm font-medium text-blue-700">w-1/2</div>
        <div className="w-3/4 bg-blue-100 rounded p-2 text-center text-sm font-medium text-blue-700">w-3/4</div>
        <div className="w-full bg-blue-100 rounded p-2 text-center text-sm font-medium text-blue-700">w-full</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="w-1/4">25%</div>\n<div class="w-1/2">50%</div>\n<div class="w-3/4">75%</div>\n<div class="w-full">100%</div>`}>
          {`<div class="w-1/4">25%</div>\n<div class="w-1/2">50%</div>\n<div class="w-3/4">75%</div>\n<div class="w-full">100%</div>`}
        </CodeBlock>
      </div>

      {/* Min Width */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Min Width</h2>

      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">min-w-0</code></td><td>min-width: 0</td></tr>
        </tbody>
      </table>

      {/* Max Width */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Max Width</h2>

      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">max-w-sm</code></td><td>max-width: 24rem</td></tr>
          <tr><td><code className="text-sm">max-w-md</code></td><td>max-width: 28rem</td></tr>
          <tr><td><code className="text-sm">max-w-lg</code></td><td>max-width: 32rem</td></tr>
          <tr><td><code className="text-sm">max-w-xl</code></td><td>max-width: 36rem</td></tr>
          <tr><td><code className="text-sm">max-w-2xl</code></td><td>max-width: 42rem</td></tr>
          <tr><td><code className="text-sm">max-w-3xl</code></td><td>max-width: 48rem</td></tr>
          <tr><td><code className="text-sm">max-w-4xl</code></td><td>max-width: 56rem</td></tr>
          <tr><td><code className="text-sm">max-w-5xl</code></td><td>max-width: 64rem</td></tr>
          <tr><td><code className="text-sm">max-w-6xl</code></td><td>max-width: 72rem</td></tr>
          <tr><td><code className="text-sm">max-w-7xl</code></td><td>max-width: 80rem</td></tr>
          <tr><td><code className="text-sm">max-w-full</code></td><td>max-width: 100%</td></tr>
          <tr><td><code className="text-sm">max-w-none</code></td><td>max-width: none</td></tr>
          <tr><td><code className="text-sm">max-w-prose</code></td><td>max-width: 65ch</td></tr>
        </tbody>
      </table>

      {/* Max Width Example */}
      <h3 className="font-semibold mt-6 mb-2">Example: Constraining content width</h3>
      <div className="mb-4 rounded-lg border border-gray-200 p-4">
        <div className="max-w-md mx-auto bg-blue-100 rounded-lg p-4 text-center text-sm font-medium text-blue-700">max-w-md mx-auto</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="max-w-md mx-auto p-4">\n  Content constrained to 28rem and centered.\n</div>`}>
          {`<div class="max-w-md mx-auto p-4">\n  Content constrained to 28rem and centered.\n</div>`}
        </CodeBlock>
      </div>

      {/* Height */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Height</h2>

      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">h-0</code></td><td>height: 0</td></tr>
          <tr><td><code className="text-sm">h-auto</code></td><td>height: auto</td></tr>
          <tr><td><code className="text-sm">h-full</code></td><td>height: 100%</td></tr>
          <tr><td><code className="text-sm">h-screen</code></td><td>height: 100vh</td></tr>
        </tbody>
      </table>

      {/* Min Height */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Min Height</h2>

      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">min-h-0</code></td><td>min-height: 0</td></tr>
          <tr><td><code className="text-sm">min-h-full</code></td><td>min-height: 100%</td></tr>
          <tr><td><code className="text-sm">min-h-screen</code></td><td>min-height: 100vh</td></tr>
        </tbody>
      </table>

      {/* Size */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Size</h2>
      <p className="text-gray-600 mb-3">Set both width and height simultaneously.</p>

      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">size-full</code></td><td>width: 100%; height: 100%</td></tr>
        </tbody>
      </table>
    </>
  );
}
