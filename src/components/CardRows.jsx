import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function CardRows(props) {//props: row, classNames=> columnClass, imageClass
  return (
    <Row>
      {props.row.map((skill) => (
        <Col
          sm
          className={props.classNames.columnClass}
          key={props.row.indexOf(skill)}
        >
          <Image
            className={props.classNames.imageClass}
            src={skill.logo}
            alt={skill.skill}
          />
          <h4>{skill.skill}</h4>
          <p>{skill.details}</p>
          <p><strong>Level : </strong>{ skill.level}</p>
        </Col>
      ))}
    </Row>
  );
}

export default CardRows;
