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
              <img className="myAboutImg" src={profileImg} alt="about img" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate recusandae reiciendis voluptas soluta rerum quidem
              ducimus odio molestias cum ullam dicta vel, mollitia quis, nam
              impedit molestiae magni maiores hic.
            </p>
            <h3>skills</h3>
            <div className="skills">
              <div className="skill-item">html</div>
              <div className="skill-item">css</div>
              <div className="skill-item">javascript</div>
              <div className="skill-item">reactJS</div>
              <div className="skill-item">vueJS</div>
              <div className="skill-item">solidity</div>
              <div className="skill-item">hardhat</div>
              <div className="skill-item">ethersJS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
