import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker } from "react-icons/di";
import { SiKubernetes, SiTerraform, SiHelm, SiJenkins } from "react-icons/si";

function DevOpsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
    </Row>
  );
}

export default DevOpsStack;
