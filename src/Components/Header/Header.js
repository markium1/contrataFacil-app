import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#features">Serviços</Nav.Link>
              <Nav.Link href="#pricing">Prestadores de Serviços</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
