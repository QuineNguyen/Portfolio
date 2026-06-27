import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiJava } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiJavascript,
  SiPhp,
} from "react-icons/si";

function Techstack() {
  return (
    <Container id="tech">
      <Row style={{ justifyContent: "center" }}>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus style={{ marginBottom: "20px" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandCSharp style={{ marginBottom: "20px" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava style={{ marginBottom: "20px" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript style={{ marginBottom: "20px" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp style={{ marginBottom: "20px" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython style={{ marginBottom: "20px" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
