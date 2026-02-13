import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Semantic CSS: readable HTML, real CSS, fewer hacks',
  description:
    'Write semantic HTML that looks good by default. The New CSS focuses on meaningful markup, not utility class soup.',
  alternates: { canonical: 'https://thenewcss.com/semantic-css' },
  openGraph: {
    type: 'article',
    title: 'Semantic CSS: readable HTML, real CSS, fewer hacks | The New CSS',
    description: 'Write semantic HTML that looks good by default. No utility class soup.',
    url: 'https://thenewcss.com/semantic-css',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semantic CSS | The New CSS',
    description: 'Readable HTML, real CSS, fewer hacks.',
    images: ['/og.svg'],
  },
};

export default function SemanticCssPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          Semantic CSS: readable HTML, real CSS, fewer hacks
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Semantic-first means styling elements and meaningful classes instead of stacking utility classes on every element.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What is semantic CSS?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Semantic CSS means your markup describes content, not presentation. Elements like
            {' '}<code className="text-sm bg-gray-100 px-1 rounded">&lt;article&gt;</code>,
            {' '}<code className="text-sm bg-gray-100 px-1 rounded">&lt;nav&gt;</code>, and
            {' '}<code className="text-sm bg-gray-100 px-1 rounded">&lt;header&gt;</code> carry meaning.
            Classes describe purpose, not appearance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Before and after</h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-2 text-red-600">Utility-heavy approach</h3>
            <CodeBlock code={`<div class="flex flex-col gap-4 p-6 bg-white\n  rounded-xl shadow-md border border-gray-200\n  hover:shadow-lg transition-shadow duration-200">\n  <h2 class="text-xl font-bold text-gray-900\n    tracking-tight leading-snug">Title</h2>\n  <p class="text-sm text-gray-600\n    leading-relaxed">Description text.</p>\n</div>`}>
              {`<div class="flex flex-col gap-4 p-6 bg-white\n  rounded-xl shadow-md border border-gray-200\n  hover:shadow-lg transition-shadow duration-200">\n  <h2 class="text-xl font-bold text-gray-900\n    tracking-tight leading-snug">Title</h2>\n  <p class="text-sm text-gray-600\n    leading-relaxed">Description text.</p>\n</div>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-green-600">Semantic approach (The New CSS)</h3>
            <CodeBlock code={`<article class="p-6 bg-gray-100 rounded-lg shadow-md\n  hover:shadow-lg transition">\n  <h2 class="text-xl font-bold mb-2">Title</h2>\n  <p class="text-gray-600 text-sm">Description text.</p>\n</article>`}>
              {`<article class="p-6 bg-gray-100 rounded-lg shadow-md\n  hover:shadow-lg transition">\n  <h2 class="text-xl font-bold mb-2">Title</h2>\n  <p class="text-gray-600 text-sm">Description text.</p>\n</article>`}
            </CodeBlock>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why semantic HTML matters</h2>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Accessibility</strong> — screen readers understand semantic elements natively.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Maintainability</strong> — readable markup is easier to review, debug, and hand off.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>SEO</strong> — search engines use semantic structure to understand your content.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <p className="text-gray-700"><strong>Less CSS</strong> — good defaults mean fewer overrides and less code overall.</p>
            </div>
          </div>
        </section>

        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-3">Write cleaner HTML today</h3>
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
