import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import "../styles/particles.css";
import "../styles/custom.css";
import { Footer, Header } from "../components";
import { Metadata } from "next";
import GoogleAnalytics from "./GoogleAnalytics";
import Facebook from "./Facebook";
import { Suspense } from "react";
import Loading from "./loading";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Home | Cool Tech Design | Website Development Agency",
  description:
    "Cool Tech Design is a professional web development agency offering customized design and development solutions for businesses of all sizes. ",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "cool tech design, digital web agency, website design, website development, web development, technology, digital marketing, SEO, innovation, modern, cutting-edge, creative, unique, online solutions",
  authors: [{ name: "Umar Bashir Rather", url: "https://cooltechdesign.com" }],
  robots: { index: true, follow: true },
  viewport: { width: "device-width", initialScale: 1 },
  applicationName: "Cool Tech Design",
  alternates: {
    canonical: `https://cooltechdesign.com`,
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  fallback: ["arial"],
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GTM_ID={process.env.GTM_ID} />
      <body>
        <Analytics />
        <Facebook />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />

        <div
          className={`flex flex-col min-h-screen w-full justify-start overflow-x-hidden ${poppin.className}`}
        >
          <Header />
          {/* <div className="particles">
            <div className="box bg-primary-color w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-green-600 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-purple-500 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-yellow-300 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-pink-500 w-2 h-2 rounded-full fixed"></div>
          </div> */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
