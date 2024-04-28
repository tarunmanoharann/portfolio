import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import scribble from "../../Assets/Projects/Scribble.png"
import smoothgulp from "../../Assets/Projects/Smoothgulp.png"

function Projects({}) {
  return (
    <Container fluid className="project-section" >
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scribble}
              isBlog={false}
              title="Scribble"
              description="Unleash your mind's masterpiece. Immerse yourself in a realm where stories come alive through the magic of words. Explore, create, and get lost in the art of storytelling on our unique literary canvas"
              ghLink="https://github.com/tarunmanoharan/Scribble"
              demoLink="https://scribble-bice.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smoothgulp}
              isBlog={false}
              title="SmoothGulp"
              description="Sip into satisfaction. Elevate your taste experience with our curated collection of refreshing beverages. From smooth sips to delightful gulps, discover a symphony of flavors at your fingertips."
              ghLink="https://github.com/tarunmanoharan/Beverage"
              demoLink="https://smoothgulp.vercel.app/"
            />
          </Col>
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
