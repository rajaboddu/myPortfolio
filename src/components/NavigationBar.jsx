import { React } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../css/nav-bar.css";
import myLogo from '../assets/Rj-logo.jpg'

const NavigationBar = () => {
  return (
    <Navbar expand="sm" sticky="bottom">
      <Navbar.Brand href="/"><Image width={100} height={50} src={ myLogo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <Nav.Link href="/portfolio">PROJECTS</Nav.Link>
          <Nav.Link href="/services">SERVICES</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
