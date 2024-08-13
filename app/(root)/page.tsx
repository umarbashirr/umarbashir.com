import { Metadata } from "next";
import {
  AboutSection,
  Banner,
  HeroBanner,
  ServicesBlock,
  WhyUsSection,
} from "../../components/HomeComponents";
import PortfolioSection from "../../components/Portfolio/Portfolio";
import SectionWithMargin from "../../components/SectionWithMargin";
import { OUR_PORTFOLIO } from "@/utils/siteData";

export const metadata: Metadata = {
  title: "Home | Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
  alternates: {
    canonical: `${process.env.APP_URL}`,
  },
  openGraph: {
    type: "website",
    url: "https://www.umarbashir.com",
    title: "Umar Bashir Rather - Freelance Web Developer & SEO Specialist",
    description:
      "Professional Web Developer with over 5 years of experience specializing in custom websites, e-commerce, SEO & web app development based in Pahalgam, J&K, India.",
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
      email: "mailto:mail.umarbashir@gmail.com",
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
        <PortfolioSection portfolios={OUR_PORTFOLIO.porfolios} />
      </SectionWithMargin>
    </>
  );
}
