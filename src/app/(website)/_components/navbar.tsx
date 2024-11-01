"use client";

import {MenuIcon, XIcon} from "lucide-react";
import Link from "next/link";
import React, {useEffect, useLayoutEffect} from "react";
import {Logo} from "@/app/(website)/_components/logo";
import {Navigation} from "@/app/(website)/_components/navigation";
import {routes} from "@/contants/routes";
import {cn} from "@/utils/cn";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = React.useState(false);
    const pathname = usePathname();
    const currentPath = (path: string) => {
        return path === pathname;
    };

    useLayoutEffect(() => {
        const originalOverflow = window.document.body.style.overflow;
        window.document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';

        return () => {
            window.document.body.style.overflow = originalOverflow;
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        if(isSidebarOpen) {
            setSidebarOpen(false);
        }
    }, [pathname])

    return (
        <>
            <div className=" sticky top-8 left-0 w-full h-full z-[99999]">
                <div>
                    <header
                        className="flex items-center justify-between border border-gray-600 rounded-md p-2 mt-8 backdrop-blur-lg">
                        <Logo/>
                        <Navigation/>
                        <div className="flex items-center justify-end gap-4">
                            <button  aria-label="Open navigation menu" role="button" className="block md:hidden" onClick={() => setSidebarOpen(true)}>
                                <MenuIcon className="w-7 h-7 text-gray-200"/>
                            </button>
                            <Link href="mailto:mail.umarbashir@gmail.com" target="_blank"
                                  className="bg-gray-50 py-1.5 px-3 text-sm font-medium rounded shadow">
                                Email Now
                            </Link>
                        </div>
                    </header>
                </div>
            </div>
            <aside
                className={cn(
                    "z-[99999999] fixed top-0 left-0 w-full h-full backdrop-blur-2xl transition-transform duration-300 ease-in-out transform",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}>
                <div className="w-full h-full p-8 flex flex-col">
                    <div className="flex items-center justify-between border border-gray-600 rounded-md p-2">
                        <Logo/>
                        <button onClick={() => setSidebarOpen(false)}  aria-label="Close navigation menu">
                            <XIcon className="w-6 h-6 text-white "/>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-6 mt-8 flex-1">
                        {routes.map((route, index) => {
                            return (
                                <Link
                                    href={route.href}
                                    key={index}
                                    className={cn("font-medium text-sm text-gray-50", currentPath(route.href) && "underline underline-offset-[6px]")}
                                >
                                    {route.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <button className="bg-gray-300 rounded-md py-2 px-4 w-full font-medium">
                        Email Me Now
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
