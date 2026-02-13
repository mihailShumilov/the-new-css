import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Landing page template',
  description: 'A ready-to-use landing page template built with The New CSS. Hero, features, and CTA sections.',
  alternates: { canonical: 'https://thenewcss.com/templates/landing' },
};

const templateCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Product</title>
  <link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">
</head>
<body class="bg-gray-50 text-gray-900">

  <!-- Hero -->
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
        Your product headline
      </h1>
      <p class="text-lg text-gray-600 max-w-xl mx-auto mb-8">
        A clear, concise description of what your product does
        and why it matters.
      </p>
      <a href="#" class="inline-flex px-6 py-3 bg-blue-600
        text-white font-semibold rounded-lg">
        Get started
      </a>
    </div>
  </section>

  <!-- Features -->
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-center mb-8">Features</h2>
      <div class="grid sm:grid-cols-3 gap-6">
        <div class="p-6 bg-gray-50 rounded-lg">
          <h3 class="font-semibold text-lg mb-2">Fast</h3>
          <p class="text-gray-600 text-sm">
            Optimized for speed and performance.
          </p>
        </div>
        <div class="p-6 bg-gray-50 rounded-lg">
          <h3 class="font-semibold text-lg mb-2">Simple</h3>
          <p class="text-gray-600 text-sm">
            Easy to set up and start using immediately.
          </p>
        </div>
        <div class="p-6 bg-gray-50 rounded-lg">
          <h3 class="font-semibold text-lg mb-2">Reliable</h3>
          <p class="text-gray-600 text-sm">
            Built to work consistently across browsers.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-2xl font-bold mb-4">Ready to start?</h2>
      <p class="text-gray-600 mb-6">
        Join thousands of developers building with our product.
      </p>
      <a href="#" class="inline-flex px-6 py-3 bg-blue-600
        text-white font-semibold rounded-lg">
        Sign up free
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-8 border-t border-gray-200">
    <div class="container mx-auto px-4 text-center text-sm text-gray-500">
      &copy; 2026 Your Company. All rights reserved.
    </div>
  </footer>

</body>
</html>`;

export default function LandingTemplatePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-sm text-gray-500 mb-2"><a href="/templates" className="hover:text-blue-600">&larr; All templates</a></p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">Landing page template</h1>
          <p className="text-gray-600">Hero + features + CTA. This is plain HTML + The New CSS.</p>
        </div>

        {/* Live Preview */}
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="px-4 py-2 bg-gray-100 border-b border-gray-200 text-sm font-medium text-gray-500">Preview</div>
          <div className="bg-gray-50">
            {/* Hero */}
            <section className="py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-6">Your product headline</h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">A clear, concise description of what your product does and why it matters.</p>
                <span className="inline-flex px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg">Get started</span>
              </div>
            </section>
            {/* Features */}
            <section className="py-12 bg-gray-100">
              <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-center mb-8">Features</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Fast</h4>
                    <p className="text-gray-600 text-sm">Optimized for speed and performance.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Simple</h4>
                    <p className="text-gray-600 text-sm">Easy to set up and start using immediately.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Reliable</h4>
                    <p className="text-gray-600 text-sm">Built to work consistently across browsers.</p>
                  </div>
                </div>
              </div>
            </section>
            {/* CTA */}
            <section className="py-16">
              <div className="container mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                <p className="text-gray-600 mb-6">Join thousands of developers building with our product.</p>
                <span className="inline-flex px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg">Sign up free</span>
              </div>
            </section>
          </div>
        </div>

        {/* Source Code */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Source code</h2>
          <CodeBlock code={templateCode}>{templateCode}</CodeBlock>
        </div>
      </div>
    </div>
  );
}
