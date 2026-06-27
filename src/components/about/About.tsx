import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import DownButton from "../DownButton";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="navy-accent">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="navy-accent">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />

        <DownButton scrollToElement="projects" offsetElement={-25} />
      </Container>
    </Container>
  );
}

export default About;
