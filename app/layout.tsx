import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Warm, slightly humanist serif for headings — grounded, editorial feel.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Clean, readable sans for body — clarity and modern balance.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Monospace utility face for the small "data" layer — eyebrows, section
// labels, dates, and case-study tags. A quiet nod to her security/analyst
// background, and the site's typographic signature.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deeksha Hulyal — Product Thinker, Rooted in Security",
  description:
    "Cybersecurity Intelligence Analyst turned aspiring Product Manager — risk-aware thinking, structured problem-solving, and a builder's curiosity for AI.",
  openGraph: {
    title: "Deeksha Hulyal — Product Thinker, Rooted in Security",
    description:
      "Cybersecurity Intelligence Analyst turned aspiring Product Manager — risk-aware thinking, structured problem-solving, and a builder's curiosity for AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
