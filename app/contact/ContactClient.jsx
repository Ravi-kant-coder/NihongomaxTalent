"use client";

import { motion } from "framer-motion";

export default function ContactClient() {
  return (
    <main className="bg-white text-gray-800 px-6 md:px-16 py-16">
      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Let’s connect and discuss your hiring needs.
        </p>

        <p className="jp mt-4 text-gray-600">
          採用に関するご相談はお気軽にお問い合わせください。
        </p>
      </section>

      {/* FORM + INFO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-8 rounded-xl shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-6">Send us a message</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Name / お名前</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Company / 会社名</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Requirement / ご要望</label>
              <textarea
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-600">contact@nihongomaxtalent.com</p>
            <p className="text-gray-600">+91-XXXXXXXXXX</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-600">Mon–Fri: 9:00 AM – 6:00 PM</p>
            <p className="jp text-gray-600">月曜日～金曜日：午前9時～午後6時</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
