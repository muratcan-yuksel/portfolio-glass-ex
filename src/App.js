import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div className="main">
      <Home />
      <About />
      <Portfolio />
    </div>
  );
};

export default App;
