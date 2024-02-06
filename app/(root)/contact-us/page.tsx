import React from "react";
import Image from "next/image";
import { PageHeroBanner } from "../../../components";
import ContactCardGrid from "../../../components/ContactPageComponents/ContactCardGrid";
import { Metadata } from "next";
import ContactForm from "./components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Cool Tech Design",
  alternates: {
    canonical: `${process.env.APP_URL}/contact-us`,
  },
};

const breadcrumb = [
  { url: `${process.env.APP_URL}`, name: "Home" },
  { url: `${process.env.APP_URL}/contact-us`, name: "Contact Us" },
];

const ContactPage = () => {
  return (
    <>
      <React.Fragment>
        <PageHeroBanner title="Contact Us" bc={breadcrumb} />
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
                  Start Your Project With Us.
                </p>
                <h3 className="text-dark-color font-semibold text-7xl mt-4">
                  Let’s Talk
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
