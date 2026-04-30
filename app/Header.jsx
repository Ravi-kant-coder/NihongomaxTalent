import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="w-full ">
        <div className="max-w-8xl mx-auto px-6 md:px-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Nihongomax Talent Logo"
              width={180}
              height={60}
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-20 text-xl font-medium tracking-wide text-gray-800">
            <Link href="#" className="hover:text-green-600 transition">
              Home
            </Link>
            <Link href="#" className="hover:text-green-600 transition">
              Services
            </Link>
            <Link href="#" className="hover:text-green-600 transition">
              Talent
            </Link>
            <Link href="#" className="hover:text-green-600 transition">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
