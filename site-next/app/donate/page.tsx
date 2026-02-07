import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support The New CSS - Donate',
  description: 'Support The New CSS project. Help us keep building a lightweight, open-source utility-first CSS library.',
};

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Support The New CSS</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The New CSS is free, open-source software. Your support helps us maintain the project, add new features, and keep it lightweight and dependency-free.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We believe CSS libraries should be small, fast, and require zero configuration. The web has evolved - modern browsers support powerful CSS features natively. The New CSS leverages these features to deliver a utility-first framework in under 5KB.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Your donations help us dedicate time to maintaining the project, testing across browsers, writing documentation, and responding to community feedback. Every contribution, no matter the size, makes a difference.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Ways to Support</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition">
              <div className="text-3xl mb-3">{'\u2764\uFE0F'}</div>
              <h3 className="font-bold text-lg mb-2">GitHub Sponsors</h3>
              <p className="text-gray-600 text-sm mb-4">Monthly or one-time sponsorship directly through GitHub.</p>
              <a href="https://github.com/sponsors" className="donate-btn-github inline-flex items-center px-4 py-2 bg-gray-900 text-gray-50 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Sponsor on GitHub
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition">
              <div className="text-3xl mb-3">{'\u2615'}</div>
              <h3 className="font-bold text-lg mb-2">Buy Me a Coffee</h3>
              <p className="text-gray-600 text-sm mb-4">Quick one-time donations to keep the project caffeinated.</p>
              <a href="https://buymeacoffee.com" className="donate-btn-coffee inline-flex items-center px-4 py-2 text-yellow-600 border border-yellow-600 rounded-lg text-sm font-medium transition-colors">
                Buy a Coffee
              </a>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition sm:col-span-2 lg:col-span-1">
              <div className="text-3xl mb-3">{'\uD83C\uDF0D'}</div>
              <h3 className="font-bold text-lg mb-2">Open Collective</h3>
              <p className="text-gray-600 text-sm mb-4">Transparent funding for the project with public expense tracking.</p>
              <a href="https://opencollective.com" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Open Collective
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Sponsor Tiers</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 flex items-start gap-4">
              <div className="bg-gray-200 rounded-lg p-3 text-xl shrink-0">{'\uD83C\uDF1F'}</div>
              <div>
                <h3 className="font-bold mb-1">Backer - $5/mo</h3>
                <p className="text-gray-600 text-sm">Your name listed on our README and website as a backer.</p>
              </div>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 flex items-start gap-4">
              <div className="bg-gray-200 rounded-lg p-3 text-xl shrink-0">{'\uD83D\uDC8E'}</div>
              <div>
                <h3 className="font-bold mb-1">Supporter - $25/mo</h3>
                <p className="text-gray-600 text-sm">Your name and avatar on our website. Priority issue support.</p>
              </div>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 flex items-start gap-4">
              <div className="bg-gray-200 rounded-lg p-3 text-xl shrink-0">{'\uD83D\uDE80'}</div>
              <div>
                <h3 className="font-bold mb-1">Sponsor - $100/mo</h3>
                <p className="text-gray-600 text-sm">Your logo on our homepage and README. Featured sponsor acknowledgement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Help</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Not everyone can contribute financially, and that{"'"}s perfectly fine. Here are other ways to support the project:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-1">Star on GitHub</h3>
              <p className="text-gray-600 text-sm">Help others discover the project by starring the repository.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-1">Report Issues</h3>
              <p className="text-gray-600 text-sm">Found a bug? Open an issue to help us improve.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-1">Contribute Code</h3>
              <p className="text-gray-600 text-sm">Submit pull requests for fixes, features, or documentation.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-1">Spread the Word</h3>
              <p className="text-gray-600 text-sm">Share The New CSS with your team, on social media, or at meetups.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
