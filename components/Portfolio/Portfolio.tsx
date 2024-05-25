import React from "react";
import SectionTitle from "../SectionTitle";
import { OUR_PORTFOLIO } from "../../utils/siteData";
import SinglePortfolio from "./SinglePortfolio";
import { Portfolio as PortfolioProps } from "@/interfaces/portfolio";

const PortfolioSection = () => {
  return (
    <div>
      <div className="container mx-auto px-5">
        <SectionTitle
          subtitle={"My Portfolio"}
          title={"Some of my work"}
          isCentered={true}
        />
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12 gap-12">
          {OUR_PORTFOLIO.porfolios.map(
            (portfolio: PortfolioProps, index: number) => {
              return <SinglePortfolio key={index} portfolio={portfolio} />;
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
