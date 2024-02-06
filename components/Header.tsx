"use client";

import { NAV_MENU } from "../utils/siteData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    function checkScroll() {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", checkScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []); // An empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <header
        className={`h-20 w-full flex justify-start items-center  border-0 fixed -top-1 z-50 ${
          isScrolled && "bg-white text-gray-800"
        }`}
      >
        <div className="container mx-auto px-5  flex justify-start items-center">
          <Link
            href="/"
            className="flex items-center justify-start gap-2"
            aria-labelledby="Umar Bashir Portfolio logo"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/images/Logo.svg"
                alt="Umar Bashir Portfolio Logo"
                fill
              />
            </div>
          </Link>
          <nav className="flex-grow justify-end hidden md:flex space-x-4 items-center">
            {NAV_MENU.map(({ label, path }, index) => {
              return (
                <Link
                  className={`capitalize hover:text-dark-primary-color duration-300 ease-in-out font-medium ${
                    pathName === path
                      ? "text-dark-primary-color"
                      : pathName === "/"
                      ? "text-gray-800"
                      : `text-gray-800 ${isScrolled && "text-gray-800"}`
                  }`}
                  key={index}
                  href={path}
                  scroll={true}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <button
            className="ml-auto text-3xl md:hidden"
            onClick={() => setIsOpen(true)}
            aria-labelledby="Sidebar Toggle"
          >
            <CgMenuRight />
          </button>
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
