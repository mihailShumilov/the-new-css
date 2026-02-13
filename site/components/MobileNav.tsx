'use client';

import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4 border-t border-gray-200">
          <a href="/docs" className="block py-2 text-gray-600">Docs</a>
          <a href="/examples" className="block py-2 text-gray-600">Examples</a>
          <a href="/templates" className="block py-2 text-gray-600">Templates</a>
          <a href="/blog" className="block py-2 text-gray-600">Blog</a>
          <a href="/compare" className="block py-2 text-gray-600">Compare</a>
          <a href="/faq" className="block py-2 text-gray-600">FAQ</a>
          <a href="https://github.com/mihailShumilov/the-new-css" className="block py-2 text-gray-600">GitHub</a>
        </div>
      )}
    </>
  );
}
