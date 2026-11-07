import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://yadi-apriyadi-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yadi Apriyadi | Home",
    template: "Yadi Apriyadi | %s",
  },
  description: "This is portofolio Yadi Apriyadi",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/maskot.ico",
    shortcut: "/maskot.ico",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Yadi Apriyadi | Home",
    description: "This is portofolio Yadi Apriyadi",
    siteName: "Yadi Apriyadi Portfolio",
    images: [
      {
        url: "/assets/images/yadi.png",
        width: 720,
        height: 720,
        alt: "Yadi Apriyadi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yadi Apriyadi | Home",
    description: "This is portofolio Yadi Apriyadi",
    images: ["/assets/images/yadi.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#84cc16",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yadi Apriyadi",
  jobTitle: "Fullstack Developer",
  url: SITE_URL,
  email: "mailto:yadi042003@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cimahi City",
    addressCountry: "ID",
  },
  worksFor: {
    "@type": "Organization",
    name: "Creativity Jannah Studio",
    url: "https://www.creativity-jannah-studio.com/",
  },
  sameAs: [
    "https://www.linkedin.com/in/yadi-apriyadi",
    "https://www.github.com/YadBro/",
    "https://www.creativity-jannah-studio.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
