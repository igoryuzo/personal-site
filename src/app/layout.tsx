import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Igor Yuzovitskiy",
  description: "Builder. Early partner at $1B+ AUM firm. Founder of products reaching 3,500+ MAUs.",
  openGraph: {
    title: "Igor Yuzovitskiy",
    description: "Builder. Early partner at $1B+ AUM firm. Founder of products reaching 3,500+ MAUs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Yuzovitskiy",
    description: "Builder. Early partner at $1B+ AUM firm. Founder of products reaching 3,500+ MAUs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
