import { clientWork } from "@/utils/home-content";
import { ProjectCard } from "../project-card";
import { SectionTitle } from "../section-title";
import { ProjectCard as ProjectCardProps } from "@/types/work";

export const FeaturedProjects = () => {
  const featuredProjects = clientWork.filter((work) => work.isFeatured);
  return (
    <div>
      <SectionTitle
        title="Featured Projects"
        tagline="Full-stack applications built with Next.js, TypeScript, and modern tools. Each project demonstrates end-to-end development skills, from database design to user experience."
        hasLink={true}
        linkLabel="All Projects"
        linkHref="/my-work"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProjects.map((work, index) => {
          return <ProjectCard key={index} work={work as ProjectCardProps} />;
        })}
      </div>
    </div>
  );
};
