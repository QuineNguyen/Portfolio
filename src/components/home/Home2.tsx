import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portrait from "../../assets/about/portrait.jpg";
import Tilt from "react-parallax-tilt";
import DownButton from "../DownButton";
import Activities from "./Activities";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home">
      <Container id="home2">
        <Row style={{ paddingBottom: "0px" }}>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={portrait}
                className="img-fluid tilt-img"
                alt="avatar"
              />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 className="home-about-title">
              LET ME <span className="navy-accent"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As an Information Technology graduate student at PTIT in Hanoi, I
              am driven by the challenge of solving real-world problems through
              creative technological solutions.
              <br />
              <br />
              I especially enjoy applying technology to tasks that I realize can
              be{" "}
              <i>
                <b className="navy-accent">automated.</b>
              </i>
              <br />
              <br />
              Beyond coding, I am a lifelong learner, dedicated to continuously
              upgrading both my{" "}
              <i>
                <b className="navy-accent">
                  technical expertise and soft skills.
                </b>
              </i>
            </p>
            <div style={{ marginTop: "20px", marginBottom: "40px" }}>
              <Activities />
            </div>
            <DownButton
              scrollToElement="tech"
              offsetElement={-150}
              style={{ paddingTop: "-10px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
