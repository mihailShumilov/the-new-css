import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';
import SplitExample from '@/components/SplitExample';

export const metadata: Metadata = {
  title: 'The New CSS - Modern CSS. No build step. No utility class soup.',
  description:
    'A lightweight, zero-config CSS library for modern websites. Semantic-first, fast to adopt, and easy to maintain. Under 5KB gzipped.',
  keywords: [
    'CSS library',
    'lightweight CSS framework',
    'Tailwind alternative',
    'semantic CSS',
    'no build step CSS',
    'modern CSS',
    'minimal CSS framework',
    'zero-config CSS',
  ],
  alternates: { canonical: 'https://thenewcss.com/' },
  openGraph: {
    type: 'website',
    title: 'The New CSS - Modern CSS. No build step. No utility class soup.',
    description:
      'Lightweight, zero-config CSS library for modern websites. Semantic-first, under 5KB gzipped.',
    url: 'https://thenewcss.com/',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The New CSS - Modern CSS. No build step.',
    description: 'Lightweight, zero-config CSS library. Semantic-first, under 5KB gzipped.',
    images: ['/og.svg'],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'The New CSS',
    description:
      'A lightweight, zero-config CSS library for modern websites. Semantic-first, fast to adopt, and easy to maintain.',
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
    description: 'Documentation and resources for The New CSS library.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is The New CSS a full component framework?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It's a lightweight baseline + sensible defaults. Use it alone or alongside your own components.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize The New CSS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — via CSS variables and standard overrides. No config files required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does The New CSS work with React/Vue/Svelte?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes — it's just CSS. Use it anywhere.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is The New CSS meant to replace Tailwind?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not always. Tailwind is great for utility workflows. The New CSS is for clean HTML and fast adoption.',
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="gradient-text">Modern CSS. No build step.</span>
            <br />
            <span className="gradient-text">No utility class soup.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            The New CSS is a lightweight, zero-config CSS library for modern websites — semantic-first, fast to adopt, and easy to maintain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <a
              href="#quickstart"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              data-event="click_get_started"
            >
              Get started in 30 seconds
            </a>
            <a
              href="#examples"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              data-event="click_see_examples"
            >
              See examples
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-8">
            Drop in via CDN or npm. Works with plain HTML, React, Vue, Svelte, and anything else.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="size-badge">Zero config</span>
            <span className="size-badge">Semantic-first</span>
            <span className="size-badge">Lightweight</span>
          </div>
        </div>
      </section>

      {/* Why The New CSS? */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why The New CSS?</h2>
          <div className="space-y-4 mb-8">
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Your HTML stays readable</strong> — no class overload.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>No tooling required</strong> — no Tailwind config, no build pipeline.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Small footprint</strong> — ship less CSS, load faster.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold text-lg mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Modern defaults</strong> — good typography and layout out of the box.</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-blue-800 text-sm font-medium">Use it when you want a clean baseline and still write real CSS.</p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Install in 30 seconds</h2>
          <TabSwitcher
            tabs={[
              {
                label: 'CDN',
                content: (
                  <div className="space-y-3">
                    <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'>
                      {'<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'}
                    </CodeBlock>
                  </div>
                ),
              },
              {
                label: 'npm',
                content: (
                  <div className="space-y-4">
                    <CodeBlock code="npm install the-new-css">npm install the-new-css</CodeBlock>
                    <CodeBlock code='import "the-new-css/dist/the-new-css.css";'>
                      {'import "the-new-css/dist/the-new-css.css";'}
                    </CodeBlock>
                  </div>
                ),
              },
            ]}
          />
          <p className="text-sm text-gray-500 text-center mt-4">
            No PostCSS. No config. No build step required.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How it compares</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Tailwind</th>
                  <th>Bootstrap</th>
                  <th>The New CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Build step</td>
                  <td>Usually yes</td>
                  <td>No</td>
                  <td className="text-green-600 font-semibold">No</td>
                </tr>
                <tr>
                  <td className="font-medium">HTML readability</td>
                  <td>Low (utility-heavy)</td>
                  <td>Medium</td>
                  <td className="text-green-600 font-semibold">High (semantic-first)</td>
                </tr>
                <tr>
                  <td className="font-medium">Bundle size mindset</td>
                  <td>Depends on build</td>
                  <td>Moderate</td>
                  <td className="text-green-600 font-semibold">Small by default</td>
                </tr>
                <tr>
                  <td className="font-medium">Customization</td>
                  <td>Config-driven</td>
                  <td>Theme variables</td>
                  <td className="text-green-600 font-semibold">CSS variables + real CSS</td>
                </tr>
                <tr>
                  <td className="font-medium">Best for</td>
                  <td>Apps with utility workflows</td>
                  <td>Classic components</td>
                  <td className="text-green-600 font-semibold">Clean baselines + fast sites</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a href="/vs-tailwind" className="text-blue-600 font-medium hover:underline text-sm">
              Tailwind alternative &rarr;
            </a>
            <a href="/vs-bootstrap" className="text-blue-600 font-medium hover:underline text-sm">
              Bootstrap alternative &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Examples (Split-view) */}
      <section id="examples" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">See it instantly</h2>
          <div className="space-y-8">
            <SplitExample
              title="Buttons + forms"
              code={`<button class="btn">Primary</button>\n<button class="btn secondary">Secondary</button>\n<input placeholder="Email" />\n<select><option>Option</option></select>`}
              preview={
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Primary</button>
                  <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg font-medium">Secondary</button>
                  <input placeholder="Email" className="px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                  <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Option</option>
                  </select>
                </div>
              }
            />

            <SplitExample
              title="Typography + article"
              code={`<article class="prose">\n  <h1>Clean typography by default</h1>\n  <p>Readable spacing, sensible headings,\n     and modern defaults.</p>\n  <blockquote>Semantic HTML should look\n     good without extra work.</blockquote>\n</article>`}
              preview={
                <article>
                  <h3 className="text-xl font-bold mb-2">Clean typography by default</h3>
                  <p className="text-gray-600 mb-3">Readable spacing, sensible headings, and modern defaults.</p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-500 italic">
                    Semantic HTML should look good without extra work.
                  </blockquote>
                </article>
              }
            />

            <SplitExample
              title="Cards + layout"
              code={`<section class="grid">\n  <div class="card">\n    <h3>Fast</h3>\n    <p>Ship less CSS.</p>\n  </div>\n  <div class="card">\n    <h3>Simple</h3>\n    <p>No config required.</p>\n  </div>\n  <div class="card">\n    <h3>Clean</h3>\n    <p>Readable HTML.</p>\n  </div>\n</section>`}
              preview={
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold mb-1">Fast</h4>
                    <p className="text-sm text-gray-600">Ship less CSS.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold mb-1">Simple</h4>
                    <p className="text-sm text-gray-600">No config required.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold mb-1">Clean</h4>
                    <p className="text-sm text-gray-600">Readable HTML.</p>
                  </div>
                </div>
              }
            />
          </div>
          <p className="text-center mt-8">
            <a href="/examples" className="text-blue-600 font-medium hover:underline">See more examples &rarr;</a>
          </p>
        </div>
      </section>

      {/* Templates */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Real templates</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <a href="/templates/landing" className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition bg-gray-100">
              <h3 className="font-semibold text-lg mb-2">Landing page</h3>
              <p className="text-sm text-gray-600">Hero + features + CTA, perfect for product pages.</p>
            </a>
            <a href="/templates/dashboard" className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition bg-gray-100">
              <h3 className="font-semibold text-lg mb-2">Dashboard</h3>
              <p className="text-sm text-gray-600">Navigation + cards + tables, for admin UIs.</p>
            </a>
            <a href="/templates/blog" className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition bg-gray-100">
              <h3 className="font-semibold text-lg mb-2">Blog layout</h3>
              <p className="text-sm text-gray-600">Typography-first layout for content sites.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Philosophy</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            The New CSS is built around a simple idea: HTML should be readable, and CSS should be easy to adopt.
            Modern CSS is powerful — you don&apos;t need a complex framework to ship clean interfaces.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Semantic-first</h3>
              <p className="text-sm text-gray-600">Style elements and meaningful classes.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Zero-config</h3>
              <p className="text-sm text-gray-600">Drop it in and go.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Modern CSS</h3>
              <p className="text-sm text-gray-600">Variables, grid, good defaults.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join early adopters</h2>
          <p className="text-gray-600 mb-6">Early adopters welcome — star the repo to support the project.</p>
          <a
            href="https://github.com/mihailShumilov/the-new-css"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Star on GitHub
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg" open>
              <summary className="p-4 font-semibold cursor-pointer">Is this a full component framework?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>It&apos;s a lightweight baseline + sensible defaults. Use it alone or alongside your own components.</p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Can I customize it?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>Yes — via CSS variables and standard overrides. No config files required.</p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Does it work with React/Vue/Svelte?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>Yes — it&apos;s just CSS. Use it anywhere.</p>
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="p-4 font-semibold cursor-pointer">Is it meant to replace Tailwind?</summary>
              <div className="px-4 pb-4 text-gray-600 text-sm">
                <p>Not always. Tailwind is great for utility workflows. The New CSS is for clean HTML and fast adoption.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
