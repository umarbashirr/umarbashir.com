import React from "react";
import Image from "next/image";
import {skills} from "@/utils/home-content";

export const TechStackGrid = () => {
    return (
        <div className="py-14 lg:pb-28">
            <div className="flex items-end justify-between gap-4 mb-10">
                <div>
                    <h2 className="text-4xl font-bold text-gray-300">
                        Tech Stack
                    </h2>
                    <p className="mt-4 text-gray-300 text-sm">
                        Technologies which I have learned and mostly use in my projects
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill, index: number) => {
                    return (
                        <div
                            key={index}
                            className="bg-gray-900 rounded p-4 flex gap-4 items-center  text-center transition duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105"
                        >
                            <div className="relative w-10 h-10 shrink-0">
                                <Image src={skill.img} alt={skill.title + "image"} fill className="object-cover"/>
                            </div>
                            <p className="text-white">{skill.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}