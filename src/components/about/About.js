import React from "react";
import profileImg from "../../assets/pp.jpg";

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
            <div className="img-box">
              <img src={profileImg} alt="about img" />
            </div>
          </div>
          <div className="about-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            harum, explicabo sapiente eligendi ad suscipit consequuntur delectus
            debitis adipisci minus ullam, quae nam doloribus. Animi quia eos
            numquam doloribus commodi.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
