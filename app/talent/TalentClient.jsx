"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TalentClient() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-16 py-12">
      {/* HERO PROFILE */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] md:h-[500px]"
        >
          <Image
            src="/coderImage.png"
            alt="IT Engineer Profile"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover rounded-xl"
            loading="lazy"
          />
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h1 className="text-3xl md:text-4xl font-semibold">Zerrus Poroco</h1>

          <p className="text-gray-600">Full Stack Developer (MERN) | JLPT N3</p>

          <p className="jp text-lg leading-relaxed">
            日本語とITスキルを兼ね備えたエンジニアです。
            チーム開発や日本企業での業務にも適応できます。
          </p>

          <p className="text-gray-600 leading-relaxed">
            A skilled full-stack developer with Japanese language proficiency,
            capable of working effectively in Japanese business environments.
          </p>

          <div className="flex gap-4">
            <Link
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
              href="/contact"
            >
              Hire Candidate
            </Link>
            <Link
              className="border px-6 py-2 rounded-lg hover:bg-gray-100"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Skills / スキル</h2>

        <div className="flex flex-wrap gap-3">
          {["React", "Node.js", "MongoDB", "Next.js", "Express"].map(
            (skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ),
          )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <p className="text-gray-600">
            3+ years of experience in full-stack development, working on
            scalable web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 jp">職務経験</h3>
          <p className="jp text-gray-600">
            フルスタック開発で3年以上の経験があり、大規模なWebアプリケーションの開発に携わってきました。
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Projects / プロジェクト</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.03 }}
              className="border rounded-xl p-5 shadow-sm"
            >
              <h4 className="font-semibold mb-2">Project {item}</h4>
              <p className="text-gray-600 text-sm">
                Description of project with technologies used and impact.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Interested in this candidate?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us to hire or schedule an interview.
        </p>

        <Link
          className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700"
          href="/contact"
        >
          Request Interview
        </Link>
      </section>
    </main>
  );
}
