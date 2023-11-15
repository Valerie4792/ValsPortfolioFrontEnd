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
      "Mario themed Deal or No Deal game built in Unity using C# language",
  },
  {
    image: DadJokes,
    description:
      "Simple project written in js, pulls dad jokes from a pre-built api, Simpson themed",
    imageLink: "https://victorious-sea-06267761e.4.azurestaticapps.net/",
  },
  {
    image: DigitalClock,
    description:
      "Digital clock built in Unity, written in C#, Adventure Time Themed",
  },
  {
    image: MagicEightBall,
    description: "Magic 8 ball game built in Unity, c#, Bob's Burger Theme",
  },
  {
    image: SimpleCalc,
    description: "Hello Kitty themed simple calculator using JS",
    imageLink: "https://zealous-field-090dd4a1e.4.azurestaticapps.net/",
  },
  {
    image: ToDoList,
    description:
      "To do list built using JS and VS code. Themed like old Type Writer",
    imageLink: "https://yellow-stone-03edb411e.4.azurestaticapps.net/",
  },
  {
    image: Top10,
    description: "Adam Sandler Top 10 movie website",
    imageLink: "https://brave-desert-04a76a81e.4.azurestaticapps.net/",
  },
  {
    image: WeatherApp,
    description: "Weather App built using JS, pulls data from a weather api",
    imageLink: "https://gray-stone-0f4208c1e.4.azurestaticapps.net/",
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
