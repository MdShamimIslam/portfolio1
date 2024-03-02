import React from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./Portfolio.css";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <Helmet>
        <title>Projects | Md. Shamim Islam</title>
      </Helmet>
      <h2 className="section__title">
        My <span>Projects</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => (
          <PortfolioItem key={item.id} {...item}></PortfolioItem>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
