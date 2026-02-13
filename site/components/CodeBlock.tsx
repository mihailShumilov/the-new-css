'use client';

import { useState, useCallback, type ReactNode } from 'react';

export default function CodeBlock({ code, children, eventName }: { code: string; children: ReactNode; eventName?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      if (eventName && typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', eventName);
      }
    });
  }, [code, eventName]);

  return (
    <div className="code-block">
      <button className="copy-btn" onClick={copy}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <code>{children}</code>
    </div>
  );
}
