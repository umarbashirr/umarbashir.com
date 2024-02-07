import React from "react";
import Image from "next/image";
import { PageHeroBanner } from "../../../components";
import ContactCardGrid from "../../../components/ContactPageComponents/ContactCardGrid";
import { Metadata } from "next";
import ContactForm from "./components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}/contact`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.APP_URL}/contact`,
    title: "Contact | Umar Bashir Portfolio | Software Developer",
    description:
      "Get in touch with me for any queries, project discussions, or just to say hello. I am always open to new opportunities and collaborations.",
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
  { url: `${process.env.APP_URL}/contact`, name: "Contact" },
];

const ContactPage = () => {
  return (
    <>
      <React.Fragment>
        <PageHeroBanner title="Contact" bc={breadcrumb} />
        <section className=" pb-10 md:pb-20">
          <div className="container px-5 mx-auto h-full">
            <ContactCardGrid />
          </div>
        </section>
        <section className="formSection my-10 md:my-20">
          <div className="container px-5 mx-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="col">
                <p className="text-secondary-color font-semibold text-lg">
                  Have a project in mind?
                </p>
                <h3 className="text-dark-color font-semibold text-7xl mt-4">
                  Let&lsquo;s Talk About It
                </h3>
                <ContactForm />
              </div>
              <div className="col flex flex-col gap-4 text-dark-color">
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <Image
                    src="/images/contact.jpg"
                    alt="contact support team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    </>
  );
};

export default ContactPage;
