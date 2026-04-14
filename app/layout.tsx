import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dewi & Wisnu — Wedding Invitation",
  description:
    "Dengan penuh rasa syukur, kami mengundang Anda untuk merayakan momen sakral pernikahan kami.",
  openGraph: {
    title: "Dewi & Wisnu — Wedding Invitation",
    description: "Kami mengundang Anda hadir dalam hari bahagia kami.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-soft-black font-inter antialiased">{children}</body>
    </html>
  );
}
