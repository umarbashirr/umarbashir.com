import { ProjectCard as ProjectCardProps } from "@/types/work";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Calendar, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface IProjectCardProps {
  work: ProjectCardProps;
}

export const ProjectCard = ({ work }: IProjectCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative w-full h-[300px] -mt-6">
        <Image src={work.image} alt={work.title + "landing page image"} fill />
        {work.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 capitalize"
        >
          {work.type}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle>{work.title} </CardTitle>
        <CardDescription>
          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{work.year}</span>
            </li>
            <li className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">{work.client}</span>
            </li>
          </ul>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {work.short_desc}
        </p>

        <div className="flex flex-wrap gap-1">
          {work.stack.slice(0, 2).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {work.stack.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{work.stack.length - 2} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex w-full gap-2 pt-0">
        <Button className="flex-1" asChild>
          <Link href={`/my-work/${work.id}`}>View Details</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link target="_blank" href={work.url}>
            Live View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
