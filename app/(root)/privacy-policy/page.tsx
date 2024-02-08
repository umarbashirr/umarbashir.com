import { Metadata } from "next";
import React from "react";
import { PageHeroBanner } from "../../../components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}/privacy-policy`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.APP_URL}/privacy-policy`,
    title: "Privacy Policy | Umar Bashir Portfolio | Software Developer",
    description:
      "Provides outlines how Umar Bashir Portfolio (&lsquo;we&rsquo; or &lsquo;us&rsquo;) collects, uses, and protects your information.",
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
};

const breadcrumb = [
  { url: `${process.env.APP_URL}`, name: "Home" },
  {
    url: `${process.env.APP_URL}/privacy-policy`,
    name: "Privacy Policy",
  },
];

const title = "text-2xl font-semibold mt-5 mb-3";
const desc = "text-lg text-[#444] leading-loose mb-2";

const PrivacyPolicy = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="Privacy and Policy" bc={breadcrumb} />
      <div id="terms_section" className="mb-10 lg:mb-20 container mx-auto px-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Umar Bashir Portfolio - Privacy Policy
          </h2>
          <h3 className={title}>1. Introduction</h3>
          <p className={desc}>
            This Privacy Policy outlines how Umar Bashir Portfolio
            (&lsquo;we&rsquo; or &lsquo;us&rsquo;) collects, uses, and protects
            your personal information when you use my services or visit my
            website. By using my services and visiting my website, you agree to
            the terms of this Privacy Policy.
          </p>
          <h3 className={title}>2. Information We Collect</h3>
          <p className={desc}>
            a. <strong>Personal Information:</strong> I may collect your name,
            email address, phone number, and other contact details when you use
            my services or contact me. We may also collect information about
            your interactions with us, such as your inquiries and feedback.{" "}
          </p>
          <p className={desc}>
            b. <strong>Website Usage Information:</strong>I may collect
            information about your interactions with my website, such as your IP
            address, browser type, and operating system. We may also use cookies
            and tracking tools to analyze trends, administer the website, and
            gather demographic information for aggregate use.
          </p>
          <h3 className={title}>3. Use of Collected Information</h3>
          <p className={desc}>
            a. I use personal information to provide, maintain, and improve my
            services, and to respond to your inquiries and feedback.
          </p>{" "}
          <p className={desc}>
            b. I use website usage information to analyze trends, administer the
            website, and gather demographic information for aggregate use. I may
            also use cookies and tracking tools to improve your experience on my
            website.
          </p>
          <h3 className={title}>4. Data Security</h3>
          <p className={desc}>
            I use industry-standard security measures to protect your personal
            information from unauthorized access, misuse, or disclosure.
          </p>
          <h3 className={title}>5. Third-Party Disclosure</h3>
          <p className={desc}>
            I do not sell, trade, or otherwise transfer your personal
            information to third parties for marketing purposes without your
            consent.
          </p>
          <h3 className={title}>6. Your Choices</h3>
          <p className={desc}>
            a. You can opt out of receiving promotional emails from us by using
            the unsubscribe link within each email.{" "}
          </p>{" "}
          <p className={desc}>
            b. You can disable cookies in your browser settings, but this may
            affect your experience on our website.
          </p>
          <h3 className={title}>7. Children&rsquo;s Privacy</h3>
          <p className={desc}>
            I do not knowingly collect personal information from children under
            13. If you are a parent or guardian and believe that your child has
            provided personal information to us, please contact us so that we
            can delete the child&rsquo;s information.{" "}
          </p>
          <h3 className={title}>8. Changes to this Privacy Policy</h3>
          <p className={desc}>
            I may update this Privacy Policy from time to time. I will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h3 className={title}>9. Contact Us</h3>
          <p className={desc}>
            If you have any questions, concerns, or requests regarding your
            personal information or this Privacy Policy, please contact me at{" "}
            <Link
              className="text-indigo-500 underline font-semibold"
              href="mailto:umarbashir601@gmail.com"
            >
              umarbashir601@gmail.com
            </Link>
            .
          </p>
          <p className={desc}>
            By using my services and visiting my website, you consent to the
            terms of this Privacy Policy.
          </p>
          <p className={desc + "mt-4"}>
            <strong>*Last Updated: February 07, 2024</strong>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
