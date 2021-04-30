import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import emailIcon from "../assets/social-media-icons/e-mail.png";
import whatsAppIcon from "../assets/social-media-icons/whats-app.png";
import fbIcon from "../assets/social-media-icons/fb.png";
import gitHubIcon from "../assets/social-media-icons/git-hub.png";
import telegramIcon from "../assets/social-media-icons/telegram.png";
import phoneIcon from "../assets/social-media-icons/phone-48.png";
import '../css/footer.css'

function footer() {
  return (
    <Row className="footer">
      <Col md className="column-1">
        <Row id="email-details">
          <Image src={emailIcon} />
          <h5>rajaboddu34@gmail.com</h5>
        </Row>
        <Row id="phone-details">
          <Image src={phoneIcon} /> <h5>+917036835777</h5>
        </Row>
      </Col>
      <Col md className="column-2">
        <Row id="keep-connected">
          <h4>Keep Connected</h4>
        </Row>
        <Row id="images">
          <Image src={fbIcon} />
          <Image src={whatsAppIcon} />
          <Image src={gitHubIcon} />
          <Image src={telegramIcon} />
        </Row>
      </Col>
    </Row>
  );
}

export default footer;
