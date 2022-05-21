import React from "react";
import one from "../../assets/portfolio/1.jpg";

const PortfolioItem = ({}) => {
  return (
    <div>
      {" "}
      <div className="portfolio-item">
        <div className="portfolio-item-thumbnail">
          <img src={one} alt="portfolio item thumbnail" />
        </div>
      </div>
      <h3 className="portfolio-item-title">education course website</h3>
      <button className="btn view-project-btn">view project</button>
      <div className="description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, qui.
          Officia sint distinctio impedit veritatis aspernatur iusto numquam
          quidem, maiores eum optio rem eos nobis nesciunt qui dolorum maxime
          laboriosam.
        </p>
      </div>
      <div className="general-info">
        <ul>
          <li>
            Created - <span> 4 Dec 2020</span>
          </li>
          <li>
            technologies used - <span>Html, Css</span>
          </li>
          <li>
            Role - <span>Frontend</span>
          </li>
          <li>
            View Online -{" "}
            <span>
              {" "}
              <a href="#" target="_blank">
                {" "}
                www.domain.com
              </a>{" "}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioItem;
