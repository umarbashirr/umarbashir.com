import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";
import ServicesBlock from "./components/services-block";

export const metadata: Metadata = {
  title: "Our Serivces | Cool Tech Design",
  alternates: {
    canonical: `${process.env.APP_URL}/our-services`,
  },
};

const breadcrumb = [
  { url: `${process.env.APP_URL}`, name: "Home" },
  { url: `${process.env.APP_URL}/our-services`, name: "Our Services" },
];

const ServicesPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="Our Services" bc={breadcrumb} />
      <section className="pb-10 md:pb-32">
        <div className="container px-5 mx-auto  h-full">
          <ServicesBlock />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ServicesPage;
