import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="justify-content-center">
        <Col md="12" className="footer-copywright" style={{ color: "#cbd5e1", fontSize: "14px" }}>
          <h3>Copyright © {year} Huynh Nguyen</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
