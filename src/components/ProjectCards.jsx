import React from "react";
import { Button, Card, Row, Col, Badge } from "react-bootstrap";

function ProjectCards(props) {
  const getVariant = (tech) => {
    const tech1 = tech
    const badgeVariants = {
      "React.js": "info", "HTML": "danger", "CSS": "primary", "Python": "warning",
      "Pygame": "secondary", "django": "dark", "Redux": "primary"
    }
    return badgeVariants[tech1]
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
