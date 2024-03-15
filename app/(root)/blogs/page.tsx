import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";

export const metadata: Metadata = {
  title:
    "Blogs | Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
  alternates: {
    canonical: `${process.env.APP_URL}/blogs`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.APP_URL}/blogs`,
    title:
      "Blogs | Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
    description:
      " I write blogs on a wide range of topics including web design, development and digital marketing.",
    images: [
      {
        url: "https://www.umarbashir.com/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
      },
    ],
    siteName: "Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
  },
};

const breadcrumb = [
  { url: process.env.APP_URL, name: "Home" },
  { url: `${process.env.APP_URL}/blogs`, name: "Blogs" },
];

const BlogPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="My Blogs" bc={breadcrumb} />
      <section className="pb-10 md:pb-20">
        <div className="container px-5 mx-auto  h-full">
          <h2 className="text-3xl text-center">
            Oops! Currently no blogs found. Come back later...
          </h2>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogPage;
