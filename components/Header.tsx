"use client";

import { NAV_MENU } from "../utils/siteData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "./Sidebar";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState(false);
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={twMerge(
          "h-20 w-full flex justify-start items-center z-50 duration-300 transition-all ease-in-out",
          scrollDirection === "down" ? "-top-20" : "top-0",
          isSticky
            ? "sticky left-0 bg-white text-gray-800 shadow-lg"
            : " bg-transparent"
        )}
      >
        <div className="container mx-auto px-5  flex justify-start items-center">
          <Link
            href="/"
            className="flex items-center justify-start gap-2"
            aria-labelledby="Umar Bashir Portfolio logo"
          >
            <div className="relative w-24 h-24">
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
                    pathname === path
                      ? "text-dark-primary-color"
                      : pathname === "/"
                      ? "text-gray-800"
                      : `text-gray-800 ${isSticky && "text-gray-800"}`
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
          <Link
            href="/contact"
            aria-label="Hire Me Now Button"
            className="bg-dark-primary-color hover:scale-105 duration-200 ease-linear ml-4 text-white font-semibold text-base px-4 py-2 rounded-md shadow-md"
          >
            Let&lsquo;s Talk
          </Link>
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
