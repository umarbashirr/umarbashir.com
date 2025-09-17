import Link from "next/link";
import { LucideCodeSquare } from "lucide-react";
import React from "react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <LucideCodeSquare className="w-6 h-6 mr-2" />
      <span className="font-semibold whitespace-nowrap">
        Umar Bashir Rather
      </span>
    </Link>
  );
}
