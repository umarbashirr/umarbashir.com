import {skills} from "@/utils/home-content";
import Image from "next/image";
import React from "react";

export const TechStackGrid = () => {
    return <div className="py-28">
        <h2 className="text-4xl  mb-10 font-bold text-center text-gray-300">
            Technologies I Use
        </h2>
        <div className="grid grid-cols-6 gap-4">
            {skills.map((skill, index: number) => {
                return (
                    <div
                        key={index}
                        className="bg-gray-900 rounded p-4 flex gap-4 items-center  text-center transition duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105"
                    >
                        <div className="relative w-10 h-10">
                            <Image src={skill.img} alt={skill.title + "image"} fill/>
                        </div>
                        <p className="text-white">{skill.title}</p>
                    </div>
                );
            })}
        </div>
    </div>
}