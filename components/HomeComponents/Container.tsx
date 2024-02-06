import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-5  w-full">{children}</div>;
};

export default Container;
