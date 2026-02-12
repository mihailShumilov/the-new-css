import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';

export const metadata = docMeta({
  title: 'Getting Started',
  description: 'Install The New CSS via CDN or npm and learn the basics. Utility-first CSS classes, CSS layers, design tokens, and browser support guide.',
  path: '/docs/getting-started',
});

const jsonLd = techArticleJsonLd({
  headline: 'Getting Started',
  description: 'Install The New CSS via CDN or npm and learn the basics. Utility-first CSS classes, CSS layers, design tokens, and browser support guide.',
  path: '/docs/getting-started',
});

export default function GettingStartedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Getting Started</h1>

      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>

      <h3 className="font-semibold mt-6 mb-2">CDN (Recommended)</h3>
      <p className="text-gray-600 mb-3">Add this single line to your HTML <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;head&gt;</code>:</p>
      <div className="mb-6">
        <CodeBlock code='<link rel="stylesheet" href="/the-new-css.css">'>
          {'<link rel="stylesheet" href="/the-new-css.css">'}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">npm</h3>
      <div className="mb-4">
        <CodeBlock code="npm install the-new-css">npm install the-new-css</CodeBlock>
      </div>
      <p className="text-gray-600 mb-3">Then import in your CSS or HTML:</p>
      <div className="mb-6">
        <CodeBlock code="@import 'the-new-css/dist/the-new-css.min.css';">
          {"@import 'the-new-css/dist/the-new-css.min.css';"}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Download</h3>
      <p className="text-gray-600 mb-6">Download <code className="bg-gray-100 px-2 py-1 rounded text-sm">the-new-css.min.css</code> from the GitHub releases page and include it in your project.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Basic Concepts</h2>

      <h3 className="font-semibold mt-6 mb-2">Utility-First</h3>
      <p className="text-gray-600 mb-4">The New CSS provides single-purpose utility classes that you compose directly in your HTML. Instead of writing custom CSS, combine utilities:</p>
      <div className="mb-6">
        <CodeBlock code={`<div class="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow">\n  <h2 class="text-xl font-bold">Hello</h2>\n  <p class="text-gray-600">World</p>\n</div>`}>
          {`<div class="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow">\n  <h2 class="text-xl font-bold">Hello</h2>\n  <p class="text-gray-600">World</p>\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">CSS Layers (@layer)</h3>
      <p className="text-gray-600 mb-4">The New CSS uses <code className="bg-gray-100 px-2 py-1 rounded text-sm">@layer</code> to organize styles. The layer order is:</p>
      <ol className="text-gray-600 mb-4 space-y-1" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
        <li><strong>base</strong> - Reset and element defaults</li>
        <li><strong>utilities</strong> - All utility classes</li>
        <li><strong>variants</strong> - Responsive, hover, focus, dark mode</li>
      </ol>
      <p className="text-gray-600 mb-6">Your custom styles in a higher layer (or no layer) will always win over utility classes.</p>

      <h3 className="font-semibold mt-6 mb-2">Design Tokens</h3>
      <p className="text-gray-600 mb-4">Colors, spacing, typography, and other values are defined as CSS custom properties. Override them to customize the library:</p>
      <div className="mb-6">
        <CodeBlock code={`:root {\n  --color-blue-500: oklch(0.6 0.2 250);\n  --font-sans: "Inter", system-ui, sans-serif;\n  --radius-lg: 0.75rem;\n}`}>
          {`:root {\n  --color-blue-500: oklch(0.6 0.2 250);\n  --font-sans: "Inter", system-ui, sans-serif;\n  --radius-lg: 0.75rem;\n}`}
        </CodeBlock>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Browser Support</h2>
      <p className="text-gray-600 mb-4">The New CSS uses modern CSS features. It works in all major evergreen browsers:</p>
      <ul className="text-gray-600 mb-6 space-y-1" style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
        <li>Chrome/Edge 111+</li>
        <li>Firefox 113+</li>
        <li>Safari 16.4+</li>
      </ul>
    </>
  );
}
