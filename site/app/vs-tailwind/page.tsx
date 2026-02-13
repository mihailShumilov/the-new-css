import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Tailwind alternative: semantic, zero-config CSS',
  description:
    'A lightweight Tailwind alternative focused on semantic HTML, zero build steps, and modern CSS defaults.',
  alternates: { canonical: 'https://thenewcss.com/vs-tailwind' },
  openGraph: {
    type: 'article',
    title: 'Tailwind alternative: semantic, zero-config CSS | The New CSS',
    description:
      'A lightweight Tailwind alternative focused on semantic HTML, zero build steps, and modern CSS defaults.',
    url: 'https://thenewcss.com/vs-tailwind',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tailwind alternative: semantic, zero-config CSS | The New CSS',
    description: 'A lightweight Tailwind alternative focused on semantic HTML and zero build steps.',
    images: ['/og.svg'],
  },
};

export default function VsTailwindPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          A Tailwind alternative for semantic, zero-config CSS
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          If you&apos;re tired of utility class overload or build-step complexity, The New CSS gives you a clean baseline with readable HTML.
        </p>

        {/* When Tailwind is great */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">When Tailwind is great</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <span className="text-blue-600 font-bold mt-0.5">+</span>
              <p className="text-gray-700">Large apps with established utility workflows</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-600 font-bold mt-0.5">+</span>
              <p className="text-gray-700">Teams committed to config-driven design tokens</p>
            </li>
          </ul>
        </section>

        {/* When The New CSS is a better fit */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">When The New CSS is a better fit</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700">You want semantic HTML and readable markup</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700">You don&apos;t want a build step</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700">You want a lightweight baseline for fast sites</p>
            </li>
          </ul>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Comparison</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Tailwind</th>
                  <th scope="col">The New CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="font-medium text-left">Build step</th>
                  <td>Usually yes</td>
                  <td className="text-green-600 font-semibold">No</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">HTML readability</th>
                  <td>Low (utility-heavy)</td>
                  <td className="text-green-600 font-semibold">High (semantic-first)</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Bundle size mindset</th>
                  <td>Depends on build</td>
                  <td className="text-green-600 font-semibold">Small by default</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Customization</th>
                  <td>Config-driven</td>
                  <td className="text-green-600 font-semibold">CSS variables + real CSS</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Learning curve</th>
                  <td>Medium</td>
                  <td className="text-green-600 font-semibold">Low</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Best for</th>
                  <td>Apps with utility workflows</td>
                  <td className="text-green-600 font-semibold">Clean baselines + fast sites</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Migration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Migration notes</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            You can adopt The New CSS incrementally: start with typography + layout, then move components as needed.
          </p>
          <CodeBlock code={`<!-- Step 1: Add The New CSS -->\n<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">\n\n<!-- Step 2: Start using semantic markup -->\n<article>\n  <h1>Your content</h1>\n  <p>Clean and readable.</p>\n</article>`}>
            {`<!-- Step 1: Add The New CSS -->\n<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">\n\n<!-- Step 2: Start using semantic markup -->\n<article>\n  <h1>Your content</h1>\n  <p>Clean and readable.</p>\n</article>`}
          </CodeBlock>
        </section>

        {/* CTA */}
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-3">Ready to try a simpler approach?</h3>
          <a
            href="/#quickstart"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
