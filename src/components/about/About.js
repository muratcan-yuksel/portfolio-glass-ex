import React, { useState, useEffect } from "react";
import profileImg from "../../assets/pp.jpg";
import "./about.css";

const About = () => {
  // need to add conditonal rendering
  // stopped at 41m42secs
  const [education, setEducation] = useState(true);
  const [experience, setExperience] = useState(false);

  //conditional rendering here
  let educationDiv;
  let experienceDiv;
  if (education) {
    educationDiv = (
      <div className="tab-content active" id="education">
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">2014-2016</span>
            <h4>
              Comp Lit - <span>ELTE University</span>
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
              quasi aspernatur asperiores porro cupiditate laborum voluptatibus
              temporibus repudiandae a dolore tempora sint, ipsum, facilis rem
              eos provident minus unde ex.
            </p>
          </div>{" "}
          <div className="timeline-item">
            <span className="date">2014-2016</span>
            <h4>
              Comp Lit - <span>ELTE University</span>
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
              quasi aspernatur asperiores porro cupiditate laborum voluptatibus
              temporibus repudiandae a dolore tempora sint, ipsum, facilis rem
              eos provident minus unde ex.
            </p>
          </div>{" "}
          <div className="timeline-item">
            <span className="date">2014-2016</span>
            <h4>
              Comp Lit - <span>ELTE University</span>
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
              quasi aspernatur asperiores porro cupiditate laborum voluptatibus
              temporibus repudiandae a dolore tempora sint, ipsum, facilis rem
              eos provident minus unde ex.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (experience) {
    experienceDiv = (
      <div className="tab-content active" id="experience">
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">2013-2016</span>
            <h4>web developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi exercitationem neque doloribus quas velit corporis
              adipisci, est eligendi perferendis ducimus libero praesentium sunt
              aliquam officiis laborum eius ab deleniti voluptas?
            </p>
          </div>{" "}
          <div className="timeline-item">
            <span className="date">2013-2016</span>
            <h4>web developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi exercitationem neque doloribus quas velit corporis
              adipisci, est eligendi perferendis ducimus libero praesentium sunt
              aliquam officiis laborum eius ab deleniti voluptas?
            </p>
          </div>{" "}
          <div className="timeline-item">
            <span className="date">2013-2016</span>
            <h4>web developer</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi exercitationem neque doloribus quas velit corporis
              adipisci, est eligendi perferendis ducimus libero praesentium sunt
              aliquam officiis laborum eius ab deleniti voluptas?
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleToggle = (e) => {
    e.target.classList.add("active");
    console.log(e);
  };

  const switchToEducation = () => {
    setEducation(true);
    setExperience(false);
  };

  const switchToExperience = () => {
    setEducation(false);
    setExperience(true);
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
                onClick={switchToEducation}
                type="button"
                className={`tab-item ${education ? "active" : ""}`}
                data-target="#education"
              >
                education
              </button>
              <button
                onClick={switchToExperience}
                type="button"
                className={`tab-item ${experience ? "active" : ""}`}
                data-target="#experience"
              >
                experience
              </button>
            </div>
            {/* education starts */}
            <div> {educationDiv} </div>
            {/* education ends */}

            {/* experience starts */}
            <div>{experienceDiv} </div>
            {/* experience ends */}
            <a href="http://localhost:3000/" className="btn">
              {" "}
              download cv
            </a>
            <a href="http://localhost:3000/" className="btn">
              {" "}
              contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
