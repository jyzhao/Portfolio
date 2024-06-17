import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMongodb, DiMysql } from "react-icons/di";
import { SiRedis, SiGraphql, SiPostgresql } from "react-icons/si";

function DBStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col>
    </Row>
  );
}

export default DBStack;
