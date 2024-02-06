"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_MENU } from "../utils/siteData";
import { usePathname, useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathName = usePathname();
  const router = useRouter();
  function changeRoute(path: string) {
    setIsOpen(false);
    router.push(path);
  }

  return (
    <div
      className={`fixed top-0 left-0 z-50 bg-white shadow-xl h-screen duration-200 ease-linear ${
        isOpen ? "w-[300px]" : "w-0 overflow-hidden"
      } `}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center mr-5">
          <Link href="/" className="relative w-10 h-10 m-5">
            <Image src="/images/Logo.svg" alt="Cool Tech Design Logo" fill />
          </Link>
          <button
            className="text-2xl"
            onClick={() => setIsOpen(false)}
            aria-labelledby="sidebar toggler"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col gap-4 m-5 items-start">
          {NAV_MENU.map(({ label, path }, index) => {
            return (
              <button
                className={`text-xl capitalize hover:text-dark-primary-color duration-300 ease-in-out font-medium ${
                  pathName === path
                    ? "text-dark-primary-color"
                    : "text-gray-800"
                }`}
                key={index}
                onClick={() => changeRoute(path)}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
