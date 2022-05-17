import React from "react";
import profileImg from "../../assets/pp.jpg";
import "./about.css";

const About = () => {
  return (
    <section className="about-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box aboutImg">
              <img src={profileImg} alt="about img" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate recusandae reiciendis voluptas soluta rerum quidem
              ducimus odio molestias cum ullam dicta vel, mollitia quis, nam
              impedit molestiae magni maiores hic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
