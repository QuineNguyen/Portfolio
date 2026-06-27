import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineProject,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbCertificate } from "react-icons/tb";
import { Link as ScrollLink, scroller } from "react-scroll";
import logo from "../assets/about/logo.png";

const DESKTOP_OFFSETS: Record<string, number> = {
  home: -30,
  about: -60,
  projects: -27,
  certificates: -20,
  resume: -20,
  contactme: -20,
};

const MOBILE_OFFSETS: Record<string, number> = {
  home: -10,
  about: -10,
  projects: -10,
  certificates: -10,
  resume: -10,
  contactme: -10,
};

function NavBar() {
  const [expand, updateExpanded] = useState<boolean | string>(false);
  const [navColour, updateNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 767);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    function resizeHandler() {
      setIsMobile(window.innerWidth <= 767);
    }

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const handleNavClick = (target: string) => {
    updateExpanded(false);
    const offset = isMobile ? MOBILE_OFFSETS[target] : DESKTOP_OFFSETS[target];
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: offset,
    });
  };

  return (
    <Navbar
      expanded={!!expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container style={{ paddingTop: "10px" }}>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                activeClass="active"
                style={{ color: "white", paddingTop: "100px", cursor: "pointer" }}
                to="home"
                spy={true}
                smooth={true}
                offset={DESKTOP_OFFSETS.home}
                duration={500}
                onClick={() => handleNavClick("home")}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px", cursor: "pointer" }}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={DESKTOP_OFFSETS.about}
                duration={500}
                onClick={() => handleNavClick("about")}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px", cursor: "pointer" }}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={DESKTOP_OFFSETS.projects}
                duration={500}
                onClick={() => handleNavClick("projects")}
              >
                <AiOutlineProject style={{ marginBottom: "2px" }} /> Projects
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px", cursor: "pointer" }}
                activeClass="active"
                to="certificates"
                spy={true}
                smooth={true}
                offset={DESKTOP_OFFSETS.certificates}
                duration={500}
                onClick={() => handleNavClick("certificates")}
              >
                <TbCertificate style={{ marginBottom: "2px" }} /> Certificates
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px", cursor: "pointer" }}
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={DESKTOP_OFFSETS.resume}
                duration={500}
                onClick={() => handleNavClick("resume")}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                style={{ color: "white", paddingTop: "100px", cursor: "pointer" }}
                activeClass="active"
                to="contactme"
                spy={true}
                smooth={true}
                offset={DESKTOP_OFFSETS.contactme}
                duration={500}
                onClick={() => handleNavClick("contactme")}
              >
                <AiOutlineMessage style={{ marginBottom: "2px" }} /> Contact
              </ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

