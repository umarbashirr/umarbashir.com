import { Metadata } from "next";
import {
  AboutSection,
  Banner,
  HeroBanner,
  ServicesBlock,
  WhyUsSection,
} from "../../components/HomeComponents";
import Portfolio from "../../components/Portfolio/Portfolio";
import SectionWithMargin from "../../components/SectionWithMargin";

export const metadata: Metadata = {
  title: "Home | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}`,
  },
  openGraph: {
    type: "website",
    url: "https://www.umarbashir.com",
    title: "Umar Bashir Portfolio",
    description:
      "I am a software developer based in Pahalgam, India. I have over 4 years of experience working as a software developer, and I specialize in building web applications and websites. I mainly use frameworks like ReactJS, NextJS, and Angular.",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Umar Bashir Portfolio",
      },
    ],
    siteName: "Umar Bashir Portfolio",
  },
};

function addPersonJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Umar Bashir Rather",
      url: "https://www.umarbashir.com",
      // image: "https://www.umarbashir.com/images/your-image.jpg",
      sameAs: [
        "https://www.linkedin.com/in/umarbashirr/",
        "https://github.com/umarbashirr",
        "https://twitter.com/umarbashirr",
      ],
      jobTitle: "Software Developer",
      worksFor: {
        "@type": "Organization",
        name: "Self-Employed",
      },
      email: "mailto:umarbashir601@gmail.com",
    }`,
  };
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addPersonJsonLd()}
        key="person-jsonld"
      />
      <HeroBanner />
      <WhyUsSection />
      <AboutSection />
      <Banner />
      <ServicesBlock />
      <SectionWithMargin>
        <Portfolio />
      </SectionWithMargin>
    </>
  );
}
