'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderConditional() {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register';

  if (isAuthPage) {
    return null;
  }

  return <Header />;
}
