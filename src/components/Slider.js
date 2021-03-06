import React from "react";
import img1 from "../images/img101.png";
import img2 from "../images/img102.jpg";
import img3 from "../images/img103.png";
import { Carousel } from "react-bootstrap";
// import withToggle  from "../components/hoc/withToggle"


function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "550px" }}>
        <img src={img1} alt="img" className="d-block-w-100" />
        <Carousel.Caption>
          <h2>Title</h2>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "550px" }}>
        <img src={img2} alt="img" className="d-block-w-100" />
        <Carousel.Caption>
          <h2>Title</h2>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "550px" }}>
        <img src={img3} alt="img" className="d-block-w-100" />
        <Carousel.Caption>
          <h2>Title</h2>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// export default withToggle(Slider);
export default Slider