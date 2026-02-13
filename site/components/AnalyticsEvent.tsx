'use client';

import { useCallback, type ReactNode } from 'react';

function trackEvent(eventName: string) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName);
  }
}

export default function AnalyticsEvent({
  event,
  children,
  as: Tag = 'button',
  ...props
}: {
  event: string;
  children: ReactNode;
  as?: 'button' | 'a';
  [key: string]: any;
}) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      trackEvent(event);
      if (props.onClick) props.onClick(e);
    },
    [event, props.onClick],
  );

  return (
    <Tag {...props} onClick={handleClick}>
      {children}
    </Tag>
  );
}

export { trackEvent };
