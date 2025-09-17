import Link from "next/link";
import { clientWork } from "@/utils/home-content";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import React from "react";
import { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { ProjectCard as ProjectCardProps } from "@/types/work";

export const metadata: Metadata = {
  title: "My Work - Umar Bashir",
  description:
    "A collection of projects by Umar Bashir, showcasing web development and other work.",
  authors: [{ name: "Umar Bashir" }],
  keywords: [
    "Portfolio",
    "Web Development",
    "Projects by Umar Bashir",
    "JavaScript",
    "React",
    "Node.js",
    "Jammu and Kashmir",
  ],
  openGraph: {
    title: "My Work - Umar Bashir",
    description: "Projects by Umar Bashir, including various development work.",
    type: "website",
    locale: "en_US",
    url: "https://www.umarbashir.com/my-work",
    siteName: "Umar Bashir Portfolio",
    images: [
      {
        url: "https://www.umarbashir.com/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "My Work - Umar Bashir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Work - Umar Bashir",
    description: "Projects by Umar Bashir, including various development work.",
    images: ["https://www.umarbashir.com/og-image.jpeg"],
  },
  alternates: {
    canonical: "https://www.umarbashir.com/my-work",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const MyWorkPage = () => {
  return (
    <div className="py-12 md:py-28">
      <div className="mb-10">
        <h1 className="text-5xl text-center font-bold">My Work</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientWork.map((work, index) => {
          return <ProjectCard key={index} work={work as ProjectCardProps} />;
        })}
      </div>
    </div>
  );
};

export default MyWorkPage;
