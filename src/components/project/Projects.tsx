import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DownButton from "../DownButton";
import gearshop from "../../assets/projects/gearshop.png";
import battleship from "../../assets/projects/battleship.png";
import autoscore from "../../assets/projects/autoscore.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="navy-accent">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="projects-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearshop}
              isBlog={false}
              title="Gear Shop Website"
              ghLink="https://github.com/QuineNguyen/Gear_Shop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battleship}
              isBlog={false}
              title="Battleship Game"
              ghLink="https://github.com/QuineNguyen/Sea_Battle"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoscore}
              isBlog={false}
              title="Autoscore Website"
              ghLink="https://github.com/QuineNguyen/AutoScore_PHP"
            />
          </Col>
        </Row>
        <DownButton
          scrollToElement="certificates"
          offsetElement={-25}
          style={{ paddingTop: "0px", marginTop: "0px" }}
        />
      </Container>
    </Container>
  );
}

export default Projects;
