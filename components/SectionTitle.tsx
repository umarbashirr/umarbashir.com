import React from "react";

const SectionTitle = (props: {
  title: any;
  isCentered: any;
  subtitle?: string;
}) => {
  const title = props.title;
  return (
    <>
      <h2
        className={`text-dark-primary-color text-sm uppercase mb-2 font-semibold ${
          props.isCentered ? "text-center" : "text-start"
        }`}
      >
        {props?.subtitle}
      </h2>
      <h3
        className={`font-bold text-4xl md:text-5xl uppercase leading-snug text-dark-color ${
          props.isCentered ? "text-center" : "text-start"
        }`}
      >
        {title}
      </h3>
    </>
  );
};

export default SectionTitle;
