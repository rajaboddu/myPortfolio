import { React, useEffect } from "react";
import { myServices } from "../Services/myServices";
import { Row} from "react-bootstrap";
import "../css/services.css";
import Carousel from "react-elastic-carousel";
import Footer from "../components/footer";

function Services() {
  useEffect(() => {
    document.title = "Services"
  })
  const items = myServices;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="services-page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="services">
        <h1 id="heading-for-page">AVAILABLE SERVICES</h1>
      </Row>
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <div key={item.id} className="service-card">
            <img src={item.logo} alt="not-found" />
            <Row className="service-details">
              <Row id="main-data">
                <h2 id="service-name">{item.skill}</h2>
                 <p id="service-para">{item.details}</p>
              </Row>
              <span id="left-line"></span>
              <span id="right-line"></span>
            </Row>
          </div>
        ))}
      </Carousel>
      <Footer />
    </div>
  );
}

export default Services;
