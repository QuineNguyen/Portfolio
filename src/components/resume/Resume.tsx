import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ResumeCard from "./ResumeCard";
import DownButton from "../DownButton";
import previewImg from "../../assets/resume/preview.png";
import cvImage from "../../assets/resume/cvimage.png";

function Resume() {
  return (
    <Container fluid className="resume-section" id="resume">
      <Particle />
      <Container>
        <Row>
          <h1 className="project-heading">
            My <strong className="navy-accent">Resume</strong>
          </h1>
        </Row>
        <ResumeCard
          previewImg={previewImg}
          detailImg={cvImage}
          resumeLink="https://drive.google.com/file/d/1TDgLcAlaWcnpvvwzT2iDICm0-ItkDNNL/view"
        />
        <DownButton scrollToElement="contactme" offsetElement={130} />
      </Container>
    </Container>
  );
}

export default Resume;
