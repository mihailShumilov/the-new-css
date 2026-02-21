import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Cards',
  description:
    'Flexible card components for The New CSS. Header, body, footer, and image sections with hover effects, horizontal layout, compact mode, and padding modifiers.',
  path: '/addons/cards',
});

const jsonLd = techArticleJsonLd({
  headline: 'Cards Addon',
  description:
    'Flexible card components for The New CSS with header, body, footer, image sections, hover effects, horizontal layout, compact mode, and padding modifiers.',
  path: '/addons/cards',
});

export default function CardsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-4">Cards</h1>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Flexible card components with header, body, footer, and image sections. Includes hover
        effects, horizontal layout, compact mode, flat style, and padding modifiers.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/cards">
                npm install @thenewcss/cards
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/cards/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/cards/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Examples */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Examples</h2>

      {/* Basic Card */}
      <h3 className="font-semibold mt-6 mb-2">Basic Card</h3>
      <p className="text-gray-600 mb-3">A card with header, body, and footer sections.</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="card" style={{ maxWidth: '24rem' }}>
          <div className="card-header">Card Header</div>
          <div className="card-body">
            <h4 className="font-semibold mb-2">Card Title</h4>
            <p className="text-gray-600 text-sm">This is the card body with some example content. Cards are flexible containers for grouping related information.</p>
          </div>
          <div className="card-footer">Card Footer</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="card">
  <div class="card-header">Card Header</div>
  <div class="card-body">
    <h4>Card Title</h4>
    <p>This is the card body with some example content.</p>
  </div>
  <div class="card-footer">Card Footer</div>
</div>`}>
          {`<div class="card">\n  <div class="card-header">Card Header</div>\n  <div class="card-body">\n    <h4>Card Title</h4>\n    <p>This is the card body with some example content.</p>\n  </div>\n  <div class="card-footer">Card Footer</div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Card with Image */}
      <h3 className="font-semibold mt-6 mb-2">Card with Image</h3>
      <p className="text-gray-600 mb-3">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.card-img-top</code> for a top image. Here a placeholder div substitutes for an actual image.</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="card" style={{ maxWidth: '24rem' }}>
          <div className="card-img-top bg-gray-200" style={{ height: '200px' }}></div>
          <div className="card-body">
            <h4 className="font-semibold mb-2">Image Card</h4>
            <p className="text-gray-600 text-sm">A card with an image at the top, followed by body content.</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="card">
  <img class="card-img-top" src="image.jpg" alt="...">
  <div class="card-body">
    <h4>Image Card</h4>
    <p>A card with an image at the top.</p>
  </div>
</div>`}>
          {`<div class="card">\n  <img class="card-img-top" src="image.jpg" alt="...">\n  <div class="card-body">\n    <h4>Image Card</h4>\n    <p>A card with an image at the top.</p>\n  </div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Card Hover Effect */}
      <h3 className="font-semibold mt-6 mb-2">Hover Effect</h3>
      <p className="text-gray-600 mb-3">Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.card-hover</code> for a lift effect on hover with enhanced shadow.</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="card card-hover" style={{ maxWidth: '24rem' }}>
          <div className="card-body">
            <h4 className="font-semibold mb-2">Hover Me</h4>
            <p className="text-gray-600 text-sm">This card lifts up and gains a larger shadow when you hover over it.</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="card card-hover">
  <div class="card-body">
    <h4>Hover Me</h4>
    <p>This card lifts up on hover.</p>
  </div>
</div>`}>
          {`<div class="card card-hover">\n  <div class="card-body">\n    <h4>Hover Me</h4>\n    <p>This card lifts up on hover.</p>\n  </div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Card Horizontal */}
      <h3 className="font-semibold mt-6 mb-2">Horizontal Layout</h3>
      <p className="text-gray-600 mb-3">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.card-horizontal</code> for a side-by-side layout. Images are capped at 40% width.</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="card card-horizontal">
          <div className="card-img-top bg-gray-200" style={{ height: '160px' }}></div>
          <div className="card-body">
            <h4 className="font-semibold mb-2">Horizontal Card</h4>
            <p className="text-gray-600 text-sm">Content sits alongside the image in a horizontal layout. The image takes up to 40% of the card width.</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="card card-horizontal">
  <img class="card-img-top" src="image.jpg" alt="...">
  <div class="card-body">
    <h4>Horizontal Card</h4>
    <p>Content sits alongside the image.</p>
  </div>
</div>`}>
          {`<div class="card card-horizontal">\n  <img class="card-img-top" src="image.jpg" alt="...">\n  <div class="card-body">\n    <h4>Horizontal Card</h4>\n    <p>Content sits alongside the image.</p>\n  </div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Card Compact */}
      <h3 className="font-semibold mt-6 mb-2">Compact Variant</h3>
      <p className="text-gray-600 mb-3">Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.card-compact</code> to reduce padding on all sections.</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="card card-compact" style={{ maxWidth: '24rem' }}>
          <div className="card-header">Compact Header</div>
          <div className="card-body">
            <h4 className="font-semibold mb-1">Compact Card</h4>
            <p className="text-gray-600 text-sm">This card has reduced padding on all sections for tighter layouts.</p>
          </div>
          <div className="card-footer">Compact Footer</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="card card-compact">
  <div class="card-header">Compact Header</div>
  <div class="card-body">
    <h4>Compact Card</h4>
    <p>Reduced padding on all sections.</p>
  </div>
  <div class="card-footer">Compact Footer</div>
</div>`}>
          {`<div class="card card-compact">\n  <div class="card-header">Compact Header</div>\n  <div class="card-body">\n    <h4>Compact Card</h4>\n    <p>Reduced padding on all sections.</p>\n  </div>\n  <div class="card-footer">Compact Footer</div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Card Flat */}
      <h3 className="font-semibold mt-6 mb-2">Flat Variant</h3>
      <p className="text-gray-600 mb-3">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.card-flat</code> for a card with no shadow, no border, and a gray-100 background.</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="card card-flat" style={{ maxWidth: '24rem' }}>
          <div className="card-body">
            <h4 className="font-semibold mb-2">Flat Card</h4>
            <p className="text-gray-600 text-sm">No shadow, no border. Uses a subtle gray background instead.</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="card card-flat">
  <div class="card-body">
    <h4>Flat Card</h4>
    <p>No shadow, no border. Subtle gray background.</p>
  </div>
</div>`}>
          {`<div class="card card-flat">\n  <div class="card-body">\n    <h4>Flat Card</h4>\n    <p>No shadow, no border. Subtle gray background.</p>\n  </div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Card Padding Variants */}
      <h3 className="font-semibold mt-6 mb-2">Padding Variants</h3>
      <p className="text-gray-600 mb-3">Control card section padding with <code className="bg-gray-100 px-2 py-1 rounded text-sm">.card-p-0</code> (no padding) and <code className="bg-gray-100 px-2 py-1 rounded text-sm">.card-p-lg</code> (larger padding).</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-4">
          <div className="card card-p-0" style={{ maxWidth: '18rem' }}>
            <div className="card-body">
              <p className="text-gray-600 text-sm">card-p-0 — no padding on sections</p>
            </div>
          </div>
          <div className="card card-p-lg" style={{ maxWidth: '18rem' }}>
            <div className="card-body">
              <p className="text-gray-600 text-sm">card-p-lg — larger padding on sections</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<!-- No padding -->
<div class="card card-p-0">
  <div class="card-body">No padding on sections</div>
</div>

<!-- Large padding -->
<div class="card card-p-lg">
  <div class="card-body">Larger padding on sections</div>
</div>`}>
          {`<!-- No padding -->\n<div class="card card-p-0">\n  <div class="card-body">No padding on sections</div>\n</div>\n\n<!-- Large padding -->\n<div class="card card-p-lg">\n  <div class="card-body">Larger padding on sections</div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Grid of Cards */}
      <h3 className="font-semibold mt-6 mb-2">Grid of Cards</h3>
      <p className="text-gray-600 mb-3">Combine cards with the grid utility for responsive card layouts.</p>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="card card-hover">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Card One</h4>
              <p className="text-gray-600 text-sm">First card in a responsive three-column grid.</p>
            </div>
          </div>
          <div className="card card-hover">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Card Two</h4>
              <p className="text-gray-600 text-sm">Second card in a responsive three-column grid.</p>
            </div>
          </div>
          <div className="card card-hover">
            <div className="card-body">
              <h4 className="font-semibold mb-2">Card Three</h4>
              <p className="text-gray-600 text-sm">Third card in a responsive three-column grid.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="grid sm:grid-cols-3 gap-4">
  <div class="card card-hover">
    <div class="card-body">
      <h4>Card One</h4>
      <p>First card in a grid.</p>
    </div>
  </div>
  <div class="card card-hover">
    <div class="card-body">
      <h4>Card Two</h4>
      <p>Second card in a grid.</p>
    </div>
  </div>
  <div class="card card-hover">
    <div class="card-body">
      <h4>Card Three</h4>
      <p>Third card in a grid.</p>
    </div>
  </div>
</div>`}>
          {`<div class="grid sm:grid-cols-3 gap-4">\n  <div class="card card-hover">\n    <div class="card-body">\n      <h4>Card One</h4>\n      <p>First card in a grid.</p>\n    </div>\n  </div>\n  <div class="card card-hover">\n    <div class="card-body">\n      <h4>Card Two</h4>\n      <p>Second card in a grid.</p>\n    </div>\n  </div>\n  <div class="card card-hover">\n    <div class="card-body">\n      <h4>Card Three</h4>\n      <p>Third card in a grid.</p>\n    </div>\n  </div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Base</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.card</code></td>
              <td>Base card container. White background, border-radius lg, 1px gray-200 border, default box-shadow, overflow hidden.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Sections</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.card-header</code></td>
              <td>Card header section. Padding 1rem / 1.5rem with a bottom border.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.card-body</code></td>
              <td>Card body section. Padding 1.5rem.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.card-footer</code></td>
              <td>Card footer section. Padding 1rem / 1.5rem with a top border.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.card-img-top</code></td>
              <td>Top image slot. Width 100%, height auto, display block.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Effects</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.card-hover</code></td>
              <td>Adds hover effect. Transition on transform and box-shadow (200ms). On hover: translateY(-2px) with shadow-lg.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Layouts</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.card-horizontal</code></td>
              <td>Horizontal card layout. Flex-direction row with image max-width 40%.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.card-compact</code></td>
              <td>Compact card. Reduced padding on all sections.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.card-flat</code></td>
              <td>Flat card. No shadow, no border, gray-100 background.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Padding</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th className="cell-nowrap">Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.card-p-0</code></td>
              <td>Removes all padding from card sections.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.card-p-lg</code></td>
              <td>Larger padding on all card sections.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
