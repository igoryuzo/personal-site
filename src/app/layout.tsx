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
  metadataBase: new URL("https://igoryuzovitskiy.com"),
  title: {
    default: "Igor Yuzovitskiy | Product Builder & Founder",
    template: "%s | Igor Yuzovitskiy",
  },
  description:
    "Igor Yuzovitskiy is a product builder and founder who raised $1M+ and drove $5M+ in transaction volume. Former Partner at a $1B+ AUM investment firm. Now shipping consumer products with 1,500 MAUs.",
  keywords: [
    "Igor Yuzovitskiy",
    "Igor",
    "Yuzovitskiy",
    "product builder",
    "founder",
    "startup founder",
    "Peeple",
    "fintech",
    "consumer products",
    "New York",
    "Brooklyn",
  ],
  authors: [{ name: "Igor Yuzovitskiy" }],
  creator: "Igor Yuzovitskiy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://igoryuzovitskiy.com",
    siteName: "Igor Yuzovitskiy",
    title: "Igor Yuzovitskiy | Product Builder & Founder",
    description:
      "Founder who raised $1M+ and drove $5M+ in transaction volume. Former Partner at a $1B+ AUM firm. Now shipping consumer products solo.",
    images: [
      {
        url: "/igoryuzovitskiy-opengraph.png",
        width: 1200,
        height: 630,
        alt: "Igor Yuzovitskiy - Product Builder & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Yuzovitskiy | Product Builder & Founder",
    description:
      "Founder who raised $1M+ and drove $5M+ in transaction volume. Former Partner at a $1B+ AUM firm. Now shipping consumer products solo.",
    creator: "@igoryuzo",
    images: ["/igoryuzovitskiy-opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here if you have one
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Igor Yuzovitskiy",
    url: "https://igoryuzovitskiy.com",
    image: "https://igoryuzovitskiy.com/igoryuzovitskiy-opengraph.png",
    jobTitle: "Product Builder & Founder",
    description:
      "Founder who raised $1M+ and drove $5M+ in transaction volume. Former Partner at a $1B+ AUM investment firm.",
    sameAs: [
      "https://x.com/igoryuzo",
      "https://www.linkedin.com/in/igoryuzo/",
      "https://github.com/igoryuzo",
    ],
    knowsAbout: [
      "Product Management",
      "Startups",
      "Fintech",
      "Web3",
      "Software Engineering",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://igoryuzovitskiy.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
