'use client';

import CodeBlock from './CodeBlock';

export default function SplitExample({
  title,
  code,
  preview,
}: {
  title: string;
  code: string;
  preview: React.ReactNode;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="border-b md:border-b-0 md:border-r border-gray-200">
          <CodeBlock code={code}>{code}</CodeBlock>
        </div>
        <div className="p-6 bg-gray-50">{preview}</div>
      </div>
    </div>
  );
}
