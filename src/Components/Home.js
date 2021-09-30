import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",

  };

  const shape1 = {
    left: 0,
    right: 0,
    margin: "auto",
    top: "90px",
    position: "absolute",
  };

  const shape2 = {
    right: "380px",
    top: "280px",
    position: "absolute",
  };

  const shape3 = {
    right: "88px",
    top: "230px",
    position: "absolute",
  };

  const shape6 = {
    right: "272px",
    bottom: "0px",
    position: "absolute",
  };

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,

  };

  return (
    <div
      style={{ backgroundColor: "#2a283e", minHeight: "100vh", height: "auto" }}
    >
      <Container style={wrapper}>

        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src="https://o.remove.bg/downloads/704a04f9-aeaa-40e5-9f65-07b3ced8ce76/Programming-for-Beginners-10-Best-HTML-Coding-Practices-You-Must-Know-removebg-preview.png"
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#f0c19e" }}>Code Websites Whenever you like</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "20px",
              }}
            >
            A online code editor where you can edit HTML, CSS and
              JavaScript code, and live preview of site instantly.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web" className="button">
              Code Editor
            </Button>


          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
