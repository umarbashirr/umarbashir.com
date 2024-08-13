import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="mt-20 sm:mt-0 py-20 lg:h-[500px] flex flex-col items-center justify-center gap-y-6"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('/images/coding-laptop.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-3xl md:text-5xl lg:text-7xl max-w-[70%] font-extrabold leading-normal md:leading-relaxed mx-auto lg:leading-[90px] text-center text-white">
        Have a project in mind? Let&rsquo;s talk about it.
      </h2>
      <Link
        href="/contact"
        className="bg-dark-primary-color border-2 border-transparent hover:bg-transparent hover:border-dark-primary-color hover:text-dark-primary-color px-8 py-4 md:px-16 text-white font-semibold rounded-md shadow-md inline-flex duration-200 ease-in-out"
        aria-labelledby="Get in touch button"
      >
        Get in touch
      </Link>
    </div>
  );
};

export default Banner;
