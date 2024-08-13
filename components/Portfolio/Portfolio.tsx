import { Portfolio as PortfolioProps } from "@/interfaces/portfolio";
import SectionTitle from "../SectionTitle";
import SinglePortfolio from "./SinglePortfolio";

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
          {portfolios.splice(0, 6).map((d: PortfolioProps, index: number) => {
            return <SinglePortfolio key={index} portfolio={d} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
