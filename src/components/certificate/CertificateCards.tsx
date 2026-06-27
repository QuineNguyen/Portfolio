import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";

interface CertificateCardsProps {
  imgPath: string;
  title: string;
  link?: string;
  imgPosition?: string;
}

function CertificateCards(props: CertificateCardsProps) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="cert-img"
        style={{ objectPosition: props.imgPosition || "center" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.link && (
          <Button variant="primary" href={props.link} target="_blank">
            <BsBoxArrowUpRight /> &nbsp; View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificateCards;
