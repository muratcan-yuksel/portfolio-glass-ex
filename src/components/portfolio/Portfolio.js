import React from "react";
import "./portfolio.css";
import PortfolioItem from "./PortfolioItem";
import one from "../../assets/portfolio/1.jpg";

const Portfolio = () => {
  const data = [
    {
      image: { one },
      itemTitle: "education course website",
      viewBtnPara: "view project",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque",
      listItems: [
        { key: "Created - ", value: "4 Dec 2020" },
        { key: "technologies used - ", value: "Html, Css" },
        { key: "Role - ", value: "Frontend" },
        { key: "View Online - ", value: "www.domain.com" },
      ],
    },
  ];

  return (
    <section className="portfolio-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>recent work</h2>
          </div>
        </div>

        <div className="row">
          {/* portfolio item starts */}
          <PortfolioItem data={data} />
          {/* portfolio item ends */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
