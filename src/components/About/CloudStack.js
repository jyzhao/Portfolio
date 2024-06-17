import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAws, DiGoogleCloudPlatform, DiDocker } from "react-icons/di";
import { SiMicrosoftazure } from "react-icons/si";

function CloudStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
    </Row>
  );
}

export default CloudStack;
