import React from "react";
import { ImPointRight } from "react-icons/im";

function Activities() {
  return (
    <blockquote className="blockquote mb-0" style={{ fontSize: "1rem" }}>
      <p className="home-about-body" style={{ textAlign: "justify", lineHeight: "1.8", paddingTop: "0px" }}>
        Apart from coding, here are some other activities that I love to do:
      </p>
      <ul style={{ 
        display: "flex", 
        gap: "20px", 
        flexWrap: "wrap", 
        justifyContent: "flex-start", 
        paddingLeft: 0, 
        marginTop: "15px", 
        marginBottom: "20px",
        listStyleType: "none"
      }}>
        <li className="about-activity">
          <ImPointRight style={{ color: "#60a5fa", marginRight: "10px" }} /> Playing Games
        </li>
        <li className="about-activity">
          <ImPointRight style={{ color: "#60a5fa", marginRight: "10px" }} /> Learning New Technologies
        </li>
        <li className="about-activity">
          <ImPointRight style={{ color: "#60a5fa", marginRight: "10px" }} /> Travelling
        </li>
      </ul>

      <p className="activities-quote" style={{ fontStyle: "italic", marginTop: "20px", marginBottom: "10px" }}>
        "Work hard in silence and let your success be your noise!"{" "}
      </p>
      <footer className="blockquote-footer"></footer>
    </blockquote>
  );
}

export default Activities;
