import { FacebookIcon, GithubIcon, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingHeroSection = () => {
  return (
    <div className="relative w-full h-[calc(100vh-100px)]">
      <div className="w-full h-full grid grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-6xl text-gray-200 font-bold">
            Hi, I&#39;m Umar Bashir &ndash; Full Stack Developer
          </h1>
          <p className="text-gray-50 leading-normal mt-6 lg:text-lg">
            Based in Jammu and Kashmir, India with 3 years of experience in
            JavaScript, building practical solutions for web and software.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button className="bg-indigo-600 text-white py-3 px-6 rounded shadow font-medium text-sm hover:bg-indigo-700 transition duration-300 ease-in-out">
              My Work
            </button>
            <button className="bg-gray-300 py-3 px-6 rounded shadow font-medium text-sm">
              Download Resume
            </button>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Link
              className="w-10 h-10 p-1 rounded border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:-translate-y-1"
              href="https://www.github.com"
            >
              <GithubIcon className="w-6 h-6 text-gray-300 group-hover:text-gray-800 " />
            </Link>
            <Link
              className="w-10 h-10 p-1 rounded border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:-translate-y-1"
              href="https://www.github.com"
            >
              <FacebookIcon className="w-6 h-6 text-gray-300 group-hover:text-gray-800" />
            </Link>
            <Link
              className="w-10 h-10 p-1 rounded border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:-translate-y-1"
              href="https://www.github.com"
            >
              <Instagram className="w-6 h-6 text-gray-300 group-hover:text-gray-800" />
            </Link>
            <Link
              className="w-10 h-10 p-1 rounded border border-gray-300 flex items-center justify-center group hover:bg-gray-300  transition duration-300 ease-in-out hover:-translate-y-1"
              href="https://www.github.com"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-gray-800" />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="relative w-[400px] h-[450px] rounded-xl border overflow-hidden border-gray-800">
            <Image
              src="/profile_image.jpg"
              alt="Umar Bashir Image"
              fill
              className="object-cover object-center ml-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="border w-6 h-10  rounded-full relative after:content-[''] after:w-1 after:h-2 after:rounded-full after:absolute after:bottom-2 after:left-2.5 after:-translate-x-1/2 after:bg-white after:animate-bounce"></div>
      </div>
    </div>
  );
};

export default LandingHeroSection;
