import { Header, Footer } from "@/components";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`flex flex-col min-h-screen w-full justify-start overflow-x-hidden `}
    >
      <Header />
      {/* <div className="particles">
      <div className="box bg-primary-color w-2 h-2 rounded-full fixed"></div>
      <div className="box bg-green-600 w-2 h-2 rounded-full fixed"></div>
      <div className="box bg-purple-500 w-2 h-2 rounded-full fixed"></div>
      <div className="box bg-yellow-300 w-2 h-2 rounded-full fixed"></div>
      <div className="box bg-pink-500 w-2 h-2 rounded-full fixed"></div>
    </div> */}
      <main className="flex-grow">{children}</main>
      <Footer />
      <div className="fixed bottom-6 right-6 p-2 cursor-pointer bg-dark-primary-color rounded-3xl">
        <Link
          href="https://wa.me/+917889737464?text=Hello%20there!%20Welcome%20to%20my%20portfolio.%20Please%20let%20me%20know%20how%20I%20can%20help%20you."
          target="_blank"
          className=" text-white"
        >
          <FaWhatsapp className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
};

export default layout;
