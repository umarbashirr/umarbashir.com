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
};

export default function Home() {
  return (
    <>
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
