import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import withAuthContext from "./hoc/withAuthContext";

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

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    matginRight: 4,
  },
  name: {
    fontWeight: 900,
    marginRight: 12,
  },
};

function Navigation({ auth }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
              <Nav>
                {auth.user ? (
                  <div style={styles.container}>
                    <img
                      src={auth.user.avatar}
                      alt={auth.user.name}
                      width="32"
                      style={styles.avatar}
                    />
                    <span style={styles.name}> Hello, {auth.user.name}</span>
                    <button type="button" onClick={auth.onLogOut}>
                      logOut
                    </button>
                  </div>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      className="mr-2"
                      onClick={auth.onLogin}
                    >
                      login
                    </Button>
                    <Button variant="primary" onClick={auth.onLogin}>
                      sign out
                    </Button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email, please"
              />
              <Form.Text className="text-muted">Descriptioned</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password, please"
              />
              <Form.Text className="text-muted">Descriptioned</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" placeholder="Remember me, please" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default withAuthContext(Navigation);
