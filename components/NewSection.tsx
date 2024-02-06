import React from "react";

const NewSection = (props: {
  isPadSection: any;
  id: string;
  children:
    | string
    | number
    | boolean
    | React.ReactFragment
    | React.ReactPortal
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => {
  return (
    <section
      className={`relative ${
        props.isPadSection ? "py-10 md:py-20" : "my-10 md:my-20"
      } `}
      id={props.id}
    >
      {props.children}
    </section>
  );
};

export default NewSection;
