import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
            About
          </Link>
          <Link href="/contact" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
