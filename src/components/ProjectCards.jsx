import React from "react";
import { Button, Card, Row, Col, Badge } from "react-bootstrap";

function ProjectCards(props) {
  const getVariant = (tech) => {
    switch (tech) {
      case "React.js":
        return "info"
      case "HTML":
        return "danger"
      case "CSS":
        return "primary"
      case "Python":
        return "warning"
      case "Pygame":
        return "secondary"
      case "django":
        return "dark"
      case "Redux":
        return "primary"
      default:
        return "success";
    }
  };
  return (
    <Row className="services">
      {props.row.map((project) => (
        <Col key={props.row.indexOf(project)} sm className={props.className}>
          <Card className="mt-1">
            <Card.Img width={286} height={120} src={project.image} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.text}</Card.Text>
              <Row className="services">
                {project.techs.map((tech) => (
                  <Badge
                    variant={getVariant(tech)}
                    className="m-1"
                    key={project.techs.indexOf(tech)}
                  >
                    {tech}
                  </Badge>
                ))}
              </Row>
              <Row className="services">
                <Button>Details</Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectCards;
