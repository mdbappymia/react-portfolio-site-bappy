import React from "react";
import About from "../about/About";
import Header from "../Header/Header";
import MyWork from "../work/MyWork";
import NavHead from "../navbar/NavHead";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <NavHead />
      <Header />
      <About />
      <MyWork />
      <Services />
    </div>
  );
};

export default Home;
