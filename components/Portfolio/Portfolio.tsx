import React from "react";
import SectionTitle from "../SectionTitle";
import { OUR_PORTFOLIO } from "../../utils/siteData";
import SinglePortfolio from "./SinglePortfolio";
import { Portfolio } from "../../interfaces/portfolio";

const Portfolio = () => {
  return (
    <div>
      <SectionTitle title={OUR_PORTFOLIO.title} isCentered={true} />
      <div className="container mx-auto px-5">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  mt-12 gap-12">
          {OUR_PORTFOLIO.porfolios.map(
            (portfolio: Portfolio, index: number) => {
              return <SinglePortfolio key={index} portfolio={portfolio} />;
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
