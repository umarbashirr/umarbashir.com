import Link from "next/link";
import React from "react";

const CTABanner = () => {
  return (
    <section className="my-10 md:my-20">
      <div className="container px-5  mx-auto">
        <article className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] p-10 md:p-20 rounded-lg">
          <h2 className="text-2xl sm:text-3xl text-center  md:text-start md:text-5xl text-white font-semibold">
            Looking for a website for <br /> your business?
          </h2>
          <Link
            href="/contact"
            aria-labelledby="Get Quote"
            className="bg-dark-primary-color text-white py-2 px-6 md:py-4 md:px-12 text-lg rounded-md hover:bg-dark-primary-color duration-200 ease-out"
          >
            Get Quote
          </Link>
        </article>
      </div>
    </section>
  );
};

export default CTABanner;
