import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import DownButton from "../DownButton";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function About() {
  const skillReveal = useScrollReveal<HTMLDivElement>({
    variant: "fade-up",
    threshold: 0.1,
  });

  const toolReveal = useScrollReveal<HTMLDivElement>({
    variant: "fade-up",
    delay: 150,
    threshold: 0.1,
  });

  const githubReveal = useScrollReveal<HTMLDivElement>({
    variant: "zoom-in",
    delay: 100,
    threshold: 0.1,
  });

  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <div ref={skillReveal.ref} style={skillReveal.style}>
          <h1 className="project-heading">
            Professional <strong className="navy-accent">Skillset</strong>
          </h1>
          <Techstack />
        </div>

        <div ref={toolReveal.ref} style={toolReveal.style}>
          <h1 className="project-heading">
            <strong className="navy-accent">Tools</strong> I use
          </h1>
          <Toolstack />
        </div>

        <div ref={githubReveal.ref} style={githubReveal.style}>
          <Github />
        </div>

        <DownButton scrollToElement="projects" offsetElement={-25} />
      </Container>
    </Container>
  );
}

export default About;
