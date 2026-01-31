'use client';

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-[#e6dccf]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Abeesh Furniture"
            width={85}
            height={5}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm font-medium">
          <Link href="/" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">
            Home
          </Link>
          <Link href="/about" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">
            A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          bout
          </Link>
          <Link href="/contact" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">
            Contact
          </Link>
          <Link href="/admin" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">
            Admin
          </Link>
          {session ? (
            <button onClick={() => signOut()} className="text-[#3a2f28] hover:text-[#8b6f4e] transition">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">
                Login
              </Link>
              <Link href="/register" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">
                Register
              </Link>
            </>
          )}
        </nav>

      </div>
    </header>
  );
}
