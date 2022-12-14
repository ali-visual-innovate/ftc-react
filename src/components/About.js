import React from "react";
import "./aboutus.css";
const About = () => {
  return (
    <>
      <div className="container">
        <div id='about' className="about">
          <div className="about-text">
            <h2>WHO WE ARE</h2>
            <h1>Future is a mep solutions provider</h1>
            <p>
              We provide contracting, trading and consulting solutions for all
              construction projects, whether commercial, industrial or
              residential.
            </p>
            <p>
              The passion we have for our work enables us to own our clients'
              projects. We constantly strive to deliver projects of the highest
              possible quality.
            </p>
            <p>
              There is no greater satisfaction than delivering finished projects
              that help clients reach goals. (Our motto is always speed,
              quality, honesty)
            </p>
          </div>

          <div className="about-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/Wolfsburg_VW-Werk.jpg"
              alt=""
            />
          </div>

          <div className="about-text">
            <h2>CEO Word</h2>
            <h1>FTC&PETRA</h1>
            <p>
              The future is an idea. It aims to meet challenges and keep pace
              with development in the field of engineering, so we decided to
              venture and develop rapidly. We believe that our success depends
              on three factors. Quality, speed, and honesty, so we do our work
              quickly and under the management of engineers and workers at the
              highest level of experience (we are unique and we do our work in
              the best way).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
