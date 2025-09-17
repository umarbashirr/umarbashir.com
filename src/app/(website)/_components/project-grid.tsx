import React from "react";
import Link from "next/link";

import { clientWork } from "@/utils/home-content";
import { ProjectCard } from "@/components/project-card";
import { ProjectCard as ProjectCardProps } from "@/types/work";
import { SectionTitle } from "@/components/section-title";

export const ProjectGrid = () => {
  return (
    <div className="my-14 lg:my-28">
      <SectionTitle
        title="My Work"
        tagline="Work which I have done for my clients as well as side projects."
        hasLink={true}
        linkLabel="View All Projects"
        linkHref="/my-work"
      />
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
