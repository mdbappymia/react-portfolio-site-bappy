import React from "react";
import About from "../about/About";
import Header from "../Header/Header";
import MyWork from "../work/MyWork";
import NavHead from "../navbar/NavHead";

const Home = () => {
  return (
    <div>
      <NavHead />
      <Header />
      <About />
      <MyWork />
    </div>
  );
};

export default Home;
