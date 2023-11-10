import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Nav1 from "./Nav1";
import arrowDwn from "/src/assets/bgimages/arrowDwn.png";
import homeBG from "/src/assets/bgimages/homeBG.png";

const Home1 = () => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/about");
  };
  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="containerHomeBg m-0 p-0">
      <Container-Fluid>
        <Nav1 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col md={12} className="valerie mt-5">
            <div className="text-container m-5 p-5">
              <div className="line"></div>
              <h1>{"<VALERIE/>"}</h1>
            </div>
          </Col>
          {/* 
        <Col md={4} className=" m-5 p-1 imgCol">
          <Image src={lampImg} className="lampImg" />
        </Col>  */}
        </Row>
        <Row>
          <Col>
            <p className="homeTxtBold">A Front-End Web Developer</p>
            <p className="homeTxtReg">Imagine it. Design it. Create it.</p>
          </Col>
        </Row>
        <Row className="mx-5 px-5" >
          <Col>
            <Button onClick={handleClick} className="navContactBtn">Contact</Button>
          </Col>
          <Col className="arrowDwnBtn">
            <Image onClick={handleSubmit} src={arrowDwn} />
          </Col>
        </Row>
      </Container-Fluid>
    </div>
  );
};

export default Home1;
