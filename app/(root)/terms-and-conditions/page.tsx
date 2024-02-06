import { Metadata } from "next";
import React from "react";
import { PageHeroBanner } from "../../../components";

export const metadata: Metadata = {
  title: "Terms and Conditions | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}/terms-and-conditions`,
  },
};

/// Data passed could be something like:

const breadcrumb = [
  { url: `${process.env.APP_URL}`, name: "Home" },
  {
    url: `${process.env.APP_URL}/terms-and-conditions`,
    name: "Terms and Conditions",
  },
];

const title = "text-2xl font-semibold mt-5 mb-3";
const desc = "text-lg text-[#444] leading-loose mb-2";

const TermsAndConditions = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="terms and conditions" bc={breadcrumb} />
      <div id="terms_section" className="mb-10 lg:mb-20 container mx-auto px-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Umar Bashir Portfolio - Terms and Conditions
          </h2>
          <h3 className={title}>1. Acceptance of Terms</h3>
          <p className={desc}>
            By engaging in any business relationship with Umar Bashir Portfolio,
            including but not limited to the use of our services, you
            acknowledge that you have read, understood, and agreed to abide by
            these Terms and Conditions outlined below. These terms constitute a
            legally binding agreement between you (the &ldquo;Client&rdquo;) and
            Cool Tech Design.
          </p>
          <h3 className={title}>2. Services Offered</h3>
          <p className={desc}>
            Umar Bashir Portfolio specializes in web development, design, and
            digital marketing services. We offer a range of solutions to enhance
            businesses&rsquo; online presence and drive growth. Our services
            include website design, development, search engine optimization
            (SEO), social media marketing, and more.
          </p>
          <h3 className={title}>3. Client Responsibilities</h3>
          <p className={desc}>
            a. The Client agrees to provide all necessary information,
            materials, and assets required for the successful execution of the
            project.
          </p>{" "}
          <p className={desc}>
            b. The Client shall grant Umar Bashir Portfolio access to any
            relevant systems, platforms, or accounts necessary for project
            implementation.
          </p>
          <p className={desc}>
            {" "}
            c. The Client is responsible for ensuring that all provided content
            (text, images, logos, etc.) adheres to copyright and legal
            regulations.
          </p>
          <h3 className={title}>4. Project Timeline</h3>
          <p className={desc}>
            a. Umar Bashir Portfolio will provide an estimated project timeline
            based on the scope of work. However, unforeseen circumstances might
            cause delays, and the timeline is subject to change.
          </p>
          <p className={desc}>
            b. The Client&rsquo;s prompt feedback and approvals are essential
            for maintaining the project&rsquo;s timeline. Delays caused by the
            Client&rsquo;s inaction may impact project deadlines.
          </p>
          <h3 className={title}>5. Payment Terms</h3>
          <p className={desc}>
            a. The Client agrees to pay Umar Bashir Portfolio the agreed-upon
            fees for the provided services as outlined in the project proposal.
          </p>
          <p className={desc}>
            {" "}
            b. Payments can be made according to the payment schedule specified
            in the proposal. Failure to make payments on time may result in
            project delays or suspension.
          </p>
          <p className={desc}>
            {" "}
            c. All quoted prices are exclusive of applicable taxes, which will
            be added to the final invoice as required by law.
          </p>
          <h3 className={title}>6. Intellectual Property</h3>
          <p className={desc}>
            a. Any pre-existing intellectual property provided by the Client for
            the project shall remain the property of the Client.
          </p>{" "}
          <p className={desc}>
            b. All new intellectual property developed by Umar Bashir Portfolio
            during the project, including but not limited to design elements,
            code, and creative materials, shall be the property of the Client
            upon full payment and project completion.
          </p>
          <h3 className={title}>7. Confidentiality</h3>
          <p className={desc}>
            Both parties agree to keep confidential information shared during
            the course of the project, including business strategies, trade
            secrets, and proprietary information.
          </p>
          <h3 className={title}>8. Termination</h3>
          <p className={desc}>
            Either party may terminate the project by providing written notice.
            The Client agrees to compensate Umar Bashir Portfolio for any work
            completed up to the termination date.
          </p>
          <h3 className={title}>9. Limitation of Liability</h3>
          <p className={desc}>
            Umar Bashir Portfolio will not be liable for any direct, indirect,
            incidental, consequential, or special damages arising out of or in
            connection with the services provided, including but not limited to
            loss of profits, data, or business opportunities.
          </p>
          <h3 className={title}>10. Governing Law</h3>
          <p className={desc}>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which Cool Tech
            Design is registered. By engaging with Umar Bashir Portfolio&rsquo;s
            services, you agree to these Terms and Conditions. These terms may
            be updated from time to time, and the most recent version will be
            posted on our website.
          </p>{" "}
          <p className={desc}>
            <strong>*Last Updated: August 07, 2024 00:46</strong>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TermsAndConditions;
