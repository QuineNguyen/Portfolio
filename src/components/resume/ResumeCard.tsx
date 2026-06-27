import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineFundView } from "react-icons/ai";

interface ResumeCardProps {
  previewImg: string;
  detailImg: string;
  resumeLink: string;
}

function ResumeCard({ previewImg, detailImg, resumeLink }: ResumeCardProps) {
  return (
    <Row className="resume-card-row">
      <Col md={7} className="resume-card-left-col">
        <p>Resume Preview</p>
        <img src={previewImg} alt="resume" className="resume-preview-img" />
      </Col>
      <Col md={5} className="resume-card-right-col">
        <Row className="align-items-center justify-content-center">
          <img
            src={detailImg}
            className="resume-detail-img"
            alt="resume details"
          />
        </Row>
        <Row className="align-items-center justify-content-center resume-btn-row">
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            className="resume-download-btn"
          >
            <AiOutlineFundView />
            &nbsp;View Full Resume
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default ResumeCard;
