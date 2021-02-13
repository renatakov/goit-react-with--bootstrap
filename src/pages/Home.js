import React from "react";
import Slider from "../components/Slider";
import { Container, Col, Row, Card } from "react-bootstrap";
import img1 from "../images/img101.png";
import img2 from "../images/img102.jpg";
import img3 from "../images/img103.png";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Slider />
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col>
            <Card>
              <Card.Img varianto="top" src={img1} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img varianto="top" src={img2} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img varianto="top" src={img3} style={{ height: "200px" }} />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}>
            <img src={img1} height={200} alt="ppp"/>
          </Col>
          <Col md={7}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              omnis numquam suscipit odio ducimus quidem consequatur laboriosam,
              accusantium ab adipisci itaque quia assumenda ipsum ex nostrum eos
              provident nemo inventore praesentium, velit pariatur voluptatibus
              nobis deleniti. Delectus illum sed illo harum maiores facere!
              Saepe necessitatibus eaque rem amet modi molestiae!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <img src={img2} height={200} alt="ppp"/>
          </Col>
          <Col md={7}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              omnis numquam suscipit odio ducimus quidem consequatur laboriosam,
              accusantium ab adipisci itaque quia assumenda ipsum ex nostrum eos
              provident nemo inventore praesentium, velit pariatur voluptatibus
              nobis deleniti. Delectus illum sed illo harum maiores facere!
              Saepe necessitatibus eaque rem amet modi molestiae!
            </p>

          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <img src={img3} height={200} alt="ppp"/>
          </Col>
          <Col md={7}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              omnis numquam suscipit odio ducimus quidem consequatur laboriosam,
              accusantium ab adipisci itaque quia assumenda ipsum ex nostrum eos
              provident nemo inventore praesentium, velit pariatur voluptatibus
              nobis deleniti. Delectus illum sed illo harum maiores facere!
              Saepe necessitatibus eaque rem amet modi molestiae!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
