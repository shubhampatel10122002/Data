import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500"],
  variable: "--font-deva",
  display: "swap",
});

const siteUrl = "https://sarvahq.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sarva — Real-world multimodal data for frontier AI & robotics",
  description:
    "Sarva runs custom multimodal data collection across 150+ industrial facilities in India — POV video, sensor streams, machine interactions and operational workflows, delivered training-ready.",
  keywords: [
    "multimodal data",
    "robotics training data",
    "AI training data",
    "POV video dataset",
    "sensor data",
    "industrial data collection",
    "India",
    "Gujarat",
  ],
  openGraph: {
    title: "Sarva — Real-world multimodal data for frontier AI & robotics",
    description:
      "Custom multimodal data collection grounded in real industrial environments across India.",
    url: siteUrl,
    siteName: "Sarva",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarva — Real-world multimodal data for frontier AI",
    description:
      "Custom multimodal data collection grounded in real industrial environments across India.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} ${notoDevanagari.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
