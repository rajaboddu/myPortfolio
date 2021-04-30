import React from "react";
import Typed from "react-typed";
import {  Row, Container } from "react-bootstrap";
import "../css/landing-page.css";
import Particles from "react-particles-js";

const Landing = () => {
  return (
    <Container fluid className="landing-page">
      <div className="main-content">
        <h1 id="heading-for-page">
          <Row className='services'>
            HI, I am
           </Row>
          <div>
            RAJ KUMAR
          </div>
        </h1>
        <Row className="typed">
          <Typed
            className="typed-text"
            strings={["I'm a Student", "Logo Design", "Web Design"]}
            typeSpeed={70}
            backSpeed={90}
            loop
          />
        </Row>
      </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f50303",
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default Landing;
