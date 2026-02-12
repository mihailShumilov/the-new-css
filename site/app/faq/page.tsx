import { docMeta } from '@/lib/seo';

export const metadata = docMeta({
  title: 'FAQ',
  description:
    'Frequently asked questions about The New CSS utility-first CSS library. Browser support, installation, customization, dark mode, and comparison with other frameworks.',
  path: '/faq',
});

const faqs = [
  {
    question: 'What is The New CSS?',
    answer:
      'The New CSS is a utility-first CSS library that ships as plain CSS with no build step required. It uses modern CSS features like oklch() colors, @layer, CSS custom properties, and container queries while staying under 5KB gzipped.',
  },
  {
    question: 'Is The New CSS free to use?',
    answer:
      'Yes, The New CSS is completely free and open source. You can use it in personal and commercial projects without any cost.',
  },
  {
    question: 'What license does it use?',
    answer:
      'The New CSS is released under the MIT License. This means you can use, modify, and distribute it freely in any project.',
  },
  {
    question: 'Who maintains The New CSS?',
    answer:
      'The New CSS is maintained by the open-source community. Contributions, bug reports, and feature requests are welcome on GitHub.',
  },
  {
    question: 'How do I install The New CSS?',
    answer:
      'The easiest way is via CDN — just add a single <link> tag to your HTML <head>. You can also install it with npm or download the CSS file directly. See the Getting Started guide for full details.',
  },
  {
    question: 'Do I need a build step?',
    answer:
      'No. The New CSS ships as plain CSS that works directly in the browser. There is no JavaScript compilation, no PostCSS plugins, and no CLI tool required. Just link the stylesheet and start using utility classes.',
  },
  {
    question: 'Can I use it with React/Vue/Svelte?',
    answer:
      'Absolutely. Since The New CSS is plain CSS, it works with any framework or library. Just include the stylesheet and apply utility classes to your components the same way you would in plain HTML.',
  },
  {
    question: 'Can I install it via npm?',
    answer:
      'Yes. Run npm install the-new-css, then import the CSS in your project with @import "the-new-css/dist/the-new-css.min.css". Check the Getting Started guide for more details.',
  },
  {
    question: 'How do I use only specific modules?',
    answer:
      'The New CSS provides individual module files in dist/modules/. You can import only the modules you need, such as spacing, typography, or colors, to keep your CSS even smaller. See the Customization page for guidance.',
  },
  {
    question: 'What modern CSS features does it use?',
    answer:
      'The New CSS leverages oklch() for perceptually uniform colors, @layer for style organization, CSS custom properties (variables) for design tokens, and container queries for component-level responsive design.',
  },
  {
    question: 'How does dark mode work?',
    answer:
      'Dark mode works by inverting the gray color scale tokens. It activates automatically via prefers-color-scheme, or manually with a data-theme="dark" attribute. No extra dark-prefixed classes are needed. Learn more on the Dark Mode page.',
  },
  {
    question: 'Are responsive breakpoints included?',
    answer:
      'Yes. The New CSS includes sm, md, and lg breakpoints as responsive variants. Use them with escaped-colon prefixes in your HTML, such as md:flex or lg:grid-cols-3. See the Responsive docs for all available breakpoints.',
  },
  {
    question: 'Can I customize the design tokens?',
    answer:
      'Yes. All design tokens are CSS custom properties on :root. Override any token in your own stylesheet to customize colors, spacing, typography, shadows, and more. Visit the Customization page for examples.',
  },
  {
    question: 'What color space does it use?',
    answer:
      'The New CSS uses the oklch() color space throughout. oklch provides perceptually uniform lightness, making it easier to create consistent and accessible color palettes. Learn more on the Colors page.',
  },
  {
    question: 'How does it compare to Tailwind CSS?',
    answer:
      'Unlike Tailwind, The New CSS requires no build step, no configuration file, and no JavaScript tooling. It ships as a single plain CSS file under 5KB gzipped. Tailwind is more comprehensive but requires a build pipeline; The New CSS prioritizes simplicity and zero-config usage.',
  },
  {
    question: 'How does it compare to Bootstrap?',
    answer:
      'Bootstrap is a component-based framework with JavaScript dependencies, while The New CSS is a utility-first CSS-only library. The New CSS is significantly smaller (under 5KB vs 20KB+), uses modern CSS features, and has no JavaScript dependency.',
  },
  {
    question: 'Why is it so small?',
    answer:
      'The New CSS stays under 5KB gzipped by focusing on the most commonly used utilities and leveraging modern CSS features like custom properties and @layer. There is no JavaScript, no redundant prefixes, and no legacy browser fallbacks.',
  },
  {
    question: "My styles aren't applying. What should I check?",
    answer:
      'First, verify the stylesheet is loaded correctly in your browser DevTools Network tab. Check that class names match exactly (they are case-sensitive). If you are using @layer in your own CSS, ensure your layer order does not conflict with The New CSS layers.',
  },
  {
    question: 'Does it work in older browsers?',
    answer:
      'The New CSS requires modern evergreen browsers: Chrome/Edge 111+, Firefox 113+, and Safari 16.4+. It does not support Internet Explorer or older browser versions, as it relies on modern features like oklch() and @layer.',
  },
  {
    question: 'Where can I report bugs or request features?',
    answer:
      'You can report bugs and request features on the GitHub Issues page. Contributions via pull requests are also welcome. Please check existing issues before creating a new one.',
  },
];

const sections = [
  { title: 'General', startIndex: 0, count: 4 },
  { title: 'Installation & Setup', startIndex: 4, count: 5 },
  { title: 'Features', startIndex: 9, count: 5 },
  { title: 'Comparison', startIndex: 14, count: 3 },
  { title: 'Troubleshooting', startIndex: 17, count: 3 },
];

function renderAnswer(answer: string) {
  const linkMap: Record<string, { href: string; text: string }> = {
    'Getting Started guide': { href: '/docs/getting-started', text: 'Getting Started guide' },
    'Getting Started': { href: '/docs/getting-started', text: 'Getting Started' },
    'Dark Mode page': { href: '/docs/dark-mode', text: 'Dark Mode page' },
    'Responsive docs': { href: '/docs/responsive', text: 'Responsive docs' },
    'Customization page': { href: '/docs/customization', text: 'Customization page' },
    'Colors page': { href: '/docs/colors', text: 'Colors page' },
    'GitHub Issues page': { href: 'https://github.com/the-new-css/the-new-css/issues', text: 'GitHub Issues page' },
  };

  const parts: (string | { href: string; text: string })[] = [];
  let remaining = answer;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let earliestKey = '';

    for (const key of Object.keys(linkMap)) {
      const idx = remaining.indexOf(key);
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        earliestKey = key;
      }
    }

    if (earliestKey) {
      if (earliestIndex > 0) {
        parts.push(remaining.slice(0, earliestIndex));
      }
      parts.push(linkMap[earliestKey]);
      remaining = remaining.slice(earliestIndex + earliestKey.length);
    } else {
      parts.push(remaining);
      remaining = '';
    }
  }

  return parts.map((part, i) =>
    typeof part === 'string' ? (
      <span key={i}>{part}</span>
    ) : (
      <a key={i} href={part.href} className="text-blue-600 hover:underline">
        {part.text}
      </a>
    )
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">
          Find answers to common questions about The New CSS. If your question
          is not listed here, feel free to open an issue on{' '}
          <a
            href="https://github.com/the-new-css/the-new-css/issues"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          .
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div className="space-y-3">
              {faqs
                .slice(section.startIndex, section.startIndex + section.count)
                .map((faq) => (
                  <details
                    key={faq.question}
                    className="border border-gray-200 rounded-lg"
                  >
                    <summary className="p-4 font-semibold cursor-pointer">
                      {faq.question}
                    </summary>
                    <div className="px-4 pb-4 text-gray-600 text-sm">
                      {renderAnswer(faq.answer)}
                    </div>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
