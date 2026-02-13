import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Lightweight CSS library with modern defaults',
  description:
    'A lightweight CSS library built on modern CSS features. Small footprint, fast loading, and zero configuration.',
  alternates: { canonical: 'https://thenewcss.com/lightweight-css-library' },
  openGraph: {
    type: 'article',
    title: 'Lightweight CSS library with modern defaults | The New CSS',
    description: 'Small footprint, fast loading, modern CSS features, zero configuration.',
    url: 'https://thenewcss.com/lightweight-css-library',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lightweight CSS library | The New CSS',
    description: 'Small footprint, fast loading, modern CSS features.',
    images: ['/og.svg'],
  },
};

export default function LightweightCssPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          Lightweight CSS library with modern defaults
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          The New CSS ships under 5KB gzipped. Fast to download, fast to parse, and fast to render. No build step, no config, no overhead.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why lightweight matters</h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Faster page loads</strong> — less CSS to download and parse means faster first contentful paint.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Better Core Web Vitals</strong> — smaller render-blocking resources improve LCP and CLS.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Works on slow connections</strong> — users on 3G or satellite benefit the most from small payloads.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What&apos;s included</h2>
          <p className="text-gray-600 mb-4">Despite the small size, The New CSS includes everything you need for most websites:</p>
          <ul className="space-y-2 text-gray-700">
            <li>Layout utilities (flexbox, grid, containers)</li>
            <li>Spacing (margin, padding with consistent scale)</li>
            <li>Typography (font size, weight, line height)</li>
            <li>Colors (oklch-based palettes with text + background utilities)</li>
            <li>Borders, shadows, and radius</li>
            <li>Responsive breakpoints (sm, md, lg)</li>
            <li>Dark mode (automatic + manual toggle)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick start</h2>
          <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'>
            {'<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">'}
          </CodeBlock>
          <p className="text-sm text-gray-500 mt-3">One line. No build step. No config file.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Compare the footprint</h2>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Library</th>
                  <th scope="col">Gzipped size</th>
                  <th scope="col">Build step</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="font-medium">The New CSS</th>
                  <td className="text-green-600 font-semibold">~5KB</td>
                  <td className="text-green-600 font-semibold">No</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium">Bootstrap CSS</th>
                  <td>~23KB</td>
                  <td>No</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium">Tailwind (purged)</th>
                  <td>~10-30KB+</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-3">Ship less CSS today</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#quickstart"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get started
            </a>
            <a
              href="/vs-tailwind"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Compare with Tailwind
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
