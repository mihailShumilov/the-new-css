import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Typography Extended Addon - Display and Prose',
  description:
    'Extended typography addon for The New CSS. Display sizes 5xl-9xl, gradient text, prose auto-styling, and text-pretty utilities.',
  path: '/addons/typography-extended',
});

const jsonLd = techArticleJsonLd({
  headline: 'Typography Extended',
  description:
    'Extended typography addon for The New CSS. Display sizes 5xl-9xl, gradient text, prose auto-styling, and text-pretty utilities.',
  path: '/addons/typography-extended',
});

export default function TypographyExtendedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-6">Typography Extended</h1>
      <p className="text-gray-600 mb-6">
        Extended typography utilities beyond the core library. Adds display-sized text (5xl through
        9xl), gradient text effects, a prose class for auto-styling rich content, and text-pretty for
        improved line breaking.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <p className="text-gray-600 mb-4">
        Install the addon via npm or load it from a CDN. Requires the core library.
      </p>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/typography-extended">
                npm install @thenewcss/typography-extended
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/typography-extended/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/typography-extended/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Tokens */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Design Tokens</h2>
      <p className="text-gray-600 mb-4">
        Custom properties added to <code className="text-sm">:root</code> for extended font sizes.
      </p>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="cell-nowrap"><code className="text-sm">--text-5xl</code></td><td>3rem</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">--text-6xl</code></td><td>3.75rem</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">--text-7xl</code></td><td>4.5rem</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">--text-8xl</code></td><td>6rem</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">--text-9xl</code></td><td>8rem</td></tr>
          </tbody>
        </table>
      </div>

      {/* Size Utilities */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Size Utilities</h2>
      <p className="text-gray-600 mb-4">
        Display-sized text classes for hero sections, landing pages, and large headings.
      </p>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-5xl</code></td><td>font-size: 3rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-6xl</code></td><td>font-size: 3.75rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-7xl</code></td><td>font-size: 4.5rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-8xl</code></td><td>font-size: 6rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-9xl</code></td><td>font-size: 8rem; line-height: 1</td></tr>
          </tbody>
        </table>
      </div>

      {/* Display Sizes Preview */}
      <h3 className="font-semibold mt-6 mb-2">Example: Display sizes</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4 overflow-hidden">
        <div className="space-y-4">
          <p className="text-5xl font-bold">text-5xl</p>
          <p className="text-6xl font-bold">text-6xl</p>
          <p className="text-7xl font-bold">text-7xl</p>
          <p className="text-8xl font-bold">text-8xl</p>
          <p className="text-9xl font-bold">text-9xl</p>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<p class="text-5xl font-bold">text-5xl</p>\n<p class="text-6xl font-bold">text-6xl</p>\n<p class="text-7xl font-bold">text-7xl</p>\n<p class="text-8xl font-bold">text-8xl</p>\n<p class="text-9xl font-bold">text-9xl</p>`}>
          {`<p class="text-5xl font-bold">text-5xl</p>\n<p class="text-6xl font-bold">text-6xl</p>\n<p class="text-7xl font-bold">text-7xl</p>\n<p class="text-8xl font-bold">text-8xl</p>\n<p class="text-9xl font-bold">text-9xl</p>`}
        </CodeBlock>
      </div>

      {/* Gradient Text */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Gradient Text</h2>
      <p className="text-gray-600 mb-4">
        The <code className="text-sm">.text-gradient</code> class applies background-clip text with a
        transparent text fill. Combine it with a CSS gradient background to create colorful text effects.
      </p>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code className="text-sm">.text-gradient</code></td>
              <td>background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Example: Gradient text</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4 overflow-hidden">
        <span
          className="text-gradient text-5xl font-bold"
          style={{
            background: 'linear-gradient(135deg, var(--color-blue-500), var(--color-purple-500))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          Gradient Text
        </span>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<span class="text-gradient text-5xl font-bold"\n  style="background: linear-gradient(135deg, var(--color-blue-500), var(--color-purple-500))">\n  Gradient Text\n</span>`}>
          {`<span class="text-gradient text-5xl font-bold"\n  style="background: linear-gradient(135deg, var(--color-blue-500), var(--color-purple-500))">\n  Gradient Text\n</span>`}
        </CodeBlock>
      </div>

      {/* Prose */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Prose</h2>
      <p className="text-gray-600 mb-4">
        The <code className="text-sm">.prose</code> class auto-styles rich text content. Wrap any
        block of HTML content and it receives sensible typographic defaults -- headings, paragraphs,
        lists, blockquotes, code blocks, tables, and more are all styled automatically.
      </p>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code className="text-sm">.prose</code></td>
              <td>max-width: 65ch; color: gray-800; line-height: 1.75</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Prose child element styles</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Element</th>
              <th>Styles</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="cell-nowrap"><code className="text-sm">h1</code></td><td>font-size: 2.25em, font-weight: 800, letter-spacing: -0.025em</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">h2</code></td><td>font-size: 1.5em, font-weight: 700, margin-top: 2em</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">h3</code></td><td>font-size: 1.25em, font-weight: 600</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">h4, h5</code></td><td>font-weight: 600</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">h6</code></td><td>font-size: 0.875em, color: gray-600</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">p</code></td><td>margin: 1.25em 0</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">a</code></td><td>color: blue-600, underlined, font-weight: 500</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">ul</code></td><td>list-style: disc</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">ol</code></td><td>list-style: decimal</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">code</code></td><td>color: gray-900, background: gray-100, border-radius</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">pre</code></td><td>background: gray-900 (dark), border-radius, overflow-x: auto</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">blockquote</code></td><td>font-style: italic, border-left: gray-300</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">hr</code></td><td>border-color: gray-200, margin: 3em 0</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">table</code></td><td>auto-styled with borders</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Example: Prose content</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4 overflow-hidden">
        <div className="prose">
          <h1>The Art of Typography</h1>
          <h2>Why Typography Matters</h2>
          <p>
            Good typography makes content readable and inviting. The prose class handles all the
            spacing, sizing, and styling so you can focus on writing great content.
          </p>
          <ul>
            <li>Automatic heading sizes and weights</li>
            <li>Consistent paragraph spacing</li>
            <li>Styled lists, blockquotes, and code blocks</li>
          </ul>
          <blockquote>
            <p>Typography is the craft of endowing human language with a durable visual form.</p>
          </blockquote>
          <p>
            Inline <code>code</code> is styled automatically. Links like{' '}
            <a href="#prose">this example link</a> get the right color and decoration.
          </p>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="prose">\n  <h1>The Art of Typography</h1>\n  <h2>Why Typography Matters</h2>\n  <p>Good typography makes content readable...</p>\n  <ul>\n    <li>Automatic heading sizes and weights</li>\n    <li>Consistent paragraph spacing</li>\n    <li>Styled lists, blockquotes, and code blocks</li>\n  </ul>\n  <blockquote>\n    <p>Typography is the craft of endowing human language...</p>\n  </blockquote>\n  <p>Inline <code>code</code> is styled automatically.</p>\n</div>`}>
          {`<div class="prose">\n  <h1>The Art of Typography</h1>\n  <h2>Why Typography Matters</h2>\n  <p>Good typography makes content readable...</p>\n  <ul>\n    <li>Automatic heading sizes and weights</li>\n    <li>Consistent paragraph spacing</li>\n    <li>Styled lists, blockquotes, and code blocks</li>\n  </ul>\n  <blockquote>\n    <p>Typography is the craft of endowing human language...</p>\n  </blockquote>\n  <p>Inline <code>code</code> is styled automatically.</p>\n</div>`}
        </CodeBlock>
      </div>

      {/* Text Pretty */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Text Pretty</h2>
      <p className="text-gray-600 mb-4">
        The <code className="text-sm">.text-pretty</code> class applies{' '}
        <code className="text-sm">text-wrap: pretty</code> for improved line breaking. It prevents
        orphans and creates more balanced text blocks.
      </p>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code className="text-sm">.text-pretty</code></td>
              <td>text-wrap: pretty</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Example: Text pretty</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4 overflow-hidden">
        <p className="text-pretty max-w-md text-gray-600 leading-relaxed">
          This paragraph uses text-pretty for improved line breaking. The browser will try to balance
          lines and avoid leaving single words on the last line, creating a more visually pleasing
          text block.
        </p>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<p class="text-pretty max-w-md">\n  This paragraph uses text-pretty for improved line breaking.\n  The browser will try to balance lines and avoid orphans.\n</p>`}>
          {`<p class="text-pretty max-w-md">\n  This paragraph uses text-pretty for improved line breaking.\n  The browser will try to balance lines and avoid orphans.\n</p>`}
        </CodeBlock>
      </div>

      {/* Full Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Full Class Reference</h2>
      <p className="text-gray-600 mb-4">
        All classes included in the typography-extended addon.
      </p>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-5xl</code></td><td>font-size: 3rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-6xl</code></td><td>font-size: 3.75rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-7xl</code></td><td>font-size: 4.5rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-8xl</code></td><td>font-size: 6rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-9xl</code></td><td>font-size: 8rem; line-height: 1</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-gradient</code></td><td>background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.prose</code></td><td>max-width: 65ch; color: gray-800; line-height: 1.75; auto-styles child elements</td></tr>
            <tr><td className="cell-nowrap"><code className="text-sm">.text-pretty</code></td><td>text-wrap: pretty</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
