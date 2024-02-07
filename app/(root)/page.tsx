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
import Head from "next/head";

export const metadata: Metadata = {
  title: "Home | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}`,
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addPersonJsonLd()}
          key="person-jsonld"
        />
      </Head>
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
