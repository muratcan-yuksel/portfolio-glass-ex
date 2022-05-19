import React, { useState, useEffect } from "react";
import profileImg from "../../assets/pp.jpg";
import "./about.css";

const About = () => {
  // need to add conditonal rendering
  // stopped at 41m42secs
  const [isActive, setActive] = useState("false");

  // const tabsContainer = document.querySelector(".about-tabs");
  // const aboutSection = document.querySelector(".about-section");

  // const handleToggle = (e) => {
  //   setActive(!isActive);
  //   if (
  //     e.target.classList.contains("tab-item") &&
  //     !e.target.classList.contains("active")
  //   ) {
  //     tabsContainer.querySelector(".active").classList.remove("active");
  //     e.target.classList.add("active");
  //     const target = e.target.getAttribute("data-target");
  //     aboutSection
  //       .querySelector(".tab-content.active")
  //       .classList.remove("active");
  //     aboutSection.querySelector(target).classList.add("active");
  //   }
  //   console.log(e.target);
  //   console.log(e.target.classList);
  // };

  const handleToggle = (e) => {
    e.target.classList.add("active");
    console.log(e);
  };

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
                onClick={handleToggle}
                type="button"
                className="tab-item"
                data-target="#experience"
              >
                experience
              </button>
            </div>
            {/* education starts */}
            <div className="tab-content active" id="education">
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
            <div className="tab-content" id="experience">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2013-2016</span>
                  <h4>web developer</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi exercitationem neque doloribus quas velit corporis
                    adipisci, est eligendi perferendis ducimus libero
                    praesentium sunt aliquam officiis laborum eius ab deleniti
                    voluptas?
                  </p>
                </div>{" "}
                <div className="timeline-item">
                  <span className="date">2013-2016</span>
                  <h4>web developer</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi exercitationem neque doloribus quas velit corporis
                    adipisci, est eligendi perferendis ducimus libero
                    praesentium sunt aliquam officiis laborum eius ab deleniti
                    voluptas?
                  </p>
                </div>{" "}
                <div className="timeline-item">
                  <span className="date">2013-2016</span>
                  <h4>web developer</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi exercitationem neque doloribus quas velit corporis
                    adipisci, est eligendi perferendis ducimus libero
                    praesentium sunt aliquam officiis laborum eius ab deleniti
                    voluptas?
                  </p>
                </div>
              </div>
            </div>
            {/* experience ends */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
