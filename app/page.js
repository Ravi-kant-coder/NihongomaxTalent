import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hire Japanese Speaking IT Engineers | Nihongomax Talent",
  description:
    "We provide highly skilled IT engineers from India trained in Japanese language (JLPT) and culture. Hire job-ready developers for Japan.",
  keywords: [
    "Japanese speaking developers",
    "Hire IT engineers Japan",
    "JLPT engineers India",
    "Offshore developers Japan",
  ],
  alternates: {
    canonical: "https://www.nihongomaxtalent.com",
  },
  openGraph: {
    title: "Hire Japanese Speaking Developers | Nihongo Max Talent",
    description:
      "Hire JLPT-certified IT engineers from India. Japanese-ready developers for companies in Japan.",
    url: "https://www.nihongomaxtalent.com",
    siteName: "Nihongomax Talent",
    images: [
      {
        url: "fujisan.png",
        width: 1200,
        height: 630,
        alt: "Japanese language classroom in Delhi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function NihongomaxTalent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    description:
      "We provide Japanese-speaking IT engineers from India trained in JLPT and Japanese work culture.",
    name: "Nihongomax Talent",
    url: "https://www.nihongomaxtalent.com",
    telephone: "+91-7678461209",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/nihongomax",
      "https://www.instagram.com/nihongomax",
    ],
  };
  return (
    <main className="bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HEADER */}
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

          {/* NAV (optional for now) */}
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
      {/* HERO SECTION */}
      <section className="w-full flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Hire Japanese-Ready <br />
              IT Talent from India
            </h1>

            <p className="text-lg text-gray-600">
              Skilled engineers trained in Japanese language, culture, and
              real-world development.
            </p>

            <div className="flex gap-4">
              <button className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 cursor-pointer font-bold">
                Request Talent Profiles
              </button>
              <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-300 cursor-pointer ">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE + VERTICAL TEXT */}
          <div className="relative w-full h-[500px] md:h-[650px]">
            {/* IMAGE */}
            <Image
              src={"/fujisan.png"}
              alt="Students learning Japanese language in Delhi classroom"
              className="rounded-xl mb-8 w-full h-auto"
              fill
              priority
            />

            {/* VERTICAL JAPANESE TEXT */}
            <div className="absolute left-4 top-10 text-black">
              <p
                className="text-2xl md:text-3xl font-semibold tracking-widest jp"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                最高の人材で
                <br />
                ITエンジニアの
                <br />
                採用課題を解決します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE / TRUST SECTION */}
      <section className="py-20 bg-gray-50 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Bridging India and Japan Through Talent
          </h2>

          <p className="text-gray-600 text-lg">
            We specialize in providing IT engineers who are not only technically
            skilled but also culturally aligned with Japanese work standards.
          </p>

          <blockquote className="text-xl text-gray-700">
            “人材だけではなく、信頼を提供します。”
          </blockquote>

          <p className="text-gray-500">
            (We don’t just provide talent — we deliver trust.)
          </p>
        </div>
      </section>

      {/* BILINGUAL SECTION */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* ENGLISH */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              For Japanese Companies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We understand the challenges of hiring skilled engineers in Japan.
              Our candidates are trained in Japanese language (JLPT), business
              etiquette, and modern tech stacks like MERN, ensuring smooth
              communication and productivity.
            </p>
          </div>

          {/* JAPANESE */}
          <div>
            <h3 className="text-xl font-semibold mb-4">日本企業向け</h3>
            <p className="text-gray-600 leading-relaxed jp">
              日本でのエンジニア採用の課題を理解しています。
              当社の人材は、日本語能力（JLPT）とビジネスマナー、
              そして最新のITスキルを備えており、スムーズな業務遂行を実現します。
            </p>
          </div>
        </div>
      </section>

      {/*FOOTER */}
      <section className="py-20 bg-gray-900 text-white text-center px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Hire Skilled Engineers?
        </h2>
        <p className="mb-8 text-gray-300">
          Connect with us and get access to pre-screened Japanese-speaking
          developers.
        </p>
        <button className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition cursor-pointer">
          Get Candidates
        </button>
      </section>
    </main>
  );
}
