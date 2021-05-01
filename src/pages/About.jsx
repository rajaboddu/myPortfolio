import {React, useEffect} from "react";
import {Col, Container, Image, Row } from "react-bootstrap";
import "../css/about-page.css";
import { skills } from "../Services/skills";
import CardRows from "../components/CardRows";
import myImage from "../assets/myPic.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About"
  })
  const classNames = {
    columnClass: "m-4 skill-box",
    imageClass: "programming-image",
  };
  return (
    <div className="about">
      <Container fluid className="about-page">
        <Row className="about-me-row">
          <Col md className="image-row">
            <Row className="services">
              <Image id="my-image" src={myImage} />
            </Row>
          </Col>
          <Col md className="my-details">
            <Row id="heading-row">
              <h1 id="heading-for-page">ABOUT ME</h1>
            </Row>
            <Row>
              <p className="what-i-do">
                Hi there! I am <strong>Raj Kumar</strong>.
                <br />
                <br />
                A good programmer born and brought up in India. I am a Web
                Developer with React.js, Redux, django as a my main stack. I am
                currently pursuing my Engineering with specialization in
                'Electronics and Communication Engineering'.
                <br />
                Working with the clients, my goal is always providing the best
                outcome and service to him. I love learning new technologies,
                what problems are they solving and How can I use then to build
                better and scalable products.
              </p>
            </Row>
          </Col>
        </Row>
        <CardRows row={skills.slice(0, 4)} classNames={classNames} />
        <CardRows row={skills.slice(4)} classNames={classNames} />
      </Container>
    </div>
  );
};

export default About;
