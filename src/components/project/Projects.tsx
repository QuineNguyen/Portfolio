import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DownButton from "../DownButton";
import gearshop from "../../assets/projects/gearshop.png";
import battleship from "../../assets/projects/battleship.png";
import autoscore from "../../assets/projects/autoscore.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function Projects() {
  const headingReveal = useScrollReveal<HTMLHeadingElement>({
    variant: "fade-down",
    threshold: 0.2,
  });

  const card1Reveal = useScrollReveal<HTMLDivElement>({
    variant: "fade-up",
    delay: 0,
    threshold: 0.1,
  });

  const card2Reveal = useScrollReveal<HTMLDivElement>({
    variant: "fade-up",
    delay: 150,
    threshold: 0.1,
  });

  const card3Reveal = useScrollReveal<HTMLDivElement>({
    variant: "fade-up",
    delay: 300,
    threshold: 0.1,
  });

  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading" ref={headingReveal.ref} style={headingReveal.style}>
          My Recent <strong className="navy-accent">Projects</strong>
        </h1>
        <p style={{ color: "white", ...headingReveal.style }} ref={undefined}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="projects-row">
          <Col md={4} className="project-card" ref={card1Reveal.ref} style={card1Reveal.style}>
            <ProjectCard
              imgPath={gearshop}
              isBlog={false}
              title="Gear Shop Website"
              ghLink="https://github.com/QuineNguyen/Gear_Shop"
            />
          </Col>
          <Col md={4} className="project-card" ref={card2Reveal.ref} style={card2Reveal.style}>
            <ProjectCard
              imgPath={battleship}
              isBlog={false}
              title="Battleship Game"
              ghLink="https://github.com/QuineNguyen/Sea_Battle"
            />
          </Col>
          <Col md={4} className="project-card" ref={card3Reveal.ref} style={card3Reveal.style}>
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
