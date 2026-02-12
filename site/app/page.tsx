import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'The New CSS - Lightweight Utility-First CSS Library',
  description: 'A super lightweight, utility-first CSS library under 5KB gzipped. Modern CSS, no build step required. Like Tailwind, but pure CSS.',
  keywords: ['CSS library', 'utility-first', 'lightweight', 'modern CSS', 'no build step'],
  alternates: { canonical: 'https://thenewcss.dev/' },
  openGraph: {
    type: 'website',
    title: 'The New CSS - Lightweight Utility-First CSS Library',
    description: 'A super lightweight, utility-first CSS library under 5KB gzipped. No build step required.',
    url: 'https://thenewcss.dev/',
  },
  twitter: {
    card: 'summary',
    title: 'The New CSS',
    description: 'Utility-first CSS under 5KB. No build step required.',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            name: 'The New CSS',
            description: 'A super lightweight, utility-first CSS library',
            programmingLanguage: 'CSS',
            license: 'https://opensource.org/licenses/MIT',
          }),
        }}
      />

      {/* Hero */}
      <section className="py-16 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="size-badge mb-4 inline-flex">~5KB gzipped</span>
          <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
            <span className="gradient-text">The New CSS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            A super lightweight, utility-first CSS library. Modern CSS features, familiar class names, no build step required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="/docs/getting-started" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </a>
            <a href="https://github.com/mihailShumilov/the-new-css" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              GitHub
            </a>
          </div>

          {/* CDN Install */}
          <div className="max-w-lg mx-auto">
            <CodeBlock code='<link rel="stylesheet" href="/the-new-css.css">'>
              {'<link rel="stylesheet" href="/the-new-css.css">'}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why The New CSS?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-blue-50 text-blue-600">{'\u2728'}</div>
              <h3 className="font-semibold text-lg mb-2">Modern CSS</h3>
              <p className="text-gray-600 text-sm">Built with oklch() colors, @layer, container queries, :has(), and CSS nesting.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-green-50 text-green-600">{'\u26A1'}</div>
              <h3 className="font-semibold text-lg mb-2">Under 5KB</h3>
              <p className="text-gray-600 text-sm">Full library gzipped to under 5KB. Core bundle even smaller at ~4.5KB.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-purple-50 text-purple-600">{'\uD83D\uDEE0'}</div>
              <h3 className="font-semibold text-lg mb-2">No Build Step</h3>
              <p className="text-gray-600 text-sm">{'Just add a <link> tag. Works with any stack - HTML, React, Vue, Svelte, anything.'}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-yellow-50 text-yellow-600">{'\uD83C\uDFA8'}</div>
              <h3 className="font-semibold text-lg mb-2">Customizable</h3>
              <p className="text-gray-600 text-sm">Override CSS custom properties to match your brand. Design tokens make it easy.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-red-50 text-red-600">{'\uD83D\uDCE6'}</div>
              <h3 className="font-semibold text-lg mb-2">Modular</h3>
              <p className="text-gray-600 text-sm">Import only what you need. Each category is available as a separate module.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-blue-50 text-blue-600">{'\uD83D\uDCF1'}</div>
              <h3 className="font-semibold text-lg mb-2">Responsive</h3>
              <p className="text-gray-600 text-sm">Mobile-first responsive variants at sm, md, and lg breakpoints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Write Less, Do More</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="font-semibold mb-3">Responsive Card</h3>
              <CodeBlock code={`<div class="bg-gray-100 p-6 rounded-lg shadow-md\n  hover:shadow-lg transition">\n  <h3 class="font-bold text-lg mb-2">Title</h3>\n  <p class="text-gray-600 text-sm">Content</p>\n</div>`}>
                {`<div class="bg-gray-100 p-6 rounded-lg shadow-md\n  hover:shadow-lg transition">\n  <h3 class="font-bold text-lg mb-2">Title</h3>\n  <p class="text-gray-600 text-sm">Content</p>\n</div>`}
              </CodeBlock>
              <div className="mt-4 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
                <h3 className="font-bold text-lg mb-2">Card Title</h3>
                <p className="text-gray-600 text-sm">This card uses utility classes for padding, rounded corners, shadow, and hover effects.</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Flex Layout</h3>
              <CodeBlock code={`<div class="flex items-center gap-4">\n  <div class="bg-blue-500 text-white\n    p-4 rounded-lg font-bold">A</div>\n  <div class="flex-1 bg-gray-100\n    p-4 rounded-lg">B (flex-1)</div>\n</div>`}>
                {`<div class="flex items-center gap-4">\n  <div class="bg-blue-500 text-white\n    p-4 rounded-lg font-bold">A</div>\n  <div class="flex-1 bg-gray-100\n    p-4 rounded-lg">B (flex-1)</div>\n</div>`}
              </CodeBlock>
              <div className="mt-4 flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="bg-blue-500 text-white p-4 rounded-lg font-bold">A</div>
                <div className="flex-1 bg-gray-100 p-4 rounded-lg">B (flex-1)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How It Compares</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>The New CSS</th>
                  <th>Tailwind</th>
                  <th>Bootstrap</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Size (gzipped)</td>
                  <td className="text-green-600 font-semibold">~5KB</td>
                  <td>~30KB+</td>
                  <td>~23KB</td>
                </tr>
                <tr>
                  <td className="font-medium">Build step required</td>
                  <td className="text-green-600 font-semibold">No</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td className="font-medium">Utility-first</td>
                  <td className="text-green-600 font-semibold">Yes</td>
                  <td>Yes</td>
                  <td>Partial</td>
                </tr>
                <tr>
                  <td className="font-medium">Modern CSS</td>
                  <td className="text-green-600 font-semibold">oklch, @layer, container queries</td>
                  <td>Partial</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td className="font-medium">Dark mode</td>
                  <td className="text-green-600 font-semibold">Auto + toggle</td>
                  <td>Class/media</td>
                  <td>Data attribute</td>
                </tr>
                <tr>
                  <td className="font-medium">Customizable</td>
                  <td className="text-green-600 font-semibold">CSS variables</td>
                  <td>Config file</td>
                  <td>Sass/CSS variables</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Quick Start</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">1. Add the stylesheet</h3>
              <CodeBlock code='<link rel="stylesheet" href="/the-new-css.css">'>
                {'<link rel="stylesheet" href="/the-new-css.css">'}
              </CodeBlock>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Or install via npm</h3>
              <CodeBlock code="npm install the-new-css">npm install the-new-css</CodeBlock>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Start building</h3>
              <CodeBlock code={`<div class="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow">\n  <h2 class="text-xl font-bold">Hello World</h2>\n  <p class="text-gray-600">Built with The New CSS</p>\n</div>`}>
                {`<div class="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow">\n  <h2 class="text-xl font-bold">Hello World</h2>\n  <p class="text-gray-600">Built with The New CSS</p>\n</div>`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
