import React, { ReactNode } from "react";
import Navbar from "@/app/(website)/_components/navbar";
import {Footer} from "@/app/(website)/_components/footer";

const WebsiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-xl mx-auto  px-6">
      <Navbar />
      <main>{children}</main>
        <Footer/>
    </div>
  );
};

export default WebsiteLayout;
