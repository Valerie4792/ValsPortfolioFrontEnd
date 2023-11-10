import React from "react";
import { Container, Image, Row, Col} from "react-bootstrap";
import bootStrapImg from "../assets/logos/bootstrap.png";
import chakraImg from "../assets/logos/chakra.png";
import cSharpImg from "../assets/logos/csharp.png";
import cssImg from "../assets/logos/css.png";
import dotnetImg from "../assets/logos/dotnet.png";
import htmlImg from "../assets/logos/html.png";
import jsImg from "../assets/logos/js.png";
import js5Img from "../assets/logos/js5.png";
import reactTypscriptImg from "../assets/logos/react.png";
import reactImg from "../assets/logos/reactt.png";
import unityImg from  "../assets/logos/unity.png";
import { useNavigate } from 'react-router-dom';
import arrowDwn from "/src/assets/bgimages/arrowDwn.png";

const FloatingIcons = () => {

  let navigate = useNavigate();
  const handleSubmit = () =>{
    navigate("/Contact")
  } 
  return (
    <Container className="icon-container">
      <Row>
        <Col className="d-flex justify-content-center">
          <Image src={bootStrapImg} className="icon1" />
        </Col>
        <Col className="d-flex justify-content-center">
          <h1 className=""> SKILLS</h1>
        </Col>
        <Col className="d-flex justify-content-center">
          <Image src={cSharpImg} className="icon1" />
        </Col>
      
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Image src={dotnetImg} className="icon1" />
        </Col>
        <Col className="d-flex justify-content-center">
        <Image src={chakraImg} className="icon2" />
        </Col>
       
        <Col className="d-flex justify-content-center">
          <Image src={jsImg} className="icon1" />
        </Col>
      
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Image src={reactImg} className="icon1" />
        </Col>
        
        <Col className="d-flex justify-content-center">
          <Image src={htmlImg} className="icon1" />
        </Col>
       
        <Col className="d-flex justify-content-center">
          <Image src={unityImg} className="icon1" />
        </Col>
      
      </Row>
      <Row>
      <Col className="d-flex justify-content-center">
          <Image src={cssImg} className="icon1" />
        </Col>
       
        <Col className="d-flex justify-content-center">
          <Image src={reactTypscriptImg} className="icon1" />
        </Col>
        <Col className="d-flex justify-content-center">
          <Image src={js5Img} className="icon1" />
        </Col>
      </Row>

      <Row>
          <Col className="arrowDwnBtn mx-5">
            <Image onClick={handleSubmit} src={arrowDwn} />
          </Col>
        </Row>
    </Container>
  );
};

export default FloatingIcons;
