'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterConditional() {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register';

  if (isAuthPage) {
    return null;
  }

  return <Footer />;
}
