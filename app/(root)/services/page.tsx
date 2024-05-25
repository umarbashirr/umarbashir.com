import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";
import ServicesBlock from "./components/services-block";

export const metadata: Metadata = {
  title:
    "Services | Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
  alternates: {
    canonical: `${process.env.APP_URL}/services`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.APP_URL}/services`,
    title:
      "Services | Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
    description:
      "Professional web design and development services by Umar Bashir Rather, a freelance web developer with over 5 years of experience. Specializing in custom website development, e-commerce websites, SEO services, and web app development. Based in Pahalgam, Jammu and Kashmir, India.",
    images: [
      {
        url: "https://www.umarbashir.com/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
      },
    ],
    siteName: "Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
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
