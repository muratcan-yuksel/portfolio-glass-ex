import React from "react";
import "./portfolio.css";
import PortfolioItem from "./PortfolioItem";
import one from "../../assets/portfolio/1.jpg";
import three from "../../assets/portfolio/3.jpg";
import { FaTimes } from "react-icons/fa";
// left at 1h01m
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
    <div>
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

      {/* he gave hidden class to the uttermost main component */}
      {/* portfolio item details popup starts */}
      {/* <div className="portfolio-popup">
        <div className="pp-inner">
          <div className="pp-content">
            <div className="pp-header">
              <button className="btn pp-close">
                <FaTimes />
              </button>
              <div className="pp-thumbnail">
                <img src={three} alt="pp-thumbnail" />
              </div>
              <h3>app landing page</h3>
            </div>
            <div className="pp-body">
              description part comes here Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa illum dolor nulla vel aspernatur adipisci
              accusantium voluptatum sunt eos at quam quia beatae, sit eaque
              deleniti repellat temporibus voluptas porro?
            </div>
          </div>
        </div>
      </div> */}
      {/* portfolio item details popup ends */}
    </div>
  );
};

export default Portfolio;
