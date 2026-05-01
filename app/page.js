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
              <Link
                href="/talent"
                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-900 cursor-pointer font-bold"
              >
                Request Talent Profiles
              </Link>
              <Link
                href="/contact"
                className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-300 cursor-pointer "
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE + VERTICAL TEXT */}
          <div className="relative w-full h-[400px] md:h-[660px]">
            <Image
              src="/artForm.png"
              alt="IT engineers From India trained in Japanese language and culture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl object-cover"
              priority
            />

            {/* VERTICAL JAPANESE TEXT */}
            <div className="absolute -left-4 top-10 text-black">
              <p
                className="text-2xl md:text-3xl font-semibold tracking-widest jp"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "upright",
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
            skilled but also culturally aligned with Japanese work standards and
            Japanese Language.
          </p>

          <blockquote className="text-xl text-gray-700">
            人材だけではなく、信頼を提供します。
          </blockquote>

          <p className="text-gray-500">
            We don’t just provide talent — we deliver trust.
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

      <section className="py-20 bg-gray-200 text-center px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Hire Skilled Engineers?
        </h2>
        <p className="mb-8 text-gray-700">
          Connect with us and get access to pre-screened Japanese-speaking
          developers.
        </p>
        <Link
          href="/talent"
          className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition cursor-pointer text-white font-bold"
        >
          Get Candidates
        </Link>
      </section>

      <section className="px-6 md:px-16">
        <h1 className="text-4xl text-center font-semibold pt-10">
          Data & AI Engineers Ready for Japan
        </h1>
        <h2 className="text-2xl text-center font-semibold py-8">
          日本で活躍できるデータ・AIエンジニア
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-2 md:gap-30">
          <div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Core IT Roles</h3>
              <ul className="mb-8 space-y-2">
                <li className="flex justify-between">
                  <span>Full Stack Developer</span>
                  <span className="jp text-gray-600">
                    フルスタックエンジニア
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Frontend Developer</span>
                  <span className="jp text-gray-600">
                    フロントエンドエンジニア
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Backend Developer</span>
                  <span className="jp text-gray-600">
                    バックエンドエンジニア
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Software Engineer</span>
                  <span className="jp text-gray-600">
                    ソフトウェアエンジニア
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Web Developer</span>
                  <span className="jp text-gray-600">Webエンジニア</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
              <ul className="mb-8 space-y-2">
                <li className="flex justify-between">
                  <span>DevOps Engineer</span>
                  <span className="jp text-gray-600">DevOpsエンジニア</span>
                </li>

                <li className="flex justify-between">
                  <span>Cloud Engineer</span>
                  <span className="jp text-gray-600">クラウドエンジニア</span>
                </li>

                <li className="flex justify-between">
                  <span>AWS Engineer</span>
                  <span className="jp text-gray-600">AWSエンジニア</span>
                </li>

                <li className="flex justify-between">
                  <span>Site Reliability Engineer (SRE)</span>
                  <span className="jp text-gray-600">SREエンジニア</span>
                </li>

                <li className="flex justify-between">
                  <span>Infrastructure Engineer</span>
                  <span className="jp text-gray-600">インフラエンジニア</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Data & AI</h3>
              <ul className="mb-8 space-y-2">
                <li className="flex justify-between">
                  <span>AI Engineer</span>
                  <span className="jp text-gray-600">AIエンジニア</span>
                </li>
                <li className="flex justify-between">
                  <span>Data Scientist</span>
                  <span className="jp text-gray-600">
                    データサイエンティスト
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Machine Learning Engineer</span>
                  <span className="jp text-gray-600">機械学習エンジニア</span>
                </li>

                <li className="flex justify-between">
                  <span>Big Data Engineer</span>
                  <span className="jp text-gray-600">
                    ビッグデータエンジニア
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Database Administrator</span>
                  <span className="jp text-gray-600">データベース管理者</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <ul className="mb-8 space-y-2">
                <li className="flex justify-between">
                  <span>Cybersecurity Engineer</span>
                  <span className="jp text-gray-600">
                    セキュリティエンジニア
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>Network Security Engineer</span>
                  <span className="jp text-gray-600">
                    ネットワークエンジニア
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Mobile & UI</h3>
              <ul className="mb-8 space-y-2">
                <li className="flex justify-between">
                  <span>Mobile App Developer</span>
                  <span className="jp text-gray-600">モバイルアプリ開発者</span>
                </li>

                <li className="flex justify-between">
                  <span>Android Developer</span>
                  <span className="jp text-gray-600">アンドロイド開発者</span>
                </li>
                <li className="flex justify-between">
                  <span>iOS Developer</span>
                  <span className="jp text-gray-600">iOS開発者</span>
                </li>
                <li className="flex justify-between">
                  <span>UI/UX Designer</span>
                  <span className="jp text-gray-600">UI/UXデザイナー</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Emerging Tech</h3>
              <ul className="mb-8 space-y-2">
                <li className="flex justify-between">
                  <span>IoT Engineer</span>
                  <span className="jp text-gray-600">IoTエンジニア</span>
                </li>

                <li className="flex justify-between">
                  <span>Blockchain Developer</span>
                  <span className="jp text-gray-600">
                    ブロックチェーン開発者
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>AR/VR Developer</span>
                  <span className="jp text-gray-600">AR/VR開発者</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Systems & Hardware</h3>
              <ul className="mb-8 space-y-2">
                <li className="flex justify-between">
                  <span>Embedded Systems Engineer</span>
                  <span className="jp text-gray-600">
                    組み込みシステムエンジニア
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>System Administrator</span>
                  <span className="jp text-gray-600">システム管理者</span>
                </li>
                <li className="flex justify-between">
                  <span>Network Engineer</span>
                  <span className="jp text-gray-600">
                    ネットワークエンジニア
                  </span>
                </li>

                <li className="flex justify-between">
                  <span>SAP Engineer</span>
                  <span className="jp text-gray-600">SAPエンジニア</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
            <Image
              src="/groovy.png"
              alt="IT engineers from India trained in Japanese language and culture"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
            <Image
              src="/zombieing.png"
              alt="IT engineers from India trained in Japanese language and culture"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16 pt-10 mt-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* ENGLISH */}
          <div>
            <h3 className="text-xl font-semibold">
              Our Expertise in Japanese-Ready Talent
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Nihongomax Talent, we specialize in connecting Japanese
              companies with highly skilled IT professionals from India who are
              not only technically proficient but also culturally and
              linguistically prepared to work in Japanese business environments.
              Our candidates undergo structured training in modern technologies
              such as full-stack development, alongside focused preparation in
              Japanese language (JLPT) and workplace communication. This ensures
              smooth collaboration, reduced onboarding time, and long-term
              productivity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">日本企業向けの専門知識</h3>
            <p className="text-gray-600 leading-relaxed jp">
              Nihongomax
              Talentでは、日本企業とインドの優秀なIT人材をつなぐサービスを提供しています。当社のエンジニアは、
              高い技術力を持つだけでなく、日本語能力（JLPT）やビジネス文化への理解も備えており、
              日本企業の環境で円滑に業務を行うことができます。最新のITスキルに加え、
              日本語や職場でのコミュニケーション能力を体系的にトレーニングすることで、スムーズな連携と高い生産性を実現します。
            </p>
          </div>
          <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
            <Image
              src="/meditating.png"
              alt="IT engineers from India trained in Japanese language and culture"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
          <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
            <Image
              src="/coffee.gif"
              alt="IT engineers from India trained in Japanese language and culture"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
