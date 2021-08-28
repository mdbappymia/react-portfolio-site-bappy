import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="text-center header py-5 text-white bg-dark">
      <h1>Hi</h1>
      <h2 className="my-4">
        This is{" "}
        <span className="animate__animated animate__fadeIn fadeOut animate__infinite infinite animate__slower 2s text-warning fw-bolder f-3 text-uppercase">
          Md. Bappy Mia
        </span>
      </h2>
      <h3 className="my-3 text-secondary">is a profressional Web Developer</h3>
      <button className="btn btn-primary me-3 my-5">See My resume</button>
      <button className="btn btn-primary ms-3 my-5">Hire Me</button>
    </div>
  );
};

export default Header;
