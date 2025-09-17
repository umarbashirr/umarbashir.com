import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const TrustSection = () => {
  return (
    <div className="my-14 lg:my-28">
      <div className="flex flex-col items-center justify-center mb-10 gap-4">
        <h2 className="text-3xl lg:text-4xl font-medium text-center max-w-6xl">
          I build UI-first, production-ready apps.
        </h2>
        <p className="text-muted-foreground text-center max-w-6xl">
          Authentication, payments, and scalable backends — all deployed on
          Vercel.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-5xl font-bold">5+</CardTitle>
            <CardDescription>Freelance, startups & enterprise</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-5xl font-bold">50+</CardTitle>
            <CardDescription>
              From SaaS kits to client platforms
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-5xl font-bold">3</CardTitle>
            <CardDescription>Founder & creator experience</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};
