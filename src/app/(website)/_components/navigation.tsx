"use client";

import { routes } from "@/contants/routes";
import Link from "next/link";
import { cn } from "@/utils/cn";
import React from "react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  const currentPath = (path: string) => {
    return path === pathname;
  };

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {routes.map((route, index) => {
        return (
          <Link
            href={route.href}
            key={index}
            className={cn(
              "font-medium text-sm",
              currentPath(route.href) && "underline underline-offset-[6px]"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};
