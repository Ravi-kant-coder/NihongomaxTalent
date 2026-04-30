import { Source_Sans_3, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jp",
});

export const metadata = {
  title: "Hire Japanese Speaking IT Engineers | Nihongo Max Talent",
  description:
    "We provide highly skilled IT engineers from India trained in Japanese language (JLPT) and culture.",
  icons: {
    icon: "/sakura.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${notoJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
