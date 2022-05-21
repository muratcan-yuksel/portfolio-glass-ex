import React from "react";
import one from "../../assets/portfolio/1.jpg";

const PortfolioItem = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((item, index) => {
        const { image, itemTitle, viewBtnPara, description, listItems } = item;
        return (
          <div key={index} className="portfolio-item">
            <div className="portfolio-item-thumbnail">
              <img src={one} alt="portfolio item thumbnail" />
            </div>
            <h3 className="portfolio-item-title"> {itemTitle} </h3>
            <button className="btn view-project-btn"> {viewBtnPara} </button>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="general-info">
              <ul>
                {listItems.map((listItem, index) => {
                  const { key, value } = listItem;
                  return (
                    <li key={index}>
                      {key} <span>{value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>{" "}
          </div>
        );
      })}
      lol
    </>
  );
};

export default PortfolioItem;
