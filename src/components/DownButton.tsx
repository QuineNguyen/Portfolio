import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiFillDownCircle } from "react-icons/ai";

interface DownButtonProps {
  scrollToElement: string;
  offsetElement: number;
  mobileOffsetElement?: number;
  style?: React.CSSProperties;
}

function DownButton({ scrollToElement, offsetElement, mobileOffsetElement, style }: DownButtonProps) {
  const [, updateExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentOffset = isMobile && mobileOffsetElement !== undefined 
    ? mobileOffsetElement 
    : offsetElement;

  return (
    <div className="scroll-icon" style={{ textAlign: "center", ...style }}>
      <ScrollLink
        style={{ color: "white", paddingTop: "30px", cursor: "pointer" }}
        activeClass="active"
        to={scrollToElement}
        spy={true}
        smooth={true}
        offset={currentOffset}
        duration={500}
        onClick={() => updateExpanded(false)}
      >
        <AiFillDownCircle
          style={{ color: "#3b82f6", marginTop: "-10px" }}
          size={35}
        />
      </ScrollLink>
    </div>
  );
}

export default DownButton;
