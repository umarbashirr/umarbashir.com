import { Metadata } from "next";
import { Container, NewSection, PageHeroBanner } from "../../../components";
import { Banner, WhyUsSection } from "../../../components/HomeComponents";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About Me | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}/about`,
  },
};

/// Data passed could be something like:

const breadcrumb = [
  { url: `${process.env.APP_URL}`, name: "Home" },
  { url: `${process.env.APP_URL}/about`, name: "About" },
];

const AboutPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="about me" bc={breadcrumb} />
      <div id="about_section" className="mb-10">
        <Container>
          <div className="grid grid-cols-1 gap-12">
            {/* Right Box */}
            <article className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] gap-10">
              <h2 className="text-5xl font-semibold text-dark-color leading-snug">
                Who I am?
              </h2>
              <p className="text-lg text-dark-color leading-loose ">
                My name is Umar Bashir and I am a professional software
                developer with over 03 years of experience. I have a passion for
                creating innovative and user-friendly websites that are both
                visually appealing and highly functional.
              </p>
              <p className="text-lg text-dark-color leading-loose ">
                I am dedicated to providing clients with the best possible
                solutions to meet their unique needs. I am committed to staying
                current with the latest trends and technologies to ensure that
                my clients receive the best possible results.
              </p>
            </article>
            {/* Left */}
            <div className="relative w-full min-h-[300px] md:min-h-[500px]">
              <Image
                src="/images/about.jpg"
                alt="Team Discuss about Project"
                fill
                className="object-cover rounded-lg shadow-sm "
              />
            </div>
          </div>
        </Container>
      </div>
      {/* New Section */}
      {/* Importing Why Choose Us Section From HomePage Components*/}
      <WhyUsSection />
      <Banner />
      <NewSection isPadSection={false} id={"about_section"}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Right Box */}
            <div className="relative min-w-[300px] min-h-[300px] order-2 md:order-1">
              <Image
                src="/images/technologies.png"
                alt="Team Discuss about Project"
                fill
                className="object-contain rounded-lg shadow-sm"
              />
            </div>
            {/* Left */}
            <article className="order-1 md:order-2">
              <h2 className="text-5xl font-semibold text-dark-color leading-snug">
                Technologies I Use
              </h2>
              <p className="text-lg text-dark-color leading-loose mt-4">
                I have experience working with a wide range of technologies and
                tools to create innovative and user-friendly websites. Some of
                the technologies I use include:
              </p>
              <ul className="text-lg text-dark-color leading-loose mt-4">
                <li>
                  <strong>Front-end: </strong>HTML, CSS, SCSS, JavaScript,
                  React, Angular, Angular Material, Tailwind CSS, and Bootstrap
                </li>
                <li>
                  <strong>Back-end: </strong>Node.js, Express, and MongoDB
                </li>
                <li>
                  <strong>Database: </strong> MongoDB
                </li>
                <li>
                  <strong>Design Tools: </strong> Figma
                </li>
                <li>
                  <strong>Other: </strong>Git, GitHub, Netlify, Vercel, Heroku,
                  and Digital Ocean.
                </li>
              </ul>
            </article>
          </div>
        </Container>
      </NewSection>
    </React.Fragment>
  );
};

export default AboutPage;
