import { Metadata } from "next";
import React from "react";
import { PageHeroBanner } from "../../../components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation and Refund | Cool Tech Design  ",
  alternates: {
    canonical: `${process.env.APP_URL}/cancellation-and-refund-policy`,
  },
};

/// Data passed could be something like:

const breadcrumb = [
  { url: `${process.env.APP_URL}`, name: "Home" },
  {
    url: `${process.env.APP_URL}/cancellation-and-refund-policy`,
    name: "Cancellation and Refund",
  },
];

const title = "text-2xl font-semibold mt-5 mb-3";
const desc = "text-lg text-[#444] leading-loose mb-2";

const CancellationAndRefundPolicy = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="Cancellation and Refund Policy" bc={breadcrumb} />
      <div id="terms_section" className="mb-10 lg:mb-20 container mx-auto px-5">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Cool Tech Design - Cancellation and Refund Policy
          </h2>
          <p className={desc}>
            At Cool Tech Design, we strive to provide exceptional services and
            solutions to our clients. We understand that circumstances may
            change, and you may need to cancel or request a refund for a service
            you've engaged with us. Please review our Cancellation and Refund
            Policy below for a clear understanding of the process.
          </p>
          <h3 className={title}>1. Cancellation Policy</h3>
          <p className={desc}>
            a. <strong>Project Cancellation by Client:</strong> If you decide to
            cancel a project or service after the initial agreement has been
            made, we request that you provide written notice as soon as
            possible. The cancellation request will be evaluated based on the
            project's stage and the work completed up to that point.
          </p>
          <p className={desc}>
            b. Project Cancellation by Cool Tech Design: In the event that we
            are unable to fulfill our obligations due to unforeseen
            circumstances, we reserve the right to cancel a project or service.
            We will provide prompt notice and a full refund for any payments
            made by the client for the canceled service.
          </p>
          <h3 className={title}>2. Refund Policy</h3>
          <p className={desc}>
            a. <strong>Refund Eligibility:</strong> Refunds will be considered
            on a case-by-case basis and are generally provided in the following
            circumstances:
          </p>
          <ul className="my-4 pl-8 list-disc text-lg text-[#444] leading-loose">
            <li>
              If we are unable to deliver the agreed-upon service due to factors
              on our end.
            </li>
            <li>
              If the client cancels a project or service before significant work
              has commenced.
            </li>
          </ul>
          <p>
            b. <strong>Non-Refundable Situations:</strong> Refunds may not be
            provided in the following situations:
          </p>
          <ul className="my-4 pl-8 list-disc text-lg text-[#444] leading-loose">
            <li>
              If the client fails to provide necessary information, materials,
              or cooperation required for the project's progress.
            </li>
            <li>
              If the project is canceled by the client after a significant
              portion of work has been completed.
            </li>
            <li>
              If the client's dissatisfaction arises from changes in preferences
              or requirements after work has been completed as agreed upon.
            </li>
          </ul>
          <h3 className={title}>3. Refund Process</h3>
          <p className={desc}>
            a. <strong>Refund Request:</strong> To request a refund, the client
            should submit a written refund request explaining the reason for the
            request and providing relevant details.
          </p>{" "}
          <p className={desc}>
            b. <strong>Refund Evaluation:</strong> Each refund request will be
            carefully evaluated by our team. If the request meets the eligible
            criteria, we will process the refund within a reasonable timeframe.
          </p>
          <p className={desc}>
            {" "}
            c. <strong>Refund Method:</strong> Refunds will be issued using the
            original payment method used by the client. It may take a few
            business days for the refunded amount to reflect in the client's
            account.
          </p>
          <h3 className={title}>4. Modification of Terms</h3>
          <p className={desc}>
            Cool Tech Design reserves the right to modify or update this
            Cancellation and Refund Policy at any time without prior notice. The
            most recent version of the policy will be posted on our website.
          </p>
          <h3 className={title}>5. Contact Us:</h3>
          <p className={desc}>
            If you have questions or concerns regarding our Cancellation and
            Refund Policy, please contact us at{" "}
            <Link
              href="mailto:info.cooltechdesign@gmail.com"
              className="text-indigo-500 underline font-semibold"
            >
              info.cooltechdesign@gmail.com
            </Link>{" "}
            for clarification.
          </p>
          <p className={desc}>
            By engaging with Cool Tech Design's services, you acknowledge and
            agree to abide by the terms outlined in this Cancellation and Refund
            Policy.
          </p>
          <p className={desc}>
            <strong>*Last Updated: August 20, 2023 16:00</strong>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CancellationAndRefundPolicy;
