import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tirwintalent.com"),
  title: {
    default: "Tirwin Talent – Logistics & Supply Chain Training",
    template: "%s | Tirwin Talent",
  },
  description: "Tirwin Talent offers expert logistics and supply chain training, masterclasses, and career-focused programs for industry professionals.",
  keywords: ["Logistics", "Supply Chain", "Training", "Cargo", "Masterclass", "Tirwin Talent", "Career Empowerment"],
  openGraph: {
    title: "Tirwin Talent – Logistics & Supply Chain Training",
    description: "Tirwin Talent offers expert logistics and supply chain training, masterclasses, and career-focused programs for industry professionals.",
    url: "https://tirwintalent.com",
    siteName: "Tirwin Talent",
    images: [
      {
        url: "https://tirwintalent.com/tirwin-logo.png",
        width: 1200,
        height: 630,
        alt: "Tirwin Talent Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirwin Talent – Logistics & Supply Chain Training",
    description: "Tirwin Talent offers expert logistics and supply chain training, masterclasses, and career-focused programs for industry professionals.",
    images: ["https://tirwintalent.com/tirwin-logo.png"],
  },
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import { CanonicalUrl } from '@/components/CanonicalUrl';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <CanonicalUrl />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
      <GoogleAnalytics gaId="G-4L2TJZG36G" />
      <body
        className={`${playfair.variable} ${dmSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col text-lg`}
        style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
