import React from "react";
import Link from "next/link";

import { clientWork } from "@/utils/home-content";
import { ProjectCard } from "@/components/project-card";
import { ProjectCard as ProjectCardProps } from "@/types/work";

export const ProjectGrid = () => {
  return (
    <div className="pb-28">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
        <div>
          <h2 className="text-4xl font-bold text-gray-300">My Work</h2>
          <p className="mt-4 text-gray-300 text-sm">
            Work which I have done for my clients as well as side projects.
          </p>
        </div>
        <div>
          <Link
            href="/my-work"
            className="border text-gray-300 rounded shadow-sm py-2 px-4"
          >
            View All Projects
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientWork
          .slice(0, 6)
          .filter((work) => !work.isFeatured)
          .map((work, index) => {
            return <ProjectCard key={index} work={work as ProjectCardProps} />;
          })}
      </div>
    </div>
  );
};
