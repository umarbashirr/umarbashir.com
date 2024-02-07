import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";
import ServicesBlock from "./components/services-block";

export const metadata: Metadata = {
  title: "Services | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}/services`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.APP_URL}/services`,
    title: "Services | Umar Bashir Portfolio | Software Developer",
    description:
      "I offer a wide range of services including web development, web design, and digital marketing. I specialize in building web applications and websites using modern web tools & technologies like ReactJS, NextJS, and Angular. I also offer digital marketing services to help businesses grow their online presence and reach more customers.",
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
  { url: `${process.env.APP_URL}/services`, name: "Services" },
];

const ServicesPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="Services" bc={breadcrumb} />
      <section className="pb-10 md:pb-32">
        <div className="container px-5 mx-auto  h-full">
          <ServicesBlock />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ServicesPage;
