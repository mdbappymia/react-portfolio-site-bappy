
import React from "react";
import myImg from './../dist/images/my-image.png'
import './about.css'
import ProgressLine from "./ProgressLine";

const About = () => {
  return (
    <div className='bg-black '>
      <div className="container ">
        <div className="row">
          <div className="col-lg-4 about-left">
            <h1 className='my-5'>About Me</h1>
            <div class="w-75">
              <ProgressLine
                label="JavaScript"
                visualParts={[
                  {
                    percentage: "80%",
                    color: "green"
                  }
                ]}
              />
              <ProgressLine
                label="React JS"
                visualParts={[
                  {
                    percentage: "90%",
                    color: "Blue"
                  }
                ]}
              />
              <ProgressLine
                label="Node JS"
                visualParts={[
                  {
                    percentage: "85%",
                    color: "Blue"
                  }
                ]}
              />
              <ProgressLine
                label="Express JS"
                visualParts={[
                  {
                    percentage: "80%",
                    color: "Blue"
                  }
                ]}
              />
              <ProgressLine
                label="MongoDB"
                visualParts={[
                  {
                    percentage: "70%",
                    color: "Blue"
                  }
                ]}
              />
            </div>
          </div>
          <div className="col-lg-4 about-middle">
            <img className=' mt-5 pt-5 b-0 w-75 h-75' src={myImg} alt="" srcset="" />
          </div>
          <div className="col-lg-4 about-right">
            <p className='i-am my-5 ms-2'>WHO AM I</p>
            <h3 className="bg-dark text-light p-3">Md Bappy Mia</h3>
            <h5 className='text-white my-5'>Professional Web Designer</h5>
            <p className="text-secondary">Junior Web Developer with around 1 plus years of experience in Web development, javascript, React JS, Node JS, and MongoDB database. Experience in Design and Development of GUI (Graphical User Interface) using React JS. Experience in HTML, JavaScript, Cascaded Style Sheets (CSS). Experience in OOPs concept and test strategies like mocking and pairwise testing. Basic knowledge of AWS, Azure.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
