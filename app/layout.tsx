import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Choco Melt | Luxury Handcrafted Cookies",
  description:
    "Premium handcrafted cookies baked fresh daily with Belgian chocolate and the finest ingredients. Shop gift boxes, subscriptions, and seasonal favorites.",
  keywords: [
    "luxury cookies",
    "handcrafted bakery",
    "cookie gift boxes",
    "Belgian chocolate cookies",
    "premium desserts",
  ],
  openGraph: {
    title: "Choco Melt | Luxury Handcrafted Cookies",
    description:
      "Cookies that melt hearts. Freshly baked daily with premium ingredients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
