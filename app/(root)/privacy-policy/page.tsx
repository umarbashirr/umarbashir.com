import { Metadata } from "next";
import React from "react";
import { PageHeroBanner } from "../../../components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Cool Tech Design  ",
  alternates: {
    canonical: `${process.env.APP_URL}/privacy-policy`,
  },
};

/// Data passed could be something like:

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
            Cool Tech Design - Privacy Policy
          </h2>
          <h3 className={title}>1. Introduction</h3>
          <p className={desc}>
            Cool Tech Design ("we," "us," or "our") is committed to protecting
            the privacy and security of your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data when
            you engage with our services and visit our website.
          </p>
          <h3 className={title}>2. Information We Collect</h3>
          <p className={desc}>
            a. <strong>Personal Information:</strong> We may collect personal
            information such as your name, email address, phone number, and
            company information when you engage with our services or contact us.
          </p>
          <p className={desc}>
            b. <strong>Website Usage Information:</strong> We collect
            information about your interactions with our website, including your
            IP address, browser type, operating system, and browsing activities.
            We may use cookies and similar technologies for this purpose.
          </p>
          <h3 className={title}>3. Use of Collected Information</h3>
          <p className={desc}>
            a. We use your personal information to provide and improve our
            services, respond to your inquiries, and communicate with you about
            project updates and relevant information.
          </p>{" "}
          <p className={desc}>
            b. We use website usage information to analyze trends, administer
            the website, and gather demographic information for aggregate use.
          </p>
          <h3 className={title}>4. Data Security</h3>
          <p className={desc}>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no data transmission over the internet is
            entirely secure, and we cannot guarantee the security of your
            information.
          </p>
          <h3 className={title}>5. Third-Party Disclosure</h3>
          <p className={desc}>
            a. We may share your personal information with trusted third parties
            who assist us in providing our services, such as hosting providers,
            payment processors, and marketing platforms.
          </p>
          <p className={desc}>
            {" "}
            b. We do not sell, trade, or otherwise transfer your personal
            information to third parties for marketing purposes without your
            consent.
          </p>
          <h3 className={title}>6. Your Choices</h3>
          <p className={desc}>
            a. You have the right to access, correct, or delete your personal
            information held by us. You may also withdraw your consent for data
            processing at any time.
          </p>{" "}
          <p className={desc}>
            b. You can control cookies and tracking tools through your browser
            settings. However, disabling cookies may affect your experience on
            our website.
          </p>
          <h3 className={title}>7. Children's Privacy</h3>
          <p className={desc}>
            Our services are not intended for individuals under the age of 13.
            We do not knowingly collect personal information from children. If
            you believe that we may have collected information from a child,
            please contact us.
          </p>
          <h3 className={title}>8. Changes to this Privacy Policy</h3>
          <p className={desc}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. The revised policy
            will be posted on our website with the effective date.
          </p>
          <h3 className={title}>9. Contact Us</h3>
          <p className={desc}>
            If you have any questions, concerns, or requests regarding your
            personal information or this Privacy Policy, please contact us at{" "}
            <Link
              className="text-indigo-500 underline font-semibold"
              href="mailto:info.cooltechdesign@gmail.com"
            >
              info.cooltechdesign@gmail.com
            </Link>
            .
          </p>
          <p className={desc}>
            By using our services and visiting our website, you consent to the
            terms of this Privacy Policy.
          </p>
          <p className={desc + "mt-4"}>
            <strong>*Last Updated: August 20, 2023 16:00</strong>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
