"use client";

import { LucideCodeSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const routes = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
    {
      label: "Projects",
      href: "/",
    },
    {
      label: "Client Work",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
  ];
  return (
    <div className=" sticky top-8 left-0 w-full h-full z-[99999]">
      <div>
        <header className="flex items-center justify-between border border-gray-600 rounded-md p-2 mt-8 backdrop-blur-lg">
          <Link href="/" className="flex items-center">
            <LucideCodeSquare className="w-6 h-6 mr-2 text-gray-50" />
            <span className="text-gray-50 font-semibold">Umar Bashir</span>
          </Link>
          <nav className="flex items-center space-x-6">
            {routes.map((route, index) => {
              return (
                <Link
                  href={route.href}
                  key={index}
                  className="font-medium text-sm text-gray-50"
                >
                  {route.label}
                </Link>
              );
            })}
          </nav>
          <div>
            <button className="bg-gray-50 py-1.5 px-3 text-sm font-medium rounded shadow">
              Email Now
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
