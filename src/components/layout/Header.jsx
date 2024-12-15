import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">MyWebLink</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
