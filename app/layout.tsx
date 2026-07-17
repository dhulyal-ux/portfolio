import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
