import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

const NavHead = () => {
  return (
    <>
      <Navbar
        className="nav-bg shadow-lg p-3 bg-body sticky-top"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Bappy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#my-work">My Work</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavHead;
