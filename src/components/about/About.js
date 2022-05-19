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
            <div className="about-tabs">
              <button
                type="button"
                className="tab-item active"
                data-target="#education"
              >
                education
              </button>
              <button
                type="button"
                className="tab-item"
                data-target="#experience"
              >
                experience
              </button>
            </div>
            {/* education starts */}
            <div className="tab-content" id="education">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2014-2016</span>
                  <h4>
                    Comp Lit - <span>ELTE University</span>
                  </h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Id, quasi aspernatur asperiores porro cupiditate laborum
                    voluptatibus temporibus repudiandae a dolore tempora sint,
                    ipsum, facilis rem eos provident minus unde ex.
                  </p>
                </div>{" "}
                <div className="timeline-item">
                  <span className="date">2014-2016</span>
                  <h4>
                    Comp Lit - <span>ELTE University</span>
                  </h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Id, quasi aspernatur asperiores porro cupiditate laborum
                    voluptatibus temporibus repudiandae a dolore tempora sint,
                    ipsum, facilis rem eos provident minus unde ex.
                  </p>
                </div>{" "}
                <div className="timeline-item">
                  <span className="date">2014-2016</span>
                  <h4>
                    Comp Lit - <span>ELTE University</span>
                  </h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Id, quasi aspernatur asperiores porro cupiditate laborum
                    voluptatibus temporibus repudiandae a dolore tempora sint,
                    ipsum, facilis rem eos provident minus unde ex.
                  </p>
                </div>
              </div>
            </div>
            {/* education ends */}

            {/* experience starts */}

            {/* experience ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
