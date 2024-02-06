import React from "react";
import { OurServices as services } from "../../../../utils/siteData";

const ServicesBlock = () => {
  return (
    <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {services.cardsArr.map(({ icon, title, desc }, index) => {
        return (
          <article
            key={index}
            className="grad_card group cursor-pointer py-[60px] px-[45px] rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 duration duration-300 ease-in-out flex flex-col gap-4 bg-[#f6f6f6]"
          >
            {icon}
            <h3 className="text-dark-color text-2xl font-medium group-hover:text-white">
              {title}
            </h3>
            <p className="text-light-color text-lg group-hover:text-white">
              {desc}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default ServicesBlock;
