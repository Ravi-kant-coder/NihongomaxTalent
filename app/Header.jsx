"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Talent", href: "/talent" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-gray-100 shadow-md">
      <div className="max-w-8xl mx-auto px-6 md:px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Nihongo Max Talent Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-14 text-[17px] font-medium tracking-wide items-baseline">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-red-600 font-semibold border border-red-600 px-4 py-2 rounded-lg"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
