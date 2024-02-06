import { CONTACT_CARD } from "../../utils/siteData";
import Link from "next/link";
import React from "react";

const ContactCardGrid = () => {
  return (
    <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-12 gap-y-16 ">
      {CONTACT_CARD.map(({ icon, title, options }, index) => {
        return (
          <article
            key={index}
            className="relative group cursor-pointer py-[50px] px-[40px] rounded-xl  duration duration-300 ease-in-out flex flex-col gap-4 bg-[#fff] border"
          >
            <div className="absolute -top-[40px] left-6 border-2  rounded-full p-4 bg-white group-hover:bg-secondary-color group-hover:border-secondary-color duration-200">
              {icon}
            </div>
            <h3 className="text-dark-color text-2xl font-medium ">{title}</h3>
            {options.map(({ path, label }, index) => {
              return (
                <Link
                  href={path}
                  target="_blank"
                  key={index}
                  className="text-light-color text-lg hover:text-secondary-color"
                >
                  {label}
                </Link>
              );
            })}
          </article>
        );
      })}
    </div>
  );
};

export default ContactCardGrid;
