import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    default: "Sri Krishna Films & Advertisement Industry | Video Production Company Kolkata",
    template: "%s | Sri Krishna Films",
  },

  description:
    "Sri Krishna Films & Advertisement Industry is a leading video production, TV commercial, AI advertisement, corporate film, digital marketing and branding agency in Kolkata, West Bengal.",

  keywords: [
    "Video Production Company Kolkata",
    "Advertisement Agency Kolkata",
    "Corporate Film Production",
    "TV Commercial Production",
    "AI Advertisement",
    "Product Shoot",
    "Digital Marketing Agency",
    "Google Ads Agency",
    "Meta Ads",
    "Website Development",
    "Lead Generation",
    "Green Screen Studio Kolkata",
    "Sri Krishna Films",
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
      "Sri Krishna Films & Advertisement Industry | Video Production Company Kolkata",
    description:
      "Professional TV Commercials, Corporate Films, AI Advertisement, Digital Marketing & Lead Generation Services.",

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
      "Sri Krishna Films & Advertisement Industry | Video Production Company Kolkata",
    description:
      "Professional Video Production, AI Ads, Corporate Films & Digital Marketing.",
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
        {children}

        <GoogleAnalytics gaId="G-RJDHN5TXXR" />
      </body>
    </html>
  );
}