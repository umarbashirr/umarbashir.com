import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Footer, Header } from "../components";
import "../styles/custom.css";
import "../styles/particles.css";
import GoogleAnalytics from "./GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | Umar Bashir Portfolio | Software Developer",
  description:
    "I am a software developer based in Pahalgam, India. I have over 4 years of experience working as a software developer, and I specialize in building web applications and websites. I mainly use frameworks like ReactJS, NextJS, and Angular.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "Umar Bashir, umarbashirr, umar bashir rather, omer bashir, omar bashir, software developer, web developer, web designer, react developer, nextjs developer, jamstack developer, full stack developer, front end developer, back end developer, web developer in srinagar, web developer in india, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in pahalgam, web developer in anantnag, web developer in awantipora, web developer in pulwama, web developer in shopian, web developer in kulgam, web developer in budgam, web developer in baramulla, web developer in bandipora, web developer in kupwara, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir",
  authors: [{ name: "Umar Bashir Rather", url: "https://www.umarbashir.com" }],
  robots: { index: true, follow: true },
  applicationName: "Umar Bashir Portfolio",
  alternates: {
    canonical: `https://www.umarbashir.com`,
  },
  openGraph: {
    type: "website",
    url: "https://www.umarbashir.com",
    title: "Umar Bashir Portfolio",
    description:
      "I am a software developer based in Pahalgam, India. I have over 4 years of experience working as a software developer, and I specialize in building web applications and websites. I mainly use frameworks like ReactJS, NextJS, and Angular.",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Umar Bashir Portfolio",
      },
    ],
    siteName: "Umar Bashir Portfolio",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "auto",
  initialScale: 1,
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
      <GoogleAnalytics GTM_ID={process.env.GTM_ID!} />
      <body>
        <Analytics />
        <SpeedInsights />
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
