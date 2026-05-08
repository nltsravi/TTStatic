'use client';

import { usePathname } from 'next/navigation';

export function CanonicalUrl() {
  const pathname = usePathname();
  // Ensure we don't have trailing slashes if not desired, though for this site it might be fine.
  // Next.js pathname includes the leading slash.
  const url = `https://www.tirwintalent.com${pathname}`;
  return <link rel="canonical" href={url} />;
}
