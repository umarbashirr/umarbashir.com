import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialLinks } from "@/app/(website)/_components/social-links";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Umar Bashir - Full Stack Developer",
  description:
    "Umar Bashir is a developer from Jammu and Kashmir with skills in JavaScript, React, and Node.js.",
  authors: [{ name: "Umar Bashir" }],
  keywords: [
    "About Umar Bashir",
    "Full Stack Developer",
    "JavaScript",
    "React Developer",
    "Node.js",
    "Developer in Jammu and Kashmir",
    "Umar Bashir",
    "Omer Bashir",
    "umer bashir",
  ],
  openGraph: {
    title: "About Umar Bashir - Full Stack Developer",
    description: "Information about Umar Bashir’s background and experience.",
    type: "website",
    locale: "en_US",
    url: "https://www.umarbashir.com/about",
    siteName: "Umar Bashir Portfolio",
    images: [
      {
        url: "https://www.umarbashir.com/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "About Umar Bashir - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Umar Bashir - Full Stack Developer",
    description: "Information about Umar Bashir’s background and experience.",
    images: ["https://www.umarbashir.com/og-image.jpeg"],
  },
  alternates: {
    canonical: "https://www.umarbashir.com/about",
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

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative w-full h-full py-20 lg:py-40">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_500px] gap-10 lg:gap-20 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              About Umar Bashir
            </h1>
            <p className="leading-loose lg:leading-loose mt-6 lg:text-lg">
              I&#39;m a full-stack developer from Jammu and Kashmir, India,
              focused on building practical, efficient web solutions. With over
              three years working in the JavaScript ecosystem, I develop
              reliable and scalable web applications using technologies like
              React, Next.js, Node.js, and TypeScript. My journey in software
              development started with a curiosity to solve real-world problems
              through technology.
            </p>
            <div className="flex flex-col md:flex md:flex-row md:items-center gap-4 mt-6">
              <Button asChild>
                <Link href="/my-work">My Work</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/umar_bashir_rather_resume.pdf" download>
                  Download Resume
                </Link>
              </Button>
            </div>
            <SocialLinks />
          </div>
          <div className="flex items-center justify-end">
            <div className="relative w-full h-[300px] md:w-[400px] md:h-[500px] rounded-xl border overflow-hidden border-gray-800">
              <Image
                src="/profile_image.jpg"
                alt="Umar Bashir Image"
                fill
                className="object-cover object-center ml-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Philosophy */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Professional Philosophy</h2>
        <div className="space-y-4 text-lg leading-loose">
          <p>
            I believe in writing clean, maintainable code that solves real-world
            problems efficiently. My approach combines technical expertise with
            creative problem-solving.
          </p>
          <p>
            Continuous learning is at the core of my professional growth.
            I&#39;m always exploring new technologies and methodologies to
            enhance my skill set and deliver cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Skills Breakdown */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Skills Breakdown</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Frontend Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "TailwindCSS",
                "JavaScript",
                "TypeScript",
                "React JS",
                "NextJS",
                "Angular",
                "Angular Material",
                "Shadcn",
                "Bootstrap",
              ].map((skill) => (
                <Badge key={skill} className=" px-3 py-1 rounded-full text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Backend Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "NodeJS",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "TypeORM",
                "AWS",
                "Mongoose",
                "Prisma",
                "Digital Ocean",
                "Heroku",
                "Vercel",
              ].map((skill) => (
                <Badge key={skill} className=" px-3 py-1 rounded-full text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Beyond Code</h2>
        <p className="text-lg leading-loose">
          When I&#39;m not coding, you&#39;ll find me exploring new
          technologies, reading tech blogs, or working on personal side
          projects. I&#39;m passionate about continuous learning and finding
          innovative solutions to challenging problems.
        </p>
      </section>
    </div>
  );
}
