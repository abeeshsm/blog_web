import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fdfcf9] border-t border-[#e6dccf] ">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-[#3a2f28]">
            Abeesh
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row gap-4 text-sm text-[#3a2f28]">
          <Link href="/" className="hover:text-[#8b6f4e] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#8b6f4e] transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#8b6f4e] transition">
            Contact
          </Link>
          <Link href="/shop" className="hover:text-[#8b6f4e] transition">
            Shop
          </Link>
        </nav>

        {/* Social (optional) */}
        <div className="flex gap-4">
          <a href="#" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">🐦</a>
          <a href="#" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">📘</a>
          <a href="#" className="text-[#3a2f28] hover:text-[#8b6f4e] transition">📸</a>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-[#e6dccf] text-center text-xs text-[#6b6b6b] py-4">
        &copy; {new Date().getFullYear()} Abeesh Furniture. All rights reserved.
      </div>
    </footer>
  );
}
