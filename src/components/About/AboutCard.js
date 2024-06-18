import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Thanks for stopping by, I'm{" "}
            <span className="purple">Andrew Zhao </span>
            based in <span className="purple"> California, USA.</span>
            <br />
            <br />
            As a{" "}
            <span className="purple">
              Senior Software Engineering Manager
            </span>{" "}
            at Deloitte, I am responsible for leading the development of{" "}
            <span className="purple">InfraSec</span> and{" "}
            <span className="purple">AppSec</span>
            products on <span className="purple">AWS</span>,{" "}
            <span className="purple">GCP</span> and{" "}
            <span className="purple">Azure</span>.
            <br />
            <br />I also built a{" "}
            <span className="purple">FinTech innovation center</span> within PwC
            - to solve technology problems for financial services clients in the
            intersection of cutting edge technology, modern product management,
            cybersecurity, and deep SME
            <br />
            <br />
            Additionally I led cloud engineering teams to modernize{" "}
            <span className="purple">legacy</span> application and transform
            them into <span className="purple">cloud native</span> applications.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
