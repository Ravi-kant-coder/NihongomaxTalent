import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hire Japanese Speaking IT Engineers | Nihongomax Talent",
  description:
    "We provide highly skilled IT engineers from India trained in Japanese language (JLPT) and culture. Hire job-ready developers for Japan.",
  icons: {
    icon: "/sakura.png",
  },
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
      <section className="py-20 bg-gray-50 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Candidates: Japanese-Speaking IT Engineers from India
            <br /> Your Bridge to Skilled Talent for Japan
          </h2>

          <p className="text-gray-600 text-lg">
            Read this guide to learn more about our Japanese-speaking IT
            engineers. Discover how our candidates are trained in Japanese
            language (JLPT), business etiquette, and modern tech stacks like
            MERN. Find out how we prepare them to be job-ready for companies in
            Japan, ensuring smooth communication and productivity.
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
    </main>
  );
}
