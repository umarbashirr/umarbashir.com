import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface ISectionProps {
  title: string;
  tagline: string;
  hasLink?: boolean;
  linkLabel?: string;
  linkHref?: string;
}

export const SectionTitle = ({
  title,
  tagline,
  hasLink = false,
  linkLabel,
  linkHref,
}: ISectionProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 mb-10">
      <div className="w-full">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-sm">{tagline}</p>
      </div>
      {hasLink && (
        <Button asChild variant="outline">
          <Link href={linkHref as string}>{linkLabel}</Link>
        </Button>
      )}
    </div>
  );
};
