import React from "react";
import Image from "next/image";
import { skills } from "@/utils/home-content";
import { SectionTitle } from "@/components/section-title";
import { Card } from "@/components/ui/card";

export const TechStackGrid = () => {
  return (
    <div className="my-14 lg:my-28">
      <SectionTitle
        title="Tech Stack"
        tagline="Technologies which I have learned and mostly use in my projects"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index: number) => {
          return (
            <Card
              key={index}
              className="rounded p-4 flex flex-row gap-4 items-center  text-center transition duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105"
            >
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src={skill.img}
                  alt={skill.title + "image"}
                  fill
                  className="object-cover"
                />
              </div>
              <p>{skill.title}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
