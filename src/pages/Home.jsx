import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Home.css";
import logo from "../images/Logo.png";

function Home() {
  return (
    <div>
      <img className='w-100' src={logo} alt="Logo" />
      <Container>
        <Row>
          <Col>
            <div className="main-head">
              <h1 className="display-4 fw-bold">Hello, It's Me Jeswin Joseph</h1>
              <p className="lead">I'm Jeswin, a MERN stack developer with a passion for creating web experiences.
. I <br/>{"\n"}specialize in MongoDB, Express.js, React, and Node.js. Let's build something amazing together!</p>
              {/* Provide a valid href for the anchor tag */}
              <a href="/about"><button className="btn-btn-brand me-3">Read More..</button></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
