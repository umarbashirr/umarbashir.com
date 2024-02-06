import { Metadata } from "next";
import { PageHeroBanner } from "../../../components";
import React from "react";
import SinglePortfolio from "../../../components/Portfolio/SinglePortfolio";
import { Portfolio } from "../../../interfaces/portfolio";
import { OUR_PORTFOLIO } from "../../../utils/siteData";

export const metadata: Metadata = {
  title: "My Portfolio | Umar Bashir Portfolio | Software Developer",
  alternates: {
    canonical: `${process.env.APP_URL}/portfolio`,
  },
};

const breadcrumb = [
  { url: `${process.env.APP_URL}`, name: "Home" },
  { url: `${process.env.APP_URL}/portfolio`, name: "Portfolio" },
];

const PortfolioPage = () => {
  return (
    <React.Fragment>
      <PageHeroBanner title="My Portfolio" bc={breadcrumb} />
      <section className="pb-10 md:pb-32">
        <div className="container mx-auto px-5">
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-12">
            {OUR_PORTFOLIO.porfolios.map(
              (portfolio: Portfolio, index: number) => {
                return (
                  <SinglePortfolio key={index} portfolio={portfolio} imageBig />
                );
              }
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PortfolioPage;
