import Link from "next/link";
import { FacebookIcon, GithubIcon, Linkedin } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const SocialLinks = () => {
  return (
    <div className="mt-8 flex items-center gap-4">
      <Button asChild size="icon" variant="outline">
        <Link
          className="w-10 h-10 p-1 rounded   flex items-center justify-center group  transition duration-300 ease-in-out hover:-translate-y-1"
          href="https://github.com/umarbashirr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Umar Bashir's GitHub profile"
        >
          <GithubIcon className="w-6 h-6  " />
        </Link>
      </Button>
      <Button asChild size="icon" variant="outline">
        <Link
          className="w-10 h-10 p-1 rounded border  flex items-center justify-center group  transition duration-300 ease-in-out hover:-translate-y-1"
          href="https://www.facebook.com/umar12393"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Umar Bashir's Facebook profile"
        >
          <FacebookIcon className="w-6 h-6 " />
        </Link>
      </Button>
      <Button asChild size="icon" variant="outline">
        <Link
          className="w-10 h-10 p-1 rounded border  flex items-center justify-center group  transition duration-300 ease-in-out hover:-translate-y-1"
          href="https://x.com/umarbashirr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Umar Bashir's X profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 "
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.5 0h-7.5L12 7.4 7.1 0H0l8.5 12.2L0 24h7.6l4.4-6.3L16.5 24h7.5l-9-12z" />
          </svg>
        </Link>
      </Button>
      <Button asChild size="icon" variant="outline">
        <Link
          className="w-10 h-10 p-1 rounded border  flex items-center justify-center group  transition duration-300 ease-in-out hover:-translate-y-1"
          href="https://www.linkedin.com/in/umarbashirr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Umar Bashir's LinkedIn profile"
        >
          <Linkedin className="w-6 h-6 " />
        </Link>
      </Button>
    </div>
  );
};
