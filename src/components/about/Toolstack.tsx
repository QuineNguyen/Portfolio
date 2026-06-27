import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiVisualstudio } from "react-icons/di";
import {
  SiPostman,
  SiXampp,
  SiIntellijidea,
  SiGooglecolab,
} from "react-icons/si";
import { RiRobot2Fill } from "react-icons/ri";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Antigravity">
        <RiRobot2Fill style={{ marginBottom: "20px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <DiVisualstudio style={{ marginBottom: "20px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman style={{ marginBottom: "20px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="XamPP">
        <SiXampp style={{ marginBottom: "20px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="IntelliJ">
        <SiIntellijidea style={{ marginBottom: "20px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Colab">
        <SiGooglecolab style={{ marginBottom: "20px" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
