import {React, useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import "../css/portfolio-page.css";
import "animate.css/animate.css";
import { projectsRow } from "../Services/projects";
import ProjectCards from "../components/ProjectCards";

const Portfolio = () => {
  useEffect(() => {
    document.title = "My Projects"
  })
  const projectsRow1 = projectsRow.slice(0, 4);
  const projectsRow2 = projectsRow.slice(4);
  const classNames = {
    row1Class: "animate__animated animate__fadeIn project-col",
    row2Class:
      "animate__animated animate__fadeIn animate__delay-1s project-col",
  };
  return (
    <div className="projects">
      <Container fluid className="projects-page">
        <br />
        <br />
        <br />
        <br/>
        <br/>
        <Row className="services">
          <h1 id="heading-for-page">PROJECTS</h1>
        </Row>
        <ProjectCards row={projectsRow1} className={classNames.row1Class} />
        <ProjectCards row={projectsRow2} className={classNames.row2Class} />
      </Container>
    </div>
  );
};

export default Portfolio;
