import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import ProjectCard from "../Projects/ProjectCards";
import Card from "react-bootstrap/Card";

import docker from "../../Assets/Certifications/docker.png";
import gcp_security_engineer from "../../Assets/Certifications/professional-cloud-security-engineer-certification.png";
import gcp_cloud_engineer from "../../Assets/Certifications/gcp_cloud_engineer.png";
import aws_cloud_practitioner from "../../Assets/Certifications/aws-certified-cloud-practitioner.png";
import aws_solution_architect from "../../Assets/Certifications/aws-certified-solutions-architect-associate.png";
import aws_security_specialty from "../../Assets/Certifications/aws-certified-security-specialty.png";
import terraform from "../../Assets/Certifications/hashicorp-certified-terraform-associate-002.png";
import agile from "../../Assets/Certifications/pmi-agile-certified-practitioner-pmi-acp.png";

function ResumeNew() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I've earned over the years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <Card.Img
              src={gcp_cloud_engineer}
              alt="card-img"
              className="certification-card"
            />
          </Col>
          <Col md={3} className="project-card">
            <Card.Img
              src={gcp_security_engineer}
              alt="card-img"
              className="certification-card"
            />
          </Col>
          <Col md={3} className="project-card">
            <Card.Img
              src={aws_cloud_practitioner}
              alt="card-img"
              className="certification-card"
            />
          </Col>
          <Col md={3} className="project-card">
            <Card.Img
              src={aws_solution_architect}
              alt="card-img"
              className="certification-card"
            />
          </Col>
          <Col md={3} className="project-card">
            <Card.Img
              src={aws_security_specialty}
              alt="card-img"
              className="certification-card"
            />
          </Col>
          <Col md={3} className="project-card">
            <Card.Img
              src={terraform}
              alt="card-img"
              className="certification-card"
            />
          </Col>
          <Col md={3} className="project-card">
            <Card.Img
              src={docker}
              alt="card-img"
              className="certification-card"
            />
          </Col>
          <Col md={3} className="project-card">
            <Card.Img
              src={agile}
              alt="card-img"
              className="certification-card"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
