import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';
import SplitExample from '@/components/SplitExample';

export const metadata: Metadata = {
  title: 'The New CSS - Modern CSS. Clean by default.',
  description:
    'A lightweight, zero-config CSS base built for readable HTML and fast adoption. Sensible defaults, no build step, under 5KB gzipped.',
  keywords: [
    'lightweight CSS library',
    'minimal CSS framework',
    'semantic CSS baseline',
    'Tailwind alternative',
    'no build step CSS',
    'modern CSS defaults',
    'zero-config CSS',
    'CSS library no build',
  ],
  alternates: { canonical: 'https://thenewcss.com/' },
  openGraph: {
    type: 'website',
    title: 'The New CSS - Modern CSS. Clean by default.',
    description:
      'A lightweight, zero-config CSS base. Sensible defaults, readable HTML, under 5KB gzipped.',
    url: 'https://thenewcss.com/',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The New CSS - Modern CSS. Clean by default.',
    description: 'Lightweight, zero-config CSS base. Sensible defaults, under 5KB gzipped.',
    images: ['/og.svg'],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'The New CSS',
    description:
      'A lightweight, zero-config CSS base built for readable HTML and fast adoption. Sensible defaults, no build step, under 5KB gzipped.',
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
    description: 'Documentation and resources for The New CSS — a modern semantic CSS baseline.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why use The New CSS instead of Tailwind?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tailwind is great for utility-driven workflows in large apps. The New CSS is for developers who want clean, readable HTML with sensible defaults — no build step, no config, no class overload.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize The New CSS with CSS variables?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All design tokens (colors, spacing, typography, shadows) are CSS custom properties on :root. Override them in your own stylesheet — no config files needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does The New CSS replace utility frameworks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It can. The New CSS gives you a clean baseline plus utility classes for layout, spacing, and responsive design. For most sites — landing pages, blogs, docs — it is all you need.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does The New CSS work with React, Vue, and Svelte?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes — it's plain CSS. Drop in a link tag or import from npm. It works in any UI stack without adapters or plugins.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is The New CSS a full component framework?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. It's a lightweight baseline with sensible defaults and utility classes. Use it alone or alongside your own components.",
        },
      },
      {
        '@type': 'Question',
        name: 'How small is The New CSS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under 5KB gzipped for the full library. That includes layout, typography, colors, responsive breakpoints, and dark mode.',
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

      {/* ─── Hero ─── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="gradient-text">Modern CSS. Clean by default.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            A lightweight, zero-config CSS base built for readable HTML and fast adoption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <a
              href="#quickstart"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              data-event="click_try_30s"
            >
              Try in 30 seconds
            </a>
            <a
              href="#examples"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              data-event="click_see_examples"
            >
              See live examples
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-8">
            Drop in via CDN or npm — works in any UI stack.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="size-badge">Zero config</span>
            <span className="size-badge">Semantic defaults</span>
            <span className="size-badge">&lt; 5 KB gzipped</span>
          </div>
        </div>
      </section>

      {/* ─── The Problem ─── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Why The New CSS?</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Utility classes can pollute HTML and require config and build tooling.
            The New CSS gives you sensible defaults without any of that.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-3 items-start p-4 border border-gray-200 rounded-lg">
              <span className="text-green-600 font-bold text-lg mt-0.5">&#10003;</span>
              <div>
                <p className="font-semibold text-gray-900">No build tools required</p>
                <p className="text-sm text-gray-600">One link tag. No PostCSS, no Webpack, no config files.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-4 border border-gray-200 rounded-lg">
              <span className="text-green-600 font-bold text-lg mt-0.5">&#10003;</span>
              <div>
                <p className="font-semibold text-gray-900">Clean semantic HTML</p>
                <p className="text-sm text-gray-600">Readable markup that describes content, not presentation.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-4 border border-gray-200 rounded-lg">
              <span className="text-green-600 font-bold text-lg mt-0.5">&#10003;</span>
              <div>
                <p className="font-semibold text-gray-900">Small footprint, fast loading</p>
                <p className="text-sm text-gray-600">Under 5KB gzipped. Less CSS = faster first paint.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-4 border border-gray-200 rounded-lg">
              <span className="text-green-600 font-bold text-lg mt-0.5">&#10003;</span>
              <div>
                <p className="font-semibold text-gray-900">Works everywhere</p>
                <p className="text-sm text-gray-600">Plain HTML, React, Vue, Svelte — any stack.</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-blue-800 text-sm font-medium">
              Use it when you want a clean baseline and still write real CSS.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Quick Start ─── */}
      <section id="quickstart" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Try in 30 seconds</h2>
          <TabSwitcher
            tabs={[
              {
                label: 'CDN',
                content: (
                  <CodeBlock
                    code='<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'
                    eventName="copy_cdn"
                  >
                    {'<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'}
                  </CodeBlock>
                ),
              },
              {
                label: 'npm',
                content: (
                  <div className="space-y-4">
                    <CodeBlock code="npm install the-new-css" eventName="copy_npm">
                      npm install the-new-css
                    </CodeBlock>
                    <CodeBlock code='import "the-new-css/dist/the-new-css.css";'>
                      {'import "the-new-css/dist/the-new-css.css";'}
                    </CodeBlock>
                  </div>
                ),
              },
            ]}
          />
          <p className="text-sm text-gray-500 text-center mt-4">
            No PostCSS. No config. No build step. Just CSS.
          </p>
        </div>
      </section>

      {/* ─── Comparison ─── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How it compares</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Tailwind CSS</th>
                  <th scope="col">Bootstrap</th>
                  <th scope="col">Pure CSS</th>
                  <th scope="col">The New CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="font-medium text-left">Build step</th>
                  <td>Usually yes</td>
                  <td>No</td>
                  <td>No</td>
                  <td className="text-green-600 font-semibold">No</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">HTML readability</th>
                  <td>Low (utility-heavy)</td>
                  <td>Medium</td>
                  <td>High</td>
                  <td className="text-green-600 font-semibold">High (semantic defaults)</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Bundle size</th>
                  <td>~10-30KB+ (purged)</td>
                  <td>~23KB</td>
                  <td>~4KB</td>
                  <td className="text-green-600 font-semibold">~5KB</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Learning curve</th>
                  <td>Medium</td>
                  <td>Low-medium</td>
                  <td>Low</td>
                  <td className="text-green-600 font-semibold">Low</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Best for</th>
                  <td>Utility-driven apps</td>
                  <td>Classic components</td>
                  <td>Minimal layouts</td>
                  <td className="text-green-600 font-semibold">Clean baselines + fast sites</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a href="/vs-tailwind" className="text-blue-600 font-medium underline hover:no-underline text-sm">
              Tailwind alternative &rarr;
            </a>
            <a href="/vs-bootstrap" className="text-blue-600 font-medium underline hover:no-underline text-sm">
              Bootstrap alternative &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ─── Live Examples ─── */}
      <section id="examples" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">See it in action</h2>
          <div className="space-y-8">
            <SplitExample
              title="Buttons + forms"
              code={`<button class="px-4 py-2 bg-blue-600\n  text-white rounded-lg font-medium">\n  Primary\n</button>\n<button class="px-4 py-2 bg-gray-100\n  border border-gray-300 rounded-lg">\n  Secondary\n</button>\n<input placeholder="Email"\n  class="px-3 py-2 border\n  border-gray-300 rounded-lg" />`}
              preview={
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Primary</button>
                  <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg font-medium">Secondary</button>
                  <input placeholder="Email" className="px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                </div>
              }
            />

            <SplitExample
              title="Typography"
              code={`<article>\n  <h1 class="text-3xl font-bold mb-2">\n    Clean defaults\n  </h1>\n  <p class="text-gray-600 leading-relaxed">\n    Readable spacing, sensible headings,\n    and modern typography out of the box.\n  </p>\n  <blockquote class="border-l-4\n    border-blue-500 pl-4 text-gray-500\n    italic mt-4">\n    HTML should look good by default.\n  </blockquote>\n</article>`}
              preview={
                <article>
                  <h3 className="text-xl font-bold mb-2">Clean defaults</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">Readable spacing, sensible headings, and modern typography out of the box.</p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-500 italic">
                    HTML should look good by default.
                  </blockquote>
                </article>
              }
            />

            <SplitExample
              title="Grid layout"
              code={`<div class="grid sm:grid-cols-3 gap-4">\n  <div class="p-4 bg-gray-100\n    rounded-lg">\n    <h3 class="font-semibold">Fast</h3>\n    <p class="text-sm text-gray-600">\n      Ship less CSS.\n    </p>\n  </div>\n  <div class="p-4 bg-gray-100\n    rounded-lg">\n    <h3 class="font-semibold">Simple</h3>\n    <p class="text-sm text-gray-600">\n      No config required.\n    </p>\n  </div>\n  <div class="p-4 bg-gray-100\n    rounded-lg">\n    <h3 class="font-semibold">Clean</h3>\n    <p class="text-sm text-gray-600">\n      Readable HTML.\n    </p>\n  </div>\n</div>`}
              preview={
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-semibold mb-1">Fast</h4>
                    <p className="text-sm text-gray-600">Ship less CSS.</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-semibold mb-1">Simple</h4>
                    <p className="text-sm text-gray-600">No config required.</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-semibold mb-1">Clean</h4>
                    <p className="text-sm text-gray-600">Readable HTML.</p>
                  </div>
                </div>
              }
            />
          </div>
          <p className="text-center mt-8">
            <a href="/examples" className="text-blue-600 font-medium underline hover:no-underline">
              More examples &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ─── Templates ─── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Ready-to-use templates</h2>
          <p className="text-gray-600 text-center mb-8 text-sm">
            Copy the HTML. Customize with CSS variables. Ship.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <a href="/templates/landing" className="group p-6 border border-gray-200 rounded-lg hover:shadow-md transition bg-gray-100" data-event="open_template_landing">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">Landing page</h3>
              <p className="text-sm text-gray-600 mb-3">Hero + features + CTA for product pages.</p>
              <span className="text-xs text-gray-500">landing, marketing, product</span>
            </a>
            <a href="/templates/dashboard" className="group p-6 border border-gray-200 rounded-lg hover:shadow-md transition bg-gray-100" data-event="open_template_dashboard">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">Dashboard</h3>
              <p className="text-sm text-gray-600 mb-3">Nav + cards + tables for admin UIs.</p>
              <span className="text-xs text-gray-500">dashboard, admin, data</span>
            </a>
            <a href="/templates/blog" className="group p-6 border border-gray-200 rounded-lg hover:shadow-md transition bg-gray-100" data-event="open_template_blog">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">Blog layout</h3>
              <p className="text-sm text-gray-600 mb-3">Typography-first layout for content sites.</p>
              <span className="text-xs text-gray-500">blog, content, article</span>
            </a>
          </div>
          <p className="text-center mt-6">
            <a href="/templates" className="text-blue-600 font-medium underline hover:no-underline text-sm">
              View all templates &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ─── SEO: Lightweight CSS Library ─── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">A lightweight CSS library for modern websites</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The New CSS ships under 5KB gzipped. It includes layout utilities, typography defaults, a
            full color palette built on oklch(), responsive breakpoints (sm/md/lg), and automatic dark mode.
            That is everything most websites need in a single stylesheet — with no build step.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you are looking for a <a href="/minimal-css-framework" className="text-blue-600 underline hover:no-underline">minimal CSS framework</a> or
            a <a href="/lightweight-css-library" className="text-blue-600 underline hover:no-underline">lightweight CSS library</a> that respects
            <a href="/semantic-css" className="text-blue-600 underline hover:no-underline"> semantic HTML</a>, The New CSS is built for you.
          </p>
        </div>
      </section>

      {/* ─── CTA: Star + Install ─── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Start building</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Add one line to your HTML and see the difference. Star the repo if you like what you see.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/mihailShumilov/the-new-css"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              data-event="click_star_github"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              Star on GitHub
            </a>
            <a
              href="#quickstart"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              data-event="click_install_cta"
            >
              npm install the-new-css
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg" open>
              <summary className="p-4 font-semibold cursor-pointer">Why use this instead of Tailwind?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Tailwind is excellent for utility-driven workflows in large applications.
                  The New CSS is for developers who want clean, readable HTML without config files or
                  build pipelines. If your priority is fast adoption and a small footprint, The New CSS
                  is a better fit. <a href="/vs-tailwind" className="text-blue-600 underline hover:no-underline">See the full comparison</a>.
                </p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Can I customize it with CSS variables?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Yes. All design tokens — colors, spacing, typography, shadows, borders — are CSS custom
                  properties on <code className="bg-gray-100 px-1 rounded">:root</code>.
                  Override them in your own stylesheet to match your brand.
                  No config files, no Sass, just CSS.
                  <a href="/docs/customization" className="text-blue-600 underline hover:no-underline ml-1">Read the customization guide</a>.
                </p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Does it replace utility frameworks?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  It can. The New CSS provides a clean baseline plus utility classes for layout, spacing, colors,
                  and responsive design. For most sites — landing pages, blogs, documentation, portfolios — it
                  is all you need. For complex app UIs with hundreds of custom components, Tailwind may be a
                  better fit.
                </p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Does it work with React / Vue / Svelte?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Yes — it&apos;s plain CSS. Drop in a <code className="bg-gray-100 px-1 rounded">&lt;link&gt;</code> tag
                  or import from npm. No framework adapters, no plugins, no runtime dependency.
                </p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Is this a full component framework?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  No. It&apos;s a lightweight baseline + sensible defaults. It gives your HTML a
                  professional look without writing custom CSS. Add your own components on top.
                </p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">How small is it?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Under 5KB gzipped for the full library. That includes layout, typography, colors, responsive
                  breakpoints (sm/md/lg), hover/focus variants, and dark mode. You can also import individual
                  modules for an even smaller footprint.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
