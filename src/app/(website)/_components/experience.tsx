import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
// import Image from "next/image";
//
// import {skills} from "@/utils/home-content";

export const Experience = () => {
  return (
    <div className="pb-14 lg:pb-28">
      <SectionTitle
        title="Experience"
        tagline="My Professional Experience Journey"
      />
      <div className="grid grid-cols-1 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Private Fleet Services</CardTitle>
            <CardDescription>
              Full Stack Developer | 1.5 Years | Mar 2024 - Present
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h4 className="font-semibold  mb-2">Responsibilities:</h4>
              <ul className="list-disc list-inside  space-y-2">
                <li>
                  Engineered and maintained a multilingual, responsive website
                  for Private Fleet Services, delivering seamless booking and
                  inquiry experiences for private jet, medical, cargo, and
                  commercial charters.
                </li>
                <li>
                  Developed and integrated a secure, scalable backend and admin
                  panel for content and service management, leveraging Node.js,
                  Express.js, and Strapi CMS.
                </li>
                <li>
                  Implemented features for real-time service requests, dynamic
                  content management, and multi-role access for staff and
                  administrators.
                </li>
                <li>
                  Collaborated closely with aviation experts to ensure
                  regulatory compliance, safety, and a premium digital
                  experience for high-profile clients.
                </li>
                <li>
                  Managed cloud deployments, CI/CD, and version control using
                  Digital Ocean and GitHub.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "NextIntl",
                  "PostgreSQL",
                  "Node.js",
                  "Express.js",
                  "Strapi CMS",
                  "GitHub",
                  "Digital Ocean",
                ].map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bloom Hotel Group</CardTitle>
            <CardDescription>
              Software Developer | 2.5 Years | Sep 2021 - Mar 2024
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h4 className="font-semibold  mb-2">Responsibilities:</h4>
              <ul className="list-disc list-inside  space-y-2">
                <li>
                  Developed a proof of concept for an internal app using ReactJS
                  and WebSocket.
                </li>
                <li>
                  Built backend services with Node.js, Express.js and TypeORM.
                </li>
                <li>Utilized TypeORM for efficient database interactions</li>
                <li>Maintained version control using GitHub</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Angular",
                  "Node.js",
                  "Express.js",
                  "TypeScript",
                  "AWS",
                  "GitHub",
                  "TypeORM",
                  "Angular Material",
                ].map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
