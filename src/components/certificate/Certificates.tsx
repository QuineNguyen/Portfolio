import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCards from "./CertificateCards";
import DownButton from "../DownButton";
import naver from "../../assets/certificates/naver.jpg";
import samsung from "../../assets/certificates/samsung.jpg";
import toeic from "../../assets/certificates/toeic.jpg";

function Certificates() {
  return (
    <Container fluid className="project-section" id="certificates">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="navy-accent">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of my certifications I achieved.
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            marginBottom: "10px",
          }}
        >
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={naver}
              title="Artificial Intelligence with Python"
              link="https://drive.google.com/file/d/1vViY4vPyV-Z9THnsWkoASxc-qJh5QE7g/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={samsung}
              title="Samsung Application of Algorithms"
              link="https://drive.google.com/file/d/1aSFx5IvdJrZdz2nE4pW8KcdI7HQl6U05/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={toeic}
              title="TOEIC Listening and Reading"
              link="https://drive.google.com/file/d/1DZmQbBUd0AHiPuiGFbcm8fzKIkWXVJjC/view"
              imgPosition="top"
            />
          </Col>
        </Row>
        <DownButton scrollToElement="resume" offsetElement={-30} />
      </Container>
    </Container>
  );
}

export default Certificates;
