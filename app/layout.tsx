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
  title: "Home | Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
  description:
    "Professional Web Developer with over 5 years of experience specializing in custom websites, e-commerce, SEO & web app development based in Pahalgam, J&K, India.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "web design, web development, freelance web developer, website design, e-commerce website development, SEO services, web app development, Pahalgam, Jammu and Kashmir, India, Umar Bashir, umarbashirr, umar bashir rather, omer bashir, omar bashir, software developer, web developer, web designer, react developer, nextjs developer, jamstack developer, full stack developer, front end developer, back end developer, web developer in srinagar, web developer in india, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in pahalgam, web developer in anantnag, web developer in awantipora, web developer in pulwama, web developer in shopian, web developer in kulgam, web developer in budgam, web developer in baramulla, web developer in bandipora, web developer in kupwara, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir, web developer in srinagar, web developer in kashmir, web developer in jammu and kashmir",
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
      <body className={poppin.className}>
        <Analytics />
        <SpeedInsights />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />

        <div className="overflow-x-hidden">
          <Header />
          {/* <div className="particles">
            <div className="box bg-primary-color w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-green-600 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-purple-500 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-yellow-300 w-2 h-2 rounded-full fixed"></div>
            <div className="box bg-pink-500 w-2 h-2 rounded-full fixed"></div>
          </div> */}
          <main className="flex-grow min-h-[80vh]">{children}</main>
          <Footer />
          <div className="fixed bottom-6 right-6 p-2 cursor-pointer bg-dark-primary-color rounded-3xl">
            <Link
              href="https://wa.me/+917889737464?text=Hello%20there!%20Welcome%20to%20my%20portfolio.%20Please%20let%20me%20know%20how%20I%20can%20help%20you."
              target="_blank"
              className=" text-white"
            >
              <FaWhatsapp className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
