import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Footer, Header } from "../components";
import "../styles/custom.css";
import "../styles/particles.css";
import GoogleAnalytics from "./GoogleAnalytics";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Umar Bashir Portfolio | Software Developer",
  description:
    "Software developer with over 4 years of experience building web applications and websites using modern technologies.",
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
  metadataBase: new URL("https://www.umarbashir.com"),

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
      <body className={`${poppin.className}`}>
        <Analytics />
        <SpeedInsights />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
