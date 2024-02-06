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
          <h1 className="uppercase text-base font-bold py-1 inline-flex rounded-xl mb-4">
            Hey there, I&lsquo;m
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight up">
            Umar Bashir 👋
            <span className="text-dark-primary-color leading-tight inline-block">
              Software Developer
            </span>{" "}
            from India
          </h2>
          <p className="text-base md:text-xl w-[80%] leading-9">
            I specialize in building high-quality, fully responsive, and
            user-friendly websites and web applications using modern web tools &
            technologies.
          </p>
          <div className="flex items-center justify-start gap-4">
            <Link
              href="/umar_bashir_resume.pdf"
              download={true}
              target="_blank"
              className="inline-flex py-2 px-4 md:py-4 md:px-10 rounded-lg md:rounded-xl shadow-md bg-dark-primary-color text-white hover:scale-110 duration-200 ease-linear border-2 border-darkbg-dark-primary-color mt-8 md:mt-[50px]"
            >
              My Resume
            </Link>
            <Link
              href="/my-portfolio"
              className="inline-flex py-2 px-8 md:py-4 md:px-10 rounded-lg md:rounded-xl shadow-md bg-dark-primary-color text-white hover:scale-110 duration-200 ease-linear border-2 border-darkbg-dark-primary-color mt-8 md:mt-[50px]"
            >
              My Portfolio
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
