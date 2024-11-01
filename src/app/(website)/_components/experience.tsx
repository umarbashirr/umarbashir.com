import React from "react";
// import Image from "next/image";
//
// import {skills} from "@/utils/home-content";

export const Experience = () => {
    return (
        <div className="pb-14 lg:pb-28">
            <div className="flex items-end justify-between gap-4 mb-10">
                <div>
                    <h2 className="text-4xl font-bold text-gray-300">
                        Experience
                    </h2>
                    <p className="mt-4 text-gray-300 text-sm">
                        Professional Journey in Software Development
                    </p>
                </div>
            </div>

            <div className="bg-gray-900 rounded p-4 transition duration-300 ease-in-out hover:bg-opacity-90">
                <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-300">Bloom Hotel Group</h3>
                        <p className="text-gray-300">Software Developer</p>
                    </div>
                    <div className="text-left mt-2 md:mt-0 md:text-right">
                        <span className="text-gray-300">September 2021 - March 2024</span>
                        <p className="text-sm text-gray-300">2.5 Years</p>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="font-semibold text-gray-300 mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Developed a proof of concept for an internal app using ReactJS and WebSocket.</li>
                        <li>Built backend services with Node.js, Express.js and TypeORM.</li>
                        <li>Utilized TypeORM for efficient database interactions</li>
                        <li>Maintained version control using GitHub</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Angular', 'Node.js', 'Express.js', 'TypeScript', 'AWS', 'GitHub', 'TypeORM', 'Angular Material'].map((tech, index) => (
                            <span
                                key={index}
                                className="bg-gray-300  text-sm px-2 py-1 rounded"
                            >
          {tech}
        </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}