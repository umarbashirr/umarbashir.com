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
            <SectionTitle title="Who We Are?" isCentered={undefined} />
            <p className="mt-4 text-xl leading-loose font-light">
              Cool Tech Design is an experienced web development agency that
              focuses on enhancing businesses online presence. Our team of
              experts in design, development, and digital marketing helps
              businesses develop and implement effective strategies to increase
              visibility and drive growth.
            </p>
            <Link
              href="/about-us"
              className="mt-4 inline-flex px-6 py-2 bg-dark-primary-color text-white rounded-md shadow-md hover:bg-dark-primary-color duration-200 ease-in-out"
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
