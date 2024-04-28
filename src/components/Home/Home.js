import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tarunProfile from "../../Assets/tarundp.jpg"
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
             

              <h1 className="heading-name">
                <strong className="main-name"> TARUN MANOHARAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign:"center", alignItems:"center" }}>
              <img
                src={tarunProfile}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", opacity:0.4,borderRadius:"1em"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
