import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="hero bg-[#fafafa] lg:h-screen w-full pt-20"
      id="heroSection"
    >
      <div className="container  mx-auto px-5 h-full w-full grid lg:grid-cols-2 items-center">
        <div className="py-20">
          <h1 className="uppercase text-[10px] px-4 py-1 bg-dark-primary-color inline-flex text-white rounded-xl mb-4">
            Cool Tech Design
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Trusted{" "}
            <span className="text-dark-primary-color">Website Development</span>{" "}
            Agency
          </h2>
          <p className="text-base md:text-xl w-[80%] leading-9">
            Our company is dedicated to providing a diverse selection of website
            design and web development solutions in India.
          </p>
          <div className="flex items-center justify-start gap-4">
            <Link
              href="/our-services"
              className="inline-flex py-2 px-4 md:py-4 md:px-10 rounded-lg md:rounded-xl shadow-md bg-dark-primary-color text-white hover:scale-110 duration-200 ease-linear border-2 border-darkbg-dark-primary-color mt-8 md:mt-[50px]"
            >
              Our Services
            </Link>
            <Link
              href="/our-portfolio"
              className="inline-flex py-2 px-8 md:py-4 md:px-10 rounded-lg md:rounded-xl shadow-md bg-dark-primary-color text-white hover:scale-110 duration-200 ease-linear border-2 border-darkbg-dark-primary-color mt-8 md:mt-[50px]"
            >
              Our Portfolio
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          <object
            data="/animated-svg/content-structure-animate.svg"
            aria-label="An Anmiated svg about html page"
          ></object>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
