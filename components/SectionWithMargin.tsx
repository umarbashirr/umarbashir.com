import React from "react";

const SectionWithMargin = ({ children }) => {
  return (
    <section className="mt-12 mb-10 md:mt-32 md:mb-32 relative">
      {children}
    </section>
  );
};

export default SectionWithMargin;
