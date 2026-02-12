import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';

export const metadata = docMeta({
  title: 'Spacing Utilities',
  description: 'Padding, margin, and space-between utility classes for The New CSS. Complete spacing scale from 0 to 24 with consistent design tokens.',
  path: '/docs/spacing',
});

const jsonLd = techArticleJsonLd({
  headline: 'Spacing Utilities',
  description: 'Padding, margin, and space-between utility classes for The New CSS. Complete spacing scale from 0 to 24 with consistent design tokens.',
  path: '/docs/spacing',
});

export default function SpacingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Spacing</h1>
      <p className="text-gray-600 mb-6">Utilities for controlling padding, margin, and space between child elements. All spacing values reference <code className="bg-gray-100 px-2 py-1 rounded text-sm">--spacing-*</code> design tokens.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Scale Reference</h2>
      <p className="text-gray-600 mb-3">The spacing scale used across padding, margin, and space utilities:</p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Token</th>
              <th className="text-left py-2 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">0</td><td className="py-2">0</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">1</td><td className="py-2">var(--spacing-1)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">2</td><td className="py-2">var(--spacing-2)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">3</td><td className="py-2">var(--spacing-3)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">4</td><td className="py-2">var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">5</td><td className="py-2">var(--spacing-5)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">6</td><td className="py-2">var(--spacing-6)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">8</td><td className="py-2">var(--spacing-8)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">10</td><td className="py-2">var(--spacing-10)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">12</td><td className="py-2">var(--spacing-12)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">16</td><td className="py-2">var(--spacing-16)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">20</td><td className="py-2">var(--spacing-20)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Padding</h2>

      <h3 className="font-semibold mt-6 mb-2">All sides (p-*)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">CSS Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-0</code></td><td className="py-2">padding: var(--spacing-0)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-1</code></td><td className="py-2">padding: var(--spacing-1)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-2</code></td><td className="py-2">padding: var(--spacing-2)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-3</code></td><td className="py-2">padding: var(--spacing-3)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-4</code></td><td className="py-2">padding: var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-5</code></td><td className="py-2">padding: var(--spacing-5)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-6</code></td><td className="py-2">padding: var(--spacing-6)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-8</code></td><td className="py-2">padding: var(--spacing-8)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-10</code></td><td className="py-2">padding: var(--spacing-10)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">p-12</code></td><td className="py-2">padding: var(--spacing-12)</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Horizontal (px-*)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">CSS Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">px-0</code></td><td className="py-2">padding-inline: var(--spacing-0)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">px-2</code></td><td className="py-2">padding-inline: var(--spacing-2)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">px-3</code></td><td className="py-2">padding-inline: var(--spacing-3)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">px-4</code></td><td className="py-2">padding-inline: var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">px-5</code></td><td className="py-2">padding-inline: var(--spacing-5)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">px-6</code></td><td className="py-2">padding-inline: var(--spacing-6)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">px-8</code></td><td className="py-2">padding-inline: var(--spacing-8)</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Vertical (py-*)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">CSS Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-0</code></td><td className="py-2">padding-block: var(--spacing-0)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-1</code></td><td className="py-2">padding-block: var(--spacing-1)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-2</code></td><td className="py-2">padding-block: var(--spacing-2)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-3</code></td><td className="py-2">padding-block: var(--spacing-3)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-4</code></td><td className="py-2">padding-block: var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-6</code></td><td className="py-2">padding-block: var(--spacing-6)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-8</code></td><td className="py-2">padding-block: var(--spacing-8)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-12</code></td><td className="py-2">padding-block: var(--spacing-12)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-16</code></td><td className="py-2">padding-block: var(--spacing-16)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">py-20</code></td><td className="py-2">padding-block: var(--spacing-20)</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Top & Bottom (pt-*, pb-*)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">CSS Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">pt-4</code></td><td className="py-2">padding-block-start: var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">pt-8</code></td><td className="py-2">padding-block-start: var(--spacing-8)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">pt-16</code></td><td className="py-2">padding-block-start: var(--spacing-16)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">pb-4</code></td><td className="py-2">padding-block-end: var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">pb-8</code></td><td className="py-2">padding-block-end: var(--spacing-8)</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Example: Padding</h3>
      <div className="mb-4 rounded-lg border border-gray-200 p-4">
        <div className="p-6 bg-blue-100 rounded-lg text-center text-sm font-medium text-blue-700">p-6</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="p-6 bg-blue-100 rounded-lg">p-6</div>`}>
          {`<div class="p-6 bg-blue-100 rounded-lg">p-6</div>`}
        </CodeBlock>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Margin</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">CSS Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">m-0</code></td><td className="py-2">margin: 0</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">m-auto</code></td><td className="py-2">margin: auto</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mx-auto</code></td><td className="py-2">margin-inline: auto</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">my-0</code></td><td className="py-2">margin-block: 0</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">my-4</code></td><td className="py-2">margin-block: var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">my-8</code></td><td className="py-2">margin-block: var(--spacing-8)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mt-0</code></td><td className="py-2">margin-block-start: 0</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mt-1</code></td><td className="py-2">margin-block-start: var(--spacing-1)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mt-2</code></td><td className="py-2">margin-block-start: var(--spacing-2)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mt-4</code></td><td className="py-2">margin-block-start: var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mt-6</code></td><td className="py-2">margin-block-start: var(--spacing-6)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mt-8</code></td><td className="py-2">margin-block-start: var(--spacing-8)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mt-auto</code></td><td className="py-2">margin-block-start: auto</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mb-0</code></td><td className="py-2">margin-block-end: 0</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mb-1</code></td><td className="py-2">margin-block-end: var(--spacing-1)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mb-2</code></td><td className="py-2">margin-block-end: var(--spacing-2)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mb-4</code></td><td className="py-2">margin-block-end: var(--spacing-4)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mb-6</code></td><td className="py-2">margin-block-end: var(--spacing-6)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">mb-8</code></td><td className="py-2">margin-block-end: var(--spacing-8)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">ms-auto</code></td><td className="py-2">margin-inline-start: auto</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Example: Centering with mx-auto</h3>
      <div className="mb-4 rounded-lg border border-gray-200 p-4">
        <div className="mx-auto max-w-sm bg-blue-100 rounded-lg p-4 text-center text-sm font-medium text-blue-700">mx-auto max-w-sm</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="mx-auto max-w-sm bg-blue-100 rounded-lg p-4 text-center">\n  Centered with mx-auto\n</div>`}>
          {`<div class="mx-auto max-w-sm bg-blue-100 rounded-lg p-4 text-center">\n  Centered with mx-auto\n</div>`}
        </CodeBlock>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Space Between</h2>
      <p className="text-gray-600 mb-3">Add spacing between child elements using the <code className="bg-gray-100 px-2 py-1 rounded text-sm">space-*</code> utilities. These apply margin to all children except the first.</p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4 font-semibold">Class</th>
              <th className="text-left py-2 font-semibold">CSS Property</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">space-x-2</code></td><td className="py-2">{`> * + * { margin-inline-start: var(--spacing-2) }`}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">space-x-4</code></td><td className="py-2">{`> * + * { margin-inline-start: var(--spacing-4) }`}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">space-y-2</code></td><td className="py-2">{`> * + * { margin-block-start: var(--spacing-2) }`}</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><code className="text-sm">space-y-4</code></td><td className="py-2">{`> * + * { margin-block-start: var(--spacing-4) }`}</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Example: Vertical spacing</h3>
      <div className="mb-4 rounded-lg border border-gray-200 p-4">
        <div className="space-y-4">
          <div className="bg-blue-100 rounded-lg p-3 text-center text-sm font-medium text-blue-700">Item 1</div>
          <div className="bg-blue-100 rounded-lg p-3 text-center text-sm font-medium text-blue-700">Item 2</div>
          <div className="bg-blue-100 rounded-lg p-3 text-center text-sm font-medium text-blue-700">Item 3</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="space-y-4">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>`}>
          {`<div class="space-y-4">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
