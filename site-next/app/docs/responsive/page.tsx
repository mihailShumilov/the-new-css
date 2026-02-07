import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Responsive Design',
  description: 'Learn how to build responsive layouts with The New CSS breakpoint system using sm, md, and lg prefixed utility classes.',
};

export default function ResponsivePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Responsive Design</h1>

      <p className="text-gray-600 mb-6">The New CSS uses a mobile-first breakpoint system. Prefix any supported utility with <code className="bg-gray-100 px-2 py-1 rounded text-sm">sm:</code>, <code className="bg-gray-100 px-2 py-1 rounded text-sm">md:</code>, or <code className="bg-gray-100 px-2 py-1 rounded text-sm">lg:</code> to apply it at that breakpoint and above.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Breakpoints</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Prefix</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Min-width</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Targets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200"><code className="bg-gray-100 px-2 py-1 rounded text-sm">sm:</code></td>
              <td className="px-4 py-2 border-b border-gray-200">640px</td>
              <td className="px-4 py-2 border-b border-gray-200">Large phones / small tablets</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-200"><code className="bg-gray-100 px-2 py-1 rounded text-sm">md:</code></td>
              <td className="px-4 py-2 border-b border-gray-200">768px</td>
              <td className="px-4 py-2 border-b border-gray-200">Tablets / small laptops</td>
            </tr>
            <tr>
              <td className="px-4 py-2"><code className="bg-gray-100 px-2 py-1 rounded text-sm">lg:</code></td>
              <td className="px-4 py-2">1024px</td>
              <td className="px-4 py-2">Desktops</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-6">Unprefixed utilities apply at all screen sizes. Prefixed utilities apply at that breakpoint <strong>and wider</strong> (mobile-first).</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Available Classes by Breakpoint</h2>

      <h3 className="font-semibold mt-6 mb-2">sm: (640px+)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Class</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:block</code></td><td className="px-4 py-2 border-b border-gray-200">display: block</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:hidden</code></td><td className="px-4 py-2 border-b border-gray-200">display: none</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:flex</code></td><td className="px-4 py-2 border-b border-gray-200">display: flex</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:grid</code></td><td className="px-4 py-2 border-b border-gray-200">display: grid</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:flex-row</code></td><td className="px-4 py-2 border-b border-gray-200">flex-direction: row</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:grid-cols-2</code></td><td className="px-4 py-2 border-b border-gray-200">grid-template-columns: repeat(2, 1fr)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:gap-6</code></td><td className="px-4 py-2 border-b border-gray-200">gap: 1.5rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:px-6</code></td><td className="px-4 py-2 border-b border-gray-200">padding-inline: 1.5rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">sm:text-lg</code></td><td className="px-4 py-2 border-b border-gray-200">font-size: 1.125rem</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">sm:text-left</code></td><td className="px-4 py-2">text-align: left</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">md: (768px+)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Class</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:block</code></td><td className="px-4 py-2 border-b border-gray-200">display: block</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:hidden</code></td><td className="px-4 py-2 border-b border-gray-200">display: none</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:flex</code></td><td className="px-4 py-2 border-b border-gray-200">display: flex</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:grid</code></td><td className="px-4 py-2 border-b border-gray-200">display: grid</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:flex-row</code></td><td className="px-4 py-2 border-b border-gray-200">flex-direction: row</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:items-center</code></td><td className="px-4 py-2 border-b border-gray-200">align-items: center</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:justify-between</code></td><td className="px-4 py-2 border-b border-gray-200">justify-content: space-between</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:grid-cols-2</code></td><td className="px-4 py-2 border-b border-gray-200">grid-template-columns: repeat(2, 1fr)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:grid-cols-3</code></td><td className="px-4 py-2 border-b border-gray-200">grid-template-columns: repeat(3, 1fr)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:gap-6</code></td><td className="px-4 py-2 border-b border-gray-200">gap: 1.5rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:gap-8</code></td><td className="px-4 py-2 border-b border-gray-200">gap: 2rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:p-6</code></td><td className="px-4 py-2 border-b border-gray-200">padding: 1.5rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:px-6</code></td><td className="px-4 py-2 border-b border-gray-200">padding-inline: 1.5rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:px-8</code></td><td className="px-4 py-2 border-b border-gray-200">padding-inline: 2rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:py-12</code></td><td className="px-4 py-2 border-b border-gray-200">padding-block: 3rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:py-16</code></td><td className="px-4 py-2 border-b border-gray-200">padding-block: 4rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:text-lg</code> ... <code className="text-sm">md:text-4xl</code></td><td className="px-4 py-2 border-b border-gray-200">font-size (lg through 4xl)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:w-1/2</code></td><td className="px-4 py-2 border-b border-gray-200">width: 50%</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:max-w-2xl</code></td><td className="px-4 py-2 border-b border-gray-200">max-width: 42rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:mt-0</code></td><td className="px-4 py-2 border-b border-gray-200">margin-block-start: 0</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:sticky</code></td><td className="px-4 py-2 border-b border-gray-200">position: sticky</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">md:text-left</code></td><td className="px-4 py-2 border-b border-gray-200">text-align: left</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">md:col-span-2</code></td><td className="px-4 py-2">grid-column: span 2</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">lg: (1024px+)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Class</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Property</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:block</code></td><td className="px-4 py-2 border-b border-gray-200">display: block</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:hidden</code></td><td className="px-4 py-2 border-b border-gray-200">display: none</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:flex</code></td><td className="px-4 py-2 border-b border-gray-200">display: flex</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:grid</code></td><td className="px-4 py-2 border-b border-gray-200">display: grid</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:flex-row</code></td><td className="px-4 py-2 border-b border-gray-200">flex-direction: row</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:grid-cols-3</code></td><td className="px-4 py-2 border-b border-gray-200">grid-template-columns: repeat(3, 1fr)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:grid-cols-4</code></td><td className="px-4 py-2 border-b border-gray-200">grid-template-columns: repeat(4, 1fr)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:gap-8</code></td><td className="px-4 py-2 border-b border-gray-200">gap: 2rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:gap-12</code></td><td className="px-4 py-2 border-b border-gray-200">gap: 3rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:px-8</code></td><td className="px-4 py-2 border-b border-gray-200">padding-inline: 2rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:py-16</code>, <code className="text-sm">lg:py-20</code>, <code className="text-sm">lg:py-24</code></td><td className="px-4 py-2 border-b border-gray-200">padding-block (4rem / 5rem / 6rem)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:text-xl</code></td><td className="px-4 py-2 border-b border-gray-200">font-size: 1.25rem</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">lg:text-4xl</code></td><td className="px-4 py-2 border-b border-gray-200">font-size: 2.25rem</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">lg:max-w-4xl</code></td><td className="px-4 py-2">max-width: 56rem</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">How It Works</h2>
      <p className="text-gray-600 mb-4">Responsive classes use CSS <code className="bg-gray-100 px-2 py-1 rounded text-sm">@media (min-width)</code> queries inside <code className="bg-gray-100 px-2 py-1 rounded text-sm">@layer variants</code>. Write your base (mobile) styles first, then layer on wider-screen overrides:</p>
      <div className="mb-6">
        <CodeBlock code={`<!-- Stack on mobile, side-by-side on tablets, 3-column on desktop -->\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg">Card 1</div>\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg">Card 2</div>\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg">Card 3</div>\n</div>`}>
          {`<!-- Stack on mobile, side-by-side on tablets, 3-column on desktop -->\n<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg">Card 1</div>\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg">Card 2</div>\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg">Card 3</div>\n</div>`}
        </CodeBlock>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Examples</h2>

      <h3 className="font-semibold mt-6 mb-2">Responsive Card Grid</h3>
      <p className="text-gray-600 mb-3">This grid is 1 column on mobile, 2 on tablets, and 3 on desktop. Resize the browser to see it change.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-semibold mb-1">Card One</p>
          <p className="text-sm text-gray-600">Visible at all breakpoints.</p>
        </div>
        <div className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-semibold mb-1">Card Two</p>
          <p className="text-sm text-gray-600">Sits beside Card One at md and up.</p>
        </div>
        <div className="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-semibold mb-1">Card Three</p>
          <p className="text-sm text-gray-600">Third column appears at lg.</p>
        </div>
      </div>

      <div className="mb-6">
        <CodeBlock code={`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">\n    <p class="font-semibold mb-1">Card One</p>\n    <p class="text-sm text-gray-600">Visible at all breakpoints.</p>\n  </div>\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">\n    <p class="font-semibold mb-1">Card Two</p>\n    <p class="text-sm text-gray-600">Sits beside Card One at md and up.</p>\n  </div>\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">\n    <p class="font-semibold mb-1">Card Three</p>\n    <p class="text-sm text-gray-600">Third column appears at lg.</p>\n  </div>\n</div>`}>
          {`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">\n    <p class="font-semibold mb-1">Card One</p>\n    <p class="text-sm text-gray-600">Visible at all breakpoints.</p>\n  </div>\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">\n    <p class="font-semibold mb-1">Card Two</p>\n    <p class="text-sm text-gray-600">Sits beside Card One at md and up.</p>\n  </div>\n  <div class="p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">\n    <p class="font-semibold mb-1">Card Three</p>\n    <p class="text-sm text-gray-600">Third column appears at lg.</p>\n  </div>\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Show / Hide Elements</h3>
      <p className="text-gray-600 mb-3">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">hidden</code> and <code className="bg-gray-100 px-2 py-1 rounded text-sm">md:flex</code> to show elements only on larger screens.</p>

      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
        <span className="text-sm font-medium">Always visible</span>
        <span className="hidden md:block text-sm text-blue-600 font-medium">Visible at md+</span>
        <span className="hidden lg:block text-sm text-green-600 font-medium">Visible at lg+</span>
      </div>

      <div className="mb-6">
        <CodeBlock code={`<div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">\n  <span>Always visible</span>\n  <span class="hidden md:block text-blue-600">Visible at md+</span>\n  <span class="hidden lg:block text-green-600">Visible at lg+</span>\n</div>`}>
          {`<div class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">\n  <span>Always visible</span>\n  <span class="hidden md:block text-blue-600">Visible at md+</span>\n  <span class="hidden lg:block text-green-600">Visible at lg+</span>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
