import React from "react";

const SectionTitle = (props: { title: any; isCentered: any }) => {
  const title = props.title;
  const titleArr = title.split(" ");
  const titleFirstWord = titleArr[0];
  const titleRestWord = titleArr.slice(1, titleArr.length).join(" ");
  return (
    <h2
      className={`font-semibold text-4xl md:text-6xl uppercase leading-snug text-dark-color ${
        props.isCentered ? "text-center" : "text-start"
      }`}
    >
      {titleFirstWord}{" "}
      <span className="text-secondary-color">{titleRestWord}</span>
    </h2>
  );
};

export default SectionTitle;
