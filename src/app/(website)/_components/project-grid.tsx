import React from "react";
import Image from "next/image";
import Link from "next/link";

import {clientWork} from "@/utils/home-content";
import {ExternalLink} from "lucide-react";

export const ProjectGrid = () => {
    return (
        <div className="pb-28">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
                <div>
                    <h2 className="text-4xl font-bold text-gray-300">
                        My Work
                    </h2>
                    <p className="mt-4 text-gray-300 text-sm">
                        Work which I have done for my clients as well as side projects.
                    </p>
                </div>
                <div>
                    <Link href="/my-work" className="border text-gray-300 rounded shadow py-2 px-4">
                        View All Projects
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {clientWork.slice(0,6).map((work, index) => {
                    return (
                        <div
                            key={index}
                            className="border border-gray-800 p-2 rounded-md"
                        >
                            <div className="relative w-full h-[300px] rounded-md overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.title + "landing page image"}
                                    fill
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between gap-4 w-full  mt-4 mb-2">
                                    <Link
                                        href={work.url}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                    >
                                        <h3 className="font-medium text-gray-100 text-xl flex-1 hover:underline transition duration-300 ease-in-out">
                                            {work.title}{" "}
                                            <ExternalLink className="w-4 h-4 ml-2 inline-flex mb-1"/>
                                        </h3>
                                    </Link>
                                    <div
                                        className="text-xs font-medium bg-gray-300 text-gray-900 rounded-full py-px px-2 capitalize shrink-0">
                                        {work.type}
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm font-thin leading-relaxed">
                                    {work.short_desc}
                                </p>
                                <div className="flex items-center justify-start gap-2 flex-wrap  mt-4 mb-2">
                                    {work.stack.map((stackName, index) => {
                                        return (
                                            <div
                                                className="border border-gray-400 rounded text-gray-300 capitalize py-px px-1 text-sm"
                                                key={index}
                                            >
                                                {stackName}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}