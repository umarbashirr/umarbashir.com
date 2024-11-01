import LandingHeroSection from "@/app/(website)/_components/landing-hero-section";
import {ProjectGrid} from "@/app/(website)/_components/project-grid";
import {TechStackGrid} from "@/app/(website)/_components/tech-stack-grid";

const LandingPage = () => {
    return (
        <>
            <LandingHeroSection/>
            <TechStackGrid/>
            <ProjectGrid/>
        </>
    );
};

export default LandingPage;
