import React from "react";
import "./home.css";
import profileImg from "../../assets/pp.jpg";

const Home = () => {
  return (
    <section className="home-section align-items-center hidden ">
      <div className="container">
        <div className="row align-items-center ">
          <div className="home-text">
            <p>Hello, I'm</p>
            <h1>Murat Can Yüksel</h1>
            <h2>Web(3) developer</h2>
            <a href="#" className="btn">
              more about me
            </a>
            <a href="#" className="btn">
              portfolio
            </a>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={profileImg} alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
