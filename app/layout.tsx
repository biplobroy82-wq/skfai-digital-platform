import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Sri Krishna Films & Advertisement Industry | Video Production Company in Kolkata",
    template: "%s | Sri Krishna Films",
  },

  description:
    "Sri Krishna Films & Advertisement Industry is a leading video production company in Kolkata offering TV commercials, corporate films, AI videos, product shoots, digital marketing, website development and lead generation services across India.",

  keywords: [
    "Video Production Company Kolkata",
    "Advertising Agency Kolkata",
    "Corporate Film Production",
    "TV Commercial Production",
    "Product Shoot Kolkata",
    "Green Screen Studio",
    "AI Video Production",
    "Digital Marketing Agency",
    "Google Ads Services",
    "Meta Ads Agency",
    "Website Development Kolkata",
    "Lead Generation Company",
    "Film Production House Kolkata",
    "Sri Krishna Films",
  ],

  authors: [
    {
      name: "Sri Krishna Films & Advertisement Industry",
    },
  ],

  creator: "Sri Krishna Films & Advertisement Industry",

  publisher: "Sri Krishna Films & Advertisement Industry",

  applicationName: "Sri Krishna Films",

  category: "Business",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.skfai.online",
    siteName: "Sri Krishna Films & Advertisement Industry",
    title:
      "Sri Krishna Films | Video Production Company in Kolkata",
    description:
      "Professional TV Commercials, Corporate Films, AI Videos, Product Shoots, Digital Marketing and Website Development Services.",
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
      "Sri Krishna Films | Video Production Company in Kolkata",
    description:
      "Professional TV Commercials, Corporate Films, AI Videos and Digital Marketing Services.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}