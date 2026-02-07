'use client';

import { useState, useCallback, type ReactNode } from 'react';

export default function CodeBlock({ code, children }: { code: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="code-block">
      <button className="copy-btn" onClick={copy}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <code>{children}</code>
    </div>
  );
}
