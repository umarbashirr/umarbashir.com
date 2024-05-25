"use client";

import Image from "next/image";
import React from "react";
import { WHY_CHOOSE_US } from "../../utils/siteData";

const WhyUsSection = () => {
  return (
    <section className="my-10 md:my-32 relative ">
      <div className="absolute w-full h-full -top-[250px] -right-[850px] -z-10">
        <div className="relative w-[full] h-full">
          <Image src="/images/Ellipse1.svg" alt="Ellipse Image" fill priority />
        </div>
      </div>
      <div className="container mx-auto px-5 ">
        {/* <SectionTitle title={WHY_CHOOSE_US.title} isCentered /> */}
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-12">
          {WHY_CHOOSE_US.cardsArr.map(({ icon, title, desc }, index) => {
            return (
              <article
                key={index}
                className="grad_card group cursor-pointer py-[60px] px-[45px] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 duration duration-300 ease-in-out flex flex-col gap-4 bg-[#f6f6f6]"
              >
                <div className="h-14 w-14">{icon}</div>
                <h3 className="text-dark-color text-2xl font-medium group-hover:text-white">
                  {title}
                </h3>
                <p className="text-light-color text-base group-hover:text-white">
                  {desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
