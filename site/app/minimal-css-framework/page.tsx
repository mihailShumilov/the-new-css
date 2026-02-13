import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Minimal CSS framework for fast, clean websites',
  description:
    'A minimal CSS framework with modern defaults. Ship less CSS, load faster, and keep your HTML readable.',
  alternates: { canonical: 'https://thenewcss.com/minimal-css-framework' },
  openGraph: {
    type: 'article',
    title: 'Minimal CSS framework for fast, clean websites | The New CSS',
    description: 'A minimal CSS framework with modern defaults for performance and maintainability.',
    url: 'https://thenewcss.com/minimal-css-framework',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minimal CSS framework | The New CSS',
    description: 'Ship less CSS, load faster, and keep your HTML readable.',
    images: ['/og.svg'],
  },
};

export default function MinimalCssFrameworkPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          Minimal CSS framework for fast, clean websites
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          The New CSS gives you sensible defaults, modern utilities, and nothing extra. Performance and maintainability come from shipping less.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why minimal CSS wins</h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <div>
                <p className="font-semibold text-gray-900">Performance</p>
                <p className="text-gray-600 text-sm">Less CSS means faster downloads, fewer render-blocking resources, and quicker first paint.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <div>
                <p className="font-semibold text-gray-900">Maintainability</p>
                <p className="text-gray-600 text-sm">A small codebase is easier to understand, debug, and extend than a large framework.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <div>
                <p className="font-semibold text-gray-900">No dead code</p>
                <p className="text-gray-600 text-sm">Ship only what you use — no purge step needed when the entire library is small.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What you get by default</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-1">Typography</h3>
              <p className="text-sm text-gray-600">Readable font sizes, line heights, and heading scales.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-1">Layout</h3>
              <p className="text-sm text-gray-600">Flexbox, grid, and container utilities.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-1">Colors</h3>
              <p className="text-sm text-gray-600">Perceptually uniform oklch() color palettes.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-1">Responsive</h3>
              <p className="text-sm text-gray-600">Mobile-first breakpoints and dark mode.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick start</h2>
          <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'>
            {'<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'}
          </CodeBlock>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Example</h2>
          <CodeBlock code={`<div class="container mx-auto px-4">\n  <h1 class="text-3xl font-bold mb-4">Hello</h1>\n  <p class="text-gray-600">Clean and minimal.</p>\n  <div class="grid sm:grid-cols-2 gap-4 mt-6">\n    <div class="p-4 bg-gray-100 rounded-lg">Card A</div>\n    <div class="p-4 bg-gray-100 rounded-lg">Card B</div>\n  </div>\n</div>`}>
            {`<div class="container mx-auto px-4">\n  <h1 class="text-3xl font-bold mb-4">Hello</h1>\n  <p class="text-gray-600">Clean and minimal.</p>\n  <div class="grid sm:grid-cols-2 gap-4 mt-6">\n    <div class="p-4 bg-gray-100 rounded-lg">Card A</div>\n    <div class="p-4 bg-gray-100 rounded-lg">Card B</div>\n  </div>\n</div>`}
          </CodeBlock>
        </section>

        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-3">Try the templates</h3>
          <a
            href="/templates"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View templates
          </a>
        </div>
      </div>
    </div>
  );
}
