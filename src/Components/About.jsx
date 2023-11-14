import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import Nav1 from "./Nav1";
import helloPic from "/src/assets/bgimages/helloPic.png";
import arrowDwn from "/src/assets/bgimages/arrowDwn.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Projects");
  };
  return (
    <Container-Fluid>
      <Nav1 />
      <Row style={{ margin: 100 }}>
        <Col md={7} className="aboutMediaQ">
          <h1 className="about aboutMedia">ABOUT</h1>
          <div className="aboutLine"></div>
          <p className="aboutBold aboutMediaBold m-0 p-0">
            I'm <span style={{ color: "white" }}>{"<VALERIE/>"}</span>,
          </p>
          <p className="aboutBold aboutMediaBold m-0 p-0">a junior front-end developer.</p>
          <p className="aboutReg aboutMediaReg">
            I create websites and apps that are practical, playful, and fun for
            the user.
          </p>
        </Col>
        <Col md={5}>
          <Image src={helloPic} className="aboutPic animated-pic" />
        </Col>
        <Row>
          <Col className="arrowDwnBtn mx-5">
            <Image onClick={handleSubmit} src={arrowDwn} />
          </Col>
        </Row>
      </Row>
    </Container-Fluid>
  );
};

export default About;
