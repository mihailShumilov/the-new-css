import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Bootstrap alternative: modern, lightweight CSS',
  description:
    'A lightweight Bootstrap alternative for modern styling. Less component-heavy, more baseline, and built on modern CSS features.',
  alternates: { canonical: 'https://thenewcss.com/vs-bootstrap' },
  openGraph: {
    type: 'article',
    title: 'Bootstrap alternative: modern, lightweight CSS | The New CSS',
    description: 'A lightweight Bootstrap alternative for modern styling with zero build steps.',
    url: 'https://thenewcss.com/vs-bootstrap',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bootstrap alternative: modern, lightweight CSS | The New CSS',
    description: 'A lightweight Bootstrap alternative for modern styling.',
    images: ['/og.svg'],
  },
};

export default function VsBootstrapPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          A Bootstrap alternative for modern, lightweight styling
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          If you need classic components, Bootstrap is great. If you want a modern baseline with minimal footprint, ship The New CSS.
        </p>

        {/* When Bootstrap works well */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">When Bootstrap works well</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <span className="text-blue-600 font-bold mt-0.5">+</span>
              <p className="text-gray-700">Projects that need pre-built components (modals, carousels, tooltips)</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-600 font-bold mt-0.5">+</span>
              <p className="text-gray-700">Teams familiar with Bootstrap&apos;s class naming conventions</p>
            </li>
          </ul>
        </section>

        {/* When The New CSS is a better fit */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">When The New CSS is a better fit</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700">You want a modern baseline, not a full component library</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700">You want a smaller CSS footprint</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700">You prefer modern CSS features (oklch, @layer, container queries)</p>
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
                  <th scope="col">Bootstrap</th>
                  <th scope="col">The New CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="font-medium text-left">Build step</th>
                  <td>No</td>
                  <td className="text-green-600 font-semibold">No</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Approach</th>
                  <td>Component-heavy</td>
                  <td className="text-green-600 font-semibold">Baseline + utilities</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Bundle size</th>
                  <td>Moderate (~23KB gzipped)</td>
                  <td className="text-green-600 font-semibold">Small (~5KB gzipped)</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">CSS features</th>
                  <td>Traditional</td>
                  <td className="text-green-600 font-semibold">oklch, @layer, container queries</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">Customization</th>
                  <td>Sass / CSS variables</td>
                  <td className="text-green-600 font-semibold">CSS variables only</td>
                </tr>
                <tr>
                  <th scope="row" className="font-medium text-left">JavaScript required</th>
                  <td>Yes (for interactive components)</td>
                  <td className="text-green-600 font-semibold">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick start */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Getting started</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Replace Bootstrap with The New CSS in one line. Your semantic HTML will look great out of the box.
          </p>
          <CodeBlock code={`<!-- Remove Bootstrap -->\n<!-- <link href="bootstrap.min.css" rel="stylesheet"> -->\n\n<!-- Add The New CSS -->\n<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">`}>
            {`<!-- Remove Bootstrap -->\n<!-- <link href="bootstrap.min.css" rel="stylesheet"> -->\n\n<!-- Add The New CSS -->\n<link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">`}
          </CodeBlock>
        </section>

        {/* CTA */}
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-3">Ready for a lighter alternative?</h3>
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
