import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import OrganizationSchema from "./components/seo/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skfai.online"),

  title: {
    default:
      "Sri Krishna Films | Video Production, AI Ads, Digital Marketing & Lead Generation India",
    template: "%s | Sri Krishna Films",
  },

  description:
    "Since 1999, Sri Krishna Films & Advertisement Industry has been delivering TV Commercials, Corporate Films, AI Video Ads, Product Advertisements, Digital Marketing, Website Development and Lead Generation services for businesses across India.",

  keywords: [
    "Video Production Company India",
    "TV Commercial Production",
    "Corporate Film Production",
    "Corporate Video Production",
    "AI Video Production",
    "AI Advertisement",
    "AI Commercial",
    "Product Advertisement",
    "Product Shoot",
    "Documentary Film Production",
    "Digital Marketing",
    "Lead Generation",
    "Google Ads Agency",
    "Meta Ads Agency",
    "Website Development",
    "Advertising Agency India",
    "Creative Agency India",
    "Sri Krishna Films",
    "Video Production House",
    "Commercial Film Maker",
  ],

  authors: [
    {
      name: "Sri Krishna Films & Advertisement Industry",
    },
  ],

  creator: "Sri Krishna Films & Advertisement Industry",

  publisher: "Sri Krishna Films & Advertisement Industry",

  alternates: {
    canonical: "https://www.skfai.online",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.skfai.online",
    siteName: "Sri Krishna Films & Advertisement Industry",

    title:
      "Sri Krishna Films | Video Production, AI Ads, Digital Marketing & Lead Generation",

    description:
      "Professional TV Commercials, Corporate Films, AI Advertisement, Digital Marketing & Lead Generation Services Across India Since 1999.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Krishna Films",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sri Krishna Films | Video Production Company India",

    description:
      "Professional TV Commercials, AI Advertisement, Corporate Films & Digital Marketing.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <OrganizationSchema />

        {children}

        <GoogleAnalytics gaId="G-RJDHN5TXXR" />

      </body>
    </html>
  );
}