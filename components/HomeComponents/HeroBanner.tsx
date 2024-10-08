import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="py-20 hero bg-[#fafafa] h-full 2xl:h-screen w-full -mt-20"
      id="heroSection"
    >
      <div className="container pt-10 lg:pt-0 mx-auto px-5 h-full w-full grid lg:grid-cols-2 items-center">
        <div>
          <span className="uppercase text-base font-bold py-1 inline-flex rounded-xl mb-4">
            Hey there, I&lsquo;m
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight up">
            Umar Bashir 👋
            <span className="text-dark-primary-color leading-tight inline-block">
              Full Stack Web Developer
            </span>{" "}
            <br />
            from India
          </h1>
          <p className="text-base md:text-xl w-[80%] md:leading-9">
            I specialize in building high-quality, fully responsive, and
            user-friendly websites and web applications using modern web tools &
            technologies.
          </p>
          <div className="flex items-center justify-start gap-4">
            <Link
              href="/portfolio"
              className="inline-flex py-2 px-4 md:py-4 md:px-10 rounded-lg md:rounded-xl shadow-md bg-dark-primary-color text-white hover:scale-110 duration-200 ease-linear border-2 border-darkbg-dark-primary-color mt-8 md:mt-[50px]"
            >
              My Portfolio
            </Link>
            <Link
              href="https://wa.me/+917889737464?text=Hello%20there!%20Welcome%20to%20my%20portfolio.%20Please%20let%20me%20know%20how%20I%20can%20help%20you."
              target="_blank"
              className="inline-flex py-2 px-8 md:py-4 md:px-10 rounded-lg md:rounded-xl shadow-md bg-dark-primary-color text-white hover:scale-110 duration-200 ease-linear border-2 border-darkbg-dark-primary-color mt-8 md:mt-[50px] capitalize"
            >
              Let&lsquo;s discuss project
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
