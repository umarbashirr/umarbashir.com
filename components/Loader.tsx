import Image from "next/image";
import React from "react";

const Loader = ({ dark }: { dark: boolean }) => {
  return (
    <div
      className={`fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ${
        dark ? "bg-gradient-to-r from-[#00000080] to-[#00000080]" : "bg-white"
      } w-full h-screen flex z-[20000]`}
    >
      <div className="relative h-48 w-48 m-auto">
        <Image src="/gif/loader.svg" alt="loader" fill />
      </div>
    </div>
  );
};

export default Loader;
