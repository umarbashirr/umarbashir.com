import { Metadata } from "next";
import { Container, NewSection, PageHeroBanner } from "../../../components";
import { Banner, WhyUsSection } from "../../../components/HomeComponents";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Cool Tech Design  ",
  alternates: {
    canonical: `${process.env.APP_URL}/about-us`,
  },
};

/// Data passed could be something like:

const breadcrumb = [
  { url: `${process.env.APP_URL}`, name: "Home" },
  { url: `${process.env.APP_URL}/about-us`, name: "About Us" },
];

const AboutPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="about us" bc={breadcrumb} />
      <div id="about_section" className="mb-10">
        <Container>
          <div className="grid grid-cols-1 gap-12">
            {/* Right Box */}
            <article className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1fr] gap-10">
              <h2 className="text-5xl font-semibold text-dark-color leading-snug">
                Who We Are?
              </h2>
              <p className="text-lg text-dark-color leading-loose ">
                Cool Tech Design is a digital agency that specializes in
                offering a wide array of solutions aimed at improving businesses
                online presence. Our range of services encompasses website
                design and development, search engine optimization, social media
                marketing, and Custom CMS Development. With an experienced team
                consisting of designers, developers, and digital marketer.
              </p>
              <p className="text-lg text-dark-color leading-loose ">
                Our goal at Cool Tech Design is to assist businesses in crafting
                and implementing a comprehensive digital strategy that enhances
                visibility and drives growth. By closely collaborating with our
                clients to understand their objectives, we are able to tailor
                our services specifically to cater for their unique needs. We
                take great pride in delivering innovative and effective
                solutions that enable our clients to differentiate themselves
                within the competitive landscape of the online marketplace.
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
                Technologies We Used
              </h2>
              <p className="text-lg text-dark-color leading-loose mt-4">
                At Cool Tech Design, we leverage cutting-edge technologies to
                provide top-notch websites and web-based solutions. Our
                expertise lies in front-end development using HTML, CSS, and
                JavaScript to create captivating user interfaces. To ensure
                dynamic functionality, we employ frameworks such as React and
                Angular. For back-end development needs, our team is well-versed
                in utilizing Node.js and PHP - robust languages that deliver
                high-performance solutions. Database management is handled
                efficiently through MySQL integration. We also excel at
                implementing various Content Management Systems like WordPress,
                Shopify, Magento among others. As technology continuously
                evolves, so do we! To guarantee optimal outcomes for our clients
                projects; staying current with the latest trends and
                advancements remains a priority. re that our clients receive the
                best possible results.
              </p>
            </article>
          </div>
        </Container>
      </NewSection>
    </React.Fragment>
  );
};

export default AboutPage;
