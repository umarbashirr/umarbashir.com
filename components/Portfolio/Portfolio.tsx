import { Portfolio as PortfolioProps } from "@/interfaces/portfolio";
import SectionTitle from "../SectionTitle";
import SinglePortfolio from "./SinglePortfolio";
import Link from "next/link";

const PortfolioSection = ({ portfolios }: { portfolios: PortfolioProps[] }) => {
  return (
    <div>
      <div className="container mx-auto px-5">
        <SectionTitle
          subtitle={"My Portfolio"}
          title={"Some of my work"}
          isCentered={true}
        />
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12 gap-12">
          {portfolios.slice(0, 6).map((d: PortfolioProps, index: number) => {
            return <SinglePortfolio key={index} portfolio={d} />;
          })}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link
            href="/portfolio"
            className="bg-primary border-2 border-dark-primary-color hover:bg-dark-primary-color hover:text-white px-8 py-2 text-dark-primary-color font-semibold rounded-md shadow-md inline-flex duration-200 ease-in-out"
            aria-labelledby="Get in touch button"
          >
            View All Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
