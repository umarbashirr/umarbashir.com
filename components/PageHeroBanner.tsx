"use client";

import React from "react";
import { Breadcrumb } from "./breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageHeroBanner = (props: { title: any; bc: any[] }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[280px] md:h-[380px] pt-10 md:pt-0">
        <div className="container px-5 mx-auto  h-full flex items-center justify-between">
          <div className=" flex flex-col gap-4 justify-center h-full">
            <h1 className="text-4xl lg:text-8xl capitalize text-gray-800">
              {props.title}
            </h1>
            <Breadcrumb breadcrumbItems={props.bc} />
          </div>
          {pathname !== "/contact" && (
            <Link
              href="/contact"
              className="sm:-mt-8 bg-white py-3 px-6 sm:py-4 sm:px-12 rounded-md shadow-md text-sm sm:text-lg text-dark-color border-2 border-gray-800  hover:bg-gray-800 hover:text-white duration-300 "
              aria-labelledby="hire me now button"
            >
              Hire Me Now
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default PageHeroBanner;
