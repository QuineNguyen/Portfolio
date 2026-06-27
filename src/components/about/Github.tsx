import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row className="github-row">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="navy-accent">Code</strong>
      </h1>
      <div className="github-calendar-wrapper">
        <GitHubCalendar
          username="QuineNguyen"
          blockSize={15}
          blockMargin={5}
          theme={{
            light: ["#ebedf0", "#dbeafe", "#93c5fd", "#3b82f6", "#1d4ed8"],
            dark: ["#161b22", "#0e306a", "#1e40af", "#3b82f6", "#60a5fa"],
          }}
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
