import LandingHeroSection from "@/app/(website)/_components/landing-hero-section";
import { ProjectGrid } from "@/app/(website)/_components/project-grid";
import { TechStackGrid } from "@/app/(website)/_components/tech-stack-grid";
import { Experience } from "@/app/(website)/_components/experience";
import Script from "next/script";
import { Metadata } from "next";
import { FeaturedProjects } from "@/components/homepage/featured-projects";
import { TrustSection } from "@/components/homepage/trust-section";

const jsonLdStructuredData = {
  "@context": "http://schema.org/",
  "@type": "Person",
  additionalName: "Umar Bashir Rather",
  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
    addressRegion: "Jammu and Kashmir",
    postalCode: "192401",
    streetAddress: "Charigam, Pahalgam, District Anantnag",
    email: "mail@umarbashir@gmail.com",
    telephone: "+917889737464",
  },
  jobTitle: "Full Stack Developer",
  image: `${process.env.NEXT_PUBLIC_APP_URL}/profile_image.jpg`,
};

export const metadata: Metadata = {
  title: "Umar Bashir - Full Stack Developer",
  description:
    "Umar Bashir - Full Stack Developer based in Jammu and Kashmir, India. Experienced in JavaScript, React, Node.js, and creating practical web solutions.",
  authors: [{ name: "Umar Bashir Rather" }],
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "NextJS",
    "Jammu and Kashmir",
    "Umar Bashir",
    "Omer Bashir",
    "umer bashir",
    "website developer",
    "Umar Bashir developer",
    "Umar Bashir Web Developer",
  ],
  openGraph: {
    title: "Umar Bashir - Full Stack Developer",
    description: "Professional portfolio showcasing web development expertise",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Umar Bashir Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "Umar Bashir - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umar Bashir - Full Stack Developer",
    description: "Professional portfolio showcasing web development expertise",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og-image.jpeg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}`,
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
  verification: {
    google: "EnKhxwR8NCJuTbm2nkjqYqaa9FrTui2Y-j7GxUOxPS0",
  },
};

const LandingPage = () => {
  return (
    <div>
      <Script
        id="person-structure-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdStructuredData),
        }}
      />
      <LandingHeroSection />
      <TrustSection />
      <FeaturedProjects />
      <TechStackGrid />
      <Experience />
      <ProjectGrid />
    </div>
  );
};

export default LandingPage;
