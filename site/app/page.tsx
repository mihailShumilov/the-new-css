import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'The New CSS - Lightweight Utility-First CSS Library',
  description:
    'A super lightweight utility-first CSS library under 5KB gzipped. Modern CSS features like oklch(), @layer, and container queries. No build step required.',
  keywords: [
    'CSS library',
    'utility-first CSS',
    'lightweight CSS framework',
    'Tailwind alternative',
    'no build step CSS',
    'modern CSS utilities',
    'oklch CSS',
    'CSS utility classes',
  ],
  alternates: { canonical: 'https://thenewcss.com/' },
  openGraph: {
    type: 'website',
    title: 'The New CSS - Utility-First CSS Under 5KB',
    description:
      'Lightweight utility-first CSS library. Modern CSS features, familiar class names, zero build step. Drop in a link tag and start building.',
    url: 'https://thenewcss.com/',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS - Lightweight Utility-First CSS Library' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The New CSS - Utility-First CSS Under 5KB',
    description: 'Utility-first CSS library under 5KB. No build step. Modern CSS features.',
    images: ['/og.svg'],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'The New CSS',
    description:
      'A super lightweight, utility-first CSS library under 5KB gzipped with modern CSS features.',
    programmingLanguage: 'CSS',
    license: 'https://opensource.org/licenses/MIT',
    codeRepository: 'https://github.com/mihailShumilov/the-new-css',
    runtimePlatform: 'Web',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The New CSS',
    url: 'https://thenewcss.com',
    description: 'Documentation and resources for The New CSS utility-first CSS library.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What browsers support The New CSS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chrome/Edge 111+, Firefox 113+, Safari 16.4+. All modern browsers that support oklch(), @layer, and container queries.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a build step to use The New CSS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Add a single link tag to your HTML and start using utility classes immediately. No PostCSS, no bundler, no config files.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does The New CSS compare to Tailwind?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The New CSS uses familiar utility class names but ships as plain CSS at under 5KB gzipped — about 6x smaller than Tailwind. No build step, no config, and built on modern CSS features like oklch() colors and @layer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize the design tokens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All colors, spacing, typography, and other design tokens are CSS custom properties on :root. Override them in your own stylesheet to match your brand.',
        },
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="py-16 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="size-badge mb-4 inline-flex">~5KB gzipped</span>
          <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
            <span className="gradient-text">The New CSS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            A super lightweight, utility-first CSS library built on modern CSS features.
            Familiar class names, zero build step, under 5KB gzipped.
          </p>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-8">
            Uses oklch() colors, @layer ordering, container queries, and CSS custom properties.
            Works with HTML, React, Vue, Svelte, Astro, or any stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="/docs/getting-started" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </a>
            <a href="/docs" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Browse Docs
            </a>
          </div>

          {/* CDN Install */}
          <div className="max-w-lg mx-auto">
            <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'>
              {'<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Who Is This For?</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            The New CSS is built for developers who want utility-first CSS without the complexity of a build pipeline.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Prototyping &amp; MVPs</h3>
              <p className="text-gray-600 text-sm">Drop in a single link tag and start building. No tooling setup, no waiting for compilers. Ship fast.</p>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Static Sites &amp; Landing Pages</h3>
              <p className="text-gray-600 text-sm">Perfect for marketing pages, documentation, and content sites where every kilobyte matters.</p>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Server-Rendered Apps</h3>
              <p className="text-gray-600 text-sm">Works with any SSR framework. No client-side runtime, no JavaScript dependency, pure CSS.</p>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg">
              <h3 className="font-semibold mb-2">Learning Modern CSS</h3>
              <p className="text-gray-600 text-sm">The source code is readable and uses real CSS features. Great for learning oklch(), @layer, and custom properties.</p>
            </div>
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
              <p className="text-gray-600 text-sm">Built with oklch() colors, @layer, container queries, :has(), and CSS nesting. Real standards, not preprocessor hacks.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-green-50 text-green-600">{'\u26A1'}</div>
              <h3 className="font-semibold text-lg mb-2">Under 5KB Gzipped</h3>
              <p className="text-gray-600 text-sm">The full library compresses to under 5KB. That is 6x smaller than Tailwind and 4x smaller than Bootstrap CSS.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-purple-50 text-purple-600">{'\uD83D\uDEE0'}</div>
              <h3 className="font-semibold text-lg mb-2">No Build Step</h3>
              <p className="text-gray-600 text-sm">{'Add a <link> tag and you\'re done. No PostCSS, no Webpack, no config files. Works anywhere HTML works.'}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-yellow-50 text-yellow-600">{'\uD83C\uDFA8'}</div>
              <h3 className="font-semibold text-lg mb-2">Customizable Tokens</h3>
              <p className="text-gray-600 text-sm">All design tokens are CSS custom properties. Override colors, spacing, and typography to match your brand in seconds.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-red-50 text-red-600">{'\uD83D\uDCE6'}</div>
              <h3 className="font-semibold text-lg mb-2">Modular Imports</h3>
              <p className="text-gray-600 text-sm">Import only what you need. Each category (layout, colors, typography) is available as a standalone module.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="feature-icon bg-blue-50 text-blue-600">{'\uD83D\uDCF1'}</div>
              <h3 className="font-semibold text-lg mb-2">Responsive &amp; Dark Mode</h3>
              <p className="text-gray-600 text-sm">Mobile-first breakpoints (sm/md/lg) and automatic dark mode with manual toggle support built in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">CSS Layers for Predictable Specificity</h3>
              <p className="text-gray-600 mb-3">
                The New CSS uses <code className="text-sm bg-gray-100 px-1 rounded">@layer</code> to organize styles into three layers: base, utilities, and variants.
                This means utility classes always override base styles, and responsive/state variants always override utilities. No specificity wars.
              </p>
              <a href="/docs/getting-started" className="text-blue-600 text-sm font-medium hover:underline">Learn more about CSS layers &rarr;</a>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Design Tokens as CSS Custom Properties</h3>
              <p className="text-gray-600 mb-3">
                Colors, spacing, typography, shadows, and borders are defined as CSS custom properties on <code className="text-sm bg-gray-100 px-1 rounded">:root</code>.
                Override any token to customize the entire library without touching the source.
              </p>
              <a href="/docs/customization" className="text-blue-600 text-sm font-medium hover:underline">Read the customization guide &rarr;</a>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">oklch() Color Space</h3>
              <p className="text-gray-600 mb-3">
                All colors use the oklch() color space for perceptually uniform palettes. This means consistent lightness across hues
                and better dark mode transitions compared to hex or hsl.
              </p>
              <a href="/docs/colors" className="text-blue-600 text-sm font-medium hover:underline">Explore color utilities &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-12 md:py-16 bg-gray-50">
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
          <p className="text-center mt-8">
            <a href="/examples" className="text-blue-600 font-medium hover:underline">See more examples &rarr;</a>
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 md:py-16">
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
          <p className="text-center mt-6">
            <a href="/compare" className="text-blue-600 font-medium hover:underline">See the full comparison &rarr;</a>
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Quick Start</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">1. Add the stylesheet</h3>
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'}
              </CodeBlock>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Or install via npm</h3>
              <CodeBlock code="npm install the-new-css">npm install the-new-css</CodeBlock>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Start building</h3>
              <CodeBlock code={`<div class="flex items-center gap-4 p-6\n  bg-gray-100 rounded-lg shadow">\n  <h2 class="text-xl font-bold">Hello World</h2>\n  <p class="text-gray-600">Built with The New CSS</p>\n</div>`}>
                {`<div class="flex items-center gap-4 p-6\n  bg-gray-100 rounded-lg shadow">\n  <h2 class="text-xl font-bold">Hello World</h2>\n  <p class="text-gray-600">Built with The New CSS</p>\n</div>`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details className="border border-gray-200 rounded-lg" open>
              <summary className="p-4 font-semibold cursor-pointer">What browsers support The New CSS?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>Chrome and Edge 111+, Firefox 113+, and Safari 16.4+. These browsers support oklch() colors, @layer, and container queries. That covers over 95% of global browser usage.</p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Do I need a build step?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>{'No. Add a single <link> tag to your HTML and start using utility classes immediately. No PostCSS, no bundler, no config files. If you prefer npm, install the package and import the CSS file.'}</p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">How does it compare to Tailwind CSS?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>The New CSS uses similar utility class names but ships as plain CSS at under 5KB gzipped, about 6x smaller than Tailwind. There is no build step, no config file, and it is built entirely on modern CSS features like oklch() and @layer. <a href="/compare" className="text-blue-600 hover:underline">See the full comparison</a>.</p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Can I customize the design tokens?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>Yes. All colors, spacing, typography, and other design tokens are CSS custom properties on :root. Override them in your own stylesheet to match your brand. <a href="/docs/customization" className="text-blue-600 hover:underline">Read the customization guide</a>.</p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Does dark mode work automatically?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>Yes. The New CSS detects the user's OS preference via <code className="bg-gray-100 px-1 rounded">prefers-color-scheme</code> and switches automatically. You can also add a manual toggle with a <code className="bg-gray-100 px-1 rounded">data-theme</code> attribute. <a href="/docs/dark-mode" className="text-blue-600 hover:underline">Learn about dark mode</a>.</p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Can I use only parts of the library?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>Yes. Each category (layout, typography, colors, etc.) is available as a standalone module in the <code className="bg-gray-100 px-1 rounded">dist/modules/</code> directory. Import only the modules you need to reduce size even further.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
