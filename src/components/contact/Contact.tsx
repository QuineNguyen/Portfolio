import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";

interface ContactConfig {
  YOUR_EMAIL: string;
  YOUR_FONE: string;
}

const contactConfig: ContactConfig = {
  YOUR_EMAIL: "huynh6255@gmail.com",
  YOUR_FONE: "+84375258041",
};

export default function Contact() {
  return (
    <Container fluid className="contact-section" id="contactme" style={{ paddingBottom: "100px", paddingTop: "50px" }}>
      <Container>
        <Row className="mt-3 justify-content-center">
          <Col lg="8" className="text-center">
            <h1
              className="display-4 mb-4"
              style={{ color: "white" }}
            >
              Contact{" "}
              <strong className="navy-accent">Me</strong>{" "}
              <span className="wave">👋</span>
            </h1>
          </Col>
        </Row>
        <Row
          className="sec_sp justify-content-center"
          style={{ color: "white", borderRadius: "20px" }}
        >
          <Col lg="8" className="mb-5 text-center d-flex flex-column align-items-center">
            <h3
              className="color_sec py-4"
              style={{ fontSize: "35px", fontFamily: "courier" }}
            >
              Get in touch
            </h3>
            <address style={{ fontSize: "20px", fontFamily: "courier" }}>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contactConfig.YOUR_EMAIL}`}
                style={{ color: "#60a5fa" }}
              >
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              <p style={{ fontFamily: "courier", fontSize: "20px" }}>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            </address>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Typewriter
                options={{
                  strings: ["Let's do something great together"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  cursor: "_",
                  wrapperClassName: "Typewriter__string",
                  cursorClassName: "Typewriter__cursor_contact",
                }}
              />
            </div>
            <br />
            <ul className="home-about-social-links d-flex justify-content-center p-0">
              <li className="social-icons">
                <a
                  href="https://github.com/QuineNguyen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub style={{ marginBottom: "10px" }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/nguyen.huynh.11953/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook style={{ marginBottom: "10px" }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:huynh6255@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail style={{ marginBottom: "10px" }} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/huynh-nguyen-92209a326/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillLinkedin style={{ marginBottom: "10px" }} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
