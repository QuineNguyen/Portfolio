import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 999,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        <div
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <AiOutlineArrowUp size={24} />
        </div>
      </ScrollLink>
    </div>
  );
}

export default ScrollToTop;
