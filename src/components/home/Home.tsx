import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import gif from "../../assets/about/giphy.gif";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import DownButton from "../DownButton";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
      <Container fluid>
        <Container
          className="home-content"
          style={{
            paddingTop: "-100px",
            marginTop: "-50px",
            marginBottom: "0px",
          }}
        >
          <Row>
            <Col md={6} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "2.5em" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name">
                  {" "}
                  NGUYEN BA HOANG HUYNH{" "}
                </strong>
              </h1>
              <div className="typewriter-container">
                <Type />
              </div>
            </Col>

            <Col md={6} className="home-img-col">
              <img
                src={gif}
                className="img-fluid home-img"
                alt="home pic"
              />
            </Col>
          </Row>
        </Container>
        <DownButton
          scrollToElement="home2"
          offsetElement={20}
          style={{ paddingTop: "30px" }}
        />
      </Container>

      <Home2 />
      <Particle />
    </Container>
  );
}

export default Home;
