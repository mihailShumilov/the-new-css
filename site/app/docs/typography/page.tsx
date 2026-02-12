import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Typography',
  description: 'Typography utilities for font family, size, weight, alignment, line height, letter spacing, and text transforms in The New CSS.',
};

export default function TypographyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Typography</h1>
      <p className="text-gray-600 mb-6">Utilities for controlling font family, size, weight, alignment, line height, letter spacing, decoration, transforms, whitespace, and text rendering.</p>

      {/* Font Family */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Font Family</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">font-sans</code></td><td>font-family: var(--font-sans)</td></tr>
          <tr><td><code className="text-sm">font-serif</code></td><td>font-family: var(--font-serif)</td></tr>
          <tr><td><code className="text-sm">font-mono</code></td><td>font-family: var(--font-mono)</td></tr>
        </tbody>
      </table>

      {/* Font Size */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Font Size</h2>
      <p className="text-gray-600 mb-3">Each font size class also sets an appropriate line-height.</p>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">text-xs</code></td><td>font-size: var(--text-xs); line-height: var(--leading-normal)</td></tr>
          <tr><td><code className="text-sm">text-sm</code></td><td>font-size: var(--text-sm); line-height: var(--leading-normal)</td></tr>
          <tr><td><code className="text-sm">text-base</code></td><td>font-size: var(--text-base); line-height: var(--leading-normal)</td></tr>
          <tr><td><code className="text-sm">text-lg</code></td><td>font-size: var(--text-lg); line-height: var(--leading-relaxed)</td></tr>
          <tr><td><code className="text-sm">text-xl</code></td><td>font-size: var(--text-xl); line-height: var(--leading-relaxed)</td></tr>
          <tr><td><code className="text-sm">text-2xl</code></td><td>font-size: var(--text-2xl); line-height: var(--leading-snug)</td></tr>
          <tr><td><code className="text-sm">text-3xl</code></td><td>font-size: var(--text-3xl); line-height: var(--leading-snug)</td></tr>
          <tr><td><code className="text-sm">text-4xl</code></td><td>font-size: var(--text-4xl); line-height: var(--leading-tight)</td></tr>
        </tbody>
      </table>

      {/* Font Size Example */}
      <h3 className="font-semibold mt-6 mb-2">Example: Font size scale</h3>
      <div className="mb-4 rounded-lg border border-gray-200 p-4 space-y-2">
        <p className="text-xs">text-xs - Extra small</p>
        <p className="text-sm">text-sm - Small</p>
        <p className="text-base">text-base - Base</p>
        <p className="text-lg">text-lg - Large</p>
        <p className="text-xl">text-xl - Extra large</p>
        <p className="text-2xl">text-2xl</p>
        <p className="text-3xl">text-3xl</p>
        <p className="text-4xl">text-4xl</p>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<p class="text-xs">Extra small</p>\n<p class="text-sm">Small</p>\n<p class="text-base">Base</p>\n<p class="text-lg">Large</p>\n<p class="text-xl">Extra large</p>\n<p class="text-2xl">2XL</p>\n<p class="text-3xl">3XL</p>\n<p class="text-4xl">4XL</p>`}>
          {`<p class="text-xs">Extra small</p>\n<p class="text-sm">Small</p>\n<p class="text-base">Base</p>\n<p class="text-lg">Large</p>\n<p class="text-xl">Extra large</p>\n<p class="text-2xl">2XL</p>\n<p class="text-3xl">3XL</p>\n<p class="text-4xl">4XL</p>`}
        </CodeBlock>
      </div>

      {/* Font Weight */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Font Weight</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">font-light</code></td><td>font-weight: var(--font-light)</td></tr>
          <tr><td><code className="text-sm">font-normal</code></td><td>font-weight: var(--font-normal)</td></tr>
          <tr><td><code className="text-sm">font-medium</code></td><td>font-weight: var(--font-medium)</td></tr>
          <tr><td><code className="text-sm">font-semibold</code></td><td>font-weight: var(--font-semibold)</td></tr>
          <tr><td><code className="text-sm">font-bold</code></td><td>font-weight: var(--font-bold)</td></tr>
          <tr><td><code className="text-sm">font-extrabold</code></td><td>font-weight: var(--font-extrabold)</td></tr>
        </tbody>
      </table>

      {/* Text Alignment */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Text Alignment</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">text-left</code></td><td>text-align: left</td></tr>
          <tr><td><code className="text-sm">text-center</code></td><td>text-align: center</td></tr>
          <tr><td><code className="text-sm">text-right</code></td><td>text-align: right</td></tr>
        </tbody>
      </table>

      {/* Line Height */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Line Height</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">leading-none</code></td><td>line-height: var(--leading-none)</td></tr>
          <tr><td><code className="text-sm">leading-tight</code></td><td>line-height: var(--leading-tight)</td></tr>
          <tr><td><code className="text-sm">leading-snug</code></td><td>line-height: var(--leading-snug)</td></tr>
          <tr><td><code className="text-sm">leading-normal</code></td><td>line-height: var(--leading-normal)</td></tr>
          <tr><td><code className="text-sm">leading-relaxed</code></td><td>line-height: var(--leading-relaxed)</td></tr>
          <tr><td><code className="text-sm">leading-loose</code></td><td>line-height: var(--leading-loose)</td></tr>
        </tbody>
      </table>

      {/* Letter Spacing */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Letter Spacing</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">tracking-tight</code></td><td>letter-spacing: var(--tracking-tight)</td></tr>
          <tr><td><code className="text-sm">tracking-normal</code></td><td>letter-spacing: var(--tracking-normal)</td></tr>
          <tr><td><code className="text-sm">tracking-wide</code></td><td>letter-spacing: var(--tracking-wide)</td></tr>
        </tbody>
      </table>

      {/* Text Decoration */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Text Decoration</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">underline</code></td><td>text-decoration-line: underline</td></tr>
          <tr><td><code className="text-sm">line-through</code></td><td>text-decoration-line: line-through</td></tr>
          <tr><td><code className="text-sm">no-underline</code></td><td>text-decoration-line: none</td></tr>
        </tbody>
      </table>

      {/* Text Transform */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Text Transform</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">uppercase</code></td><td>text-transform: uppercase</td></tr>
          <tr><td><code className="text-sm">lowercase</code></td><td>text-transform: lowercase</td></tr>
          <tr><td><code className="text-sm">capitalize</code></td><td>text-transform: capitalize</td></tr>
          <tr><td><code className="text-sm">normal-case</code></td><td>text-transform: none</td></tr>
        </tbody>
      </table>

      {/* Whitespace */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Whitespace</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">whitespace-normal</code></td><td>white-space: normal</td></tr>
          <tr><td><code className="text-sm">whitespace-nowrap</code></td><td>white-space: nowrap</td></tr>
          <tr><td><code className="text-sm">whitespace-pre</code></td><td>white-space: pre</td></tr>
          <tr><td><code className="text-sm">whitespace-pre-wrap</code></td><td>white-space: pre-wrap</td></tr>
        </tbody>
      </table>

      {/* Truncate */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Truncate</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">truncate</code></td><td>overflow: hidden; text-overflow: ellipsis; white-space: nowrap</td></tr>
        </tbody>
      </table>

      {/* Truncate Example */}
      <h3 className="font-semibold mt-6 mb-2">Example: Truncating text</h3>
      <div className="mb-4 rounded-lg border border-gray-200 p-4">
        <p className="truncate max-w-sm text-sm">This is a very long paragraph that will be truncated with an ellipsis when it overflows its container width.</p>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<p class="truncate max-w-sm">\n  This is a very long paragraph that will be truncated...\n</p>`}>
          {`<p class="truncate max-w-sm">\n  This is a very long paragraph that will be truncated...\n</p>`}
        </CodeBlock>
      </div>

      {/* Font Style & Miscellaneous */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Font Style & Miscellaneous</h2>
      <table className="comparison-table mb-6">
        <thead>
          <tr><th>Class</th><th>CSS Property</th></tr>
        </thead>
        <tbody>
          <tr><td><code className="text-sm">italic</code></td><td>font-style: italic</td></tr>
          <tr><td><code className="text-sm">not-italic</code></td><td>font-style: normal</td></tr>
          <tr><td><code className="text-sm">antialiased</code></td><td>-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale</td></tr>
          <tr><td><code className="text-sm">text-balance</code></td><td>text-wrap: balance</td></tr>
        </tbody>
      </table>

      {/* Composition Example */}
      <h3 className="font-semibold mt-6 mb-2">Example: Composing typography utilities</h3>
      <div className="mb-4 rounded-lg border border-gray-200 p-4">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Article Title</h2>
        <p className="text-sm uppercase tracking-wide font-semibold text-gray-500 mb-2">Category</p>
        <p className="text-base leading-relaxed text-gray-600">Body text with relaxed line-height for comfortable reading across long paragraphs of content.</p>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<h2 class="text-2xl font-bold tracking-tight mb-2">Article Title</h2>\n<p class="text-sm uppercase tracking-wide font-semibold text-gray-500 mb-2">Category</p>\n<p class="text-base leading-relaxed text-gray-600">Body text...</p>`}>
          {`<h2 class="text-2xl font-bold tracking-tight mb-2">Article Title</h2>\n<p class="text-sm uppercase tracking-wide font-semibold text-gray-500 mb-2">Category</p>\n<p class="text-base leading-relaxed text-gray-600">Body text...</p>`}
        </CodeBlock>
      </div>
    </>
  );
}
