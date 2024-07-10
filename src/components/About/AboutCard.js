import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Tarun </span>
            from <span className="green"> Erode, India.</span>
            <br />
            I am currently pursuing <span className="green">  Bachelors Degree in Computer Science Engineering</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(41,158,152)", fontWeight: "bold" }}>
            "One day (or) Day One !!"{" "}
          </p>
          <footer className="blockquote-footer">Tarun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
