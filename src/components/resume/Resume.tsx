import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ResumeCard from "./ResumeCard";
import DownButton from "../DownButton";
import previewImg from "../../assets/resume/preview.png";
import cvImage from "../../assets/resume/cvimage.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function Resume() {
  const headingReveal = useScrollReveal<HTMLDivElement>({
    variant: "fade-down",
    threshold: 0.2,
  });

  const cardReveal = useScrollReveal<HTMLDivElement>({
    variant: "zoom-in",
    delay: 150,
    threshold: 0.1,
  });

  return (
    <Container fluid className="resume-section" id="resume">
      <Particle />
      <Container>
        <Row ref={headingReveal.ref} style={headingReveal.style}>
          <h1 className="project-heading">
            My <strong className="navy-accent">Resume</strong>
          </h1>
        </Row>
        <div ref={cardReveal.ref} style={cardReveal.style}>
          <ResumeCard
            previewImg={previewImg}
            detailImg={cvImage}
            resumeLink="https://drive.google.com/file/d/1TDgLcAlaWcnpvvwzT2iDICm0-ItkDNNL/view"
          />
        </div>
        <DownButton scrollToElement="contactme" offsetElement={130} />
      </Container>
    </Container>
  );
}

export default Resume;
