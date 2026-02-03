'use client';

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600">
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
          <Link href="/" className="text-white hover:text-blue-200 transition">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200 transition">
            About                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200 transition">
            Contact
          </Link>
          <Link href="/admin" className="text-white hover:text-blue-200 transition">
            Admin
          </Link>
          {session ? (
            <button onClick={() => signOut()} className="text-white hover:text-blue-200 transition">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="text-white hover:text-blue-200 transition">
                Login
              </Link>
              {/* <Link href="/register" className="text-white hover:text-blue-200 transition">
                Register
              </Link> */}
            </>
          )}
        </nav>

      </div>
    </header>
  );
}
