import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionTitle from "../SectionTitle";

const AboutSection = () => {
  return (
    <section className="my-10 md:my-32">
      <div className="container mx-auto px-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:mx-28 items-center">
          <article className="content">
            {/* <p className="bg-secondary-color text-white px-3 py-1 text-xs rounded-2xl inline-flex">
              About Us
            </p> */}
            <SectionTitle
              subtitle="About Me"
              title="Know About Me"
              isCentered={false}
            />
            <p className="mt-6 leading-loose font-light">
              I am Umar Bashir, a dedicated full-time web developer and SEO
              expert from India. My passion is in creating high quality,
              responsive websites that help businesses thrive online. With
              extensive experience in web design, development, and SEO, I
              transform ideas into engaging digital experiences.
            </p>
            <ul className="leading-loose font-light list-disc ml-6 mt-2">
              <li>
                <strong>Experienced Professional:</strong> Years of expertise in
                web development and SEO.
              </li>
              <li>
                <strong>Customer-centric:</strong> Personalized solutions
                tailored to the specific needs of each customer.
              </li>
              <li>
                <strong>Quality Commitment:</strong> Providing top-notch,
                user-friendly websites.
              </li>
              <li>
                <strong>Support Partners:</strong> Offering ongoing support and
                maintenance.
              </li>
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-flex px-6 py-2 bg-dark-primary-color text-white rounded-md shadow-md hover:bg-dark-primary-color duration-200 ease-in-out"
            >
              Read more
            </Link>
          </article>
          <div className="bg-transparent border-[20px] w-96 h-96 m-auto lg:ml-auto border-black relative">
            <div className="img_container w-96 h-96 overflow-hidden absolute -left-16 top-6">
              <Image
                src="/images/about.jpg"
                alt="Team Discuss about Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
