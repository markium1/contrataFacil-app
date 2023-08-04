import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="me-auto">
              <Link to={`/servicos`}>Servicos</Link>
              <Link to={`/prestadores`}>Prestadores de Serviços</Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
