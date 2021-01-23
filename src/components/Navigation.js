import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: red;
    &:hover {
      color: gray;
    }
  }
`;

function Navigation() {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>
              <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
              <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
              <Link to="/contacts">Contacts</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>

      </Styles>
    </>
  );
}

export default Navigation;
