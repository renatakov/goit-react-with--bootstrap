import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../images/img101.png";

const Styles = styled.div`
  .jumbo {
    background: url(${img1}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 700px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: black;
    opacity: 0.7;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

function Jumbo() {
  return (
    <Styles>
      <Jumbotron className="jumbo" fluid>
        <div className="overlay"></div>
        <Container>
          <h1>Main Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            pariatur.
          </p>
        </Container>
      </Jumbotron>
    </Styles>
  );
}

export default Jumbo;
