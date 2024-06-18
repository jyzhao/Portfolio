import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cspo from "../../Assets/Projects/cspo.png";
import dcat from "../../Assets/Projects/dcat.png";
import ccms from "../../Assets/Projects/ccms.png";
import creatorcon from "../../Assets/Projects/creatorcon.png";
import convergesecurity from "../../Assets/Projects/convergesecurity.png";
import smartauction from "../../Assets/Projects/smartauction.png";
import personafi from "../../Assets/Projects/personafi.png";
import collegeval from "../../Assets/Projects/collegeval.png";
import managed from "../../Assets/Projects/managed-development-process.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cspo}
              isBlog={false}
              title="Cloud Security Policy Orchestration"
              description="Cloud Security Policy Orchestration (CSPO) (FKA CloudQuest Guardian, acquired in 2021) is a policy-driven approach to shift-left security, can help with broad visibility into cloud assets across the multi-cloud landscape and enforce security policy-as-code uniformly across the software development life cycle."
              ghLink=""
              demoLink="https://www2.deloitte.com/us/en/pages/risk/solutions/cloud-security-policy-orchestration.html/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ccms}
              isBlog={false}
              title="Cyber Cloud Managed Services"
              description="Cyber Cloud Managed Services can help provide around-the-clock security protection and monitoring plus a wide range of options to help you move forward with confidence."
              ghLink=""
              demoLink="https://www2.deloitte.com/us/en/pages/risk/solutions/cloud-security-management-services.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convergesecurity}
              isBlog={false}
              title="ConvergeSECURITY"
              description="ConvergeSECURITY empowers enterprises to accelerate cloud transformation efforts with a combination of artificial intelligence (AI)-enabled cloud security and compliance product solutions, consulting expertise, and tailored resources leveraging actionable security threat intelligence and Amazon Security Lake (ASL), all in conjunction with the AWS Global Partner Security Initiative."
              ghLink=""
              demoLink="https://www2.deloitte.com/us/en/pages/risk/solutions/ConvergeSECURITY-cloud-security.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dcat}
              isBlog={false}
              title="Capital Allocation and Portfolio Optimization"
              description="Capital Allocation and Portfolio Optimization service is designed to address these top pain points identified by asset-intensive clients in their investment decision making processes."
              ghLink=""
              demoLink="https://www.deloitte.com/uk/en/services/consulting/services/capital-allocation-and-portfolio-optimisation.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartauction}
              isBlog={false}
              title="SmartAuction by Ally"
              description="Built for Ally, SmartAuction is an industry-leading online auto auction that offers access to a virtual inventory of wholesale vehicles for eligible dealers of all brands. It offers a virtual inventory of wholesale vehicles that select, approved dealers have the opportunity to buy before they are."
              ghLink=""
              demoLink="https://www.smartauctionlogin.com/home/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={collegeval}
              isBlog={false}
              title="CollegeVal"
              description="CollegeVal empowers you to make smarter decisions about your college education.  Unveil the true cost of your college options and calculate your potential return on investment (ROI) after graduation."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personafi}
              isBlog={false}
              title="PersonaFi"
              description="PersonaFi is your friendly AI assistant, here to guide you towards financial success! Set goals, track expenses, and create a personalized budget that fits your lifestyle; Explore different financial scenarios and see how your choices impact your long-term goals; Automate your savings, identify hidden costs, and make informed decisions about your financial future."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creatorcon}
              isBlog={false}
              title="CreatorCon"
              description="CreatorConnect enables creators to monetize their content through brand partnerships, sponsorships, and advertising deals while providing businesses with a seamless way to promote their products and services through authentic and engaging content. Additionally, it offers advanced content delivery and data streaming capabilities to enhance the user experience and provide real-time insights."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={managed}
              isBlog={true}
              title="Managed Development Process"
              description="A framework to identify and resolve Developer productivity anti-patterns, created by Andrew Zhao after working with dozens of engineering teams over a decade. It  tackles common pitfalls hindering developer productivity, offering practical strategies to streamline workflows, enhance communication, and implement effective code reviews. By learning to identify and resolve these anti-patterns."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
