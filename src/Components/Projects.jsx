import React from "react";
import Nav1 from "./Nav1";
import {
  Container,
  Image,
  Row,
  Col,
  Button,
  Carousel,
  Fade,
} from "react-bootstrap";
import DealNoDeal from "../assets/Proj/DealNoDeal.png";
import DadJokes from "../assets/Proj/DadJokes.png";
import DigitalClock from "../assets/Proj/DigitalClock.png";
import MagicEightBall from "../assets/Proj/MagicEightBall.png";
import SimpleCalc from "../assets/Proj/SimpleCalc.png";
import ToDoList from "../assets/Proj/ToDoList.png";
import Top10 from "../assets/Proj/Top10.png";
import WeatherApp from "../assets/Proj/WeatherApp.png";
import { useNavigate } from "react-router-dom";
import arrowDwn from "/src/assets/bgimages/arrowDwn.png";
import ImageCarousel from "./ImageCarousel";

const images = [
  {
    image: DealNoDeal,
    description:
      "mario themed Deal or No Deal game built in Unity using C# language",
  },
  {
    image: DadJokes,
    description:
      "simple project written in js, pulls dad jokes from a pre-built api, Simpson themed",
  },
  {
    image: DigitalClock,
    description:
      "digital clock built in Unity, written in C#, Adventure Time Themed",
  },
  {
    image: MagicEightBall,
    description: "magic 8 ball game built in Unity, c#, Bob's Burger Theme",
  },
  {
    image: SimpleCalc,
    description: "Hello Kitty themed simple calculator using JS",
  },
  {
    image: ToDoList,
    description:
      "To do list built using JS and VS code. Themed like old Type Writer",
  },
  { image: Top10, description: "Adam Sandler Top 10 movie website" },
  {
    image: WeatherApp,
    description: "Weather App built using JS, pulls data from a weather api",
  },
];

const Projects = () => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/Skills");
  };

  return (
    <Container fluid className="containerProjectsBg">
      <Nav1 />

      <h1 className="projectsHeader">PROJECTS</h1>
      <div className="projectLine"></div>

      <ImageCarousel images={images} />
      <Row>
        <Col className="arrowDwnBtn mx-5">
          <Image onClick={handleSubmit} src={arrowDwn} />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
