import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const styles = {
    backgroundColor: "#343a40",
    paddingTop: "50px",
    paddingBottom: "50px",
    color: "white",
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <Container>
        <Row>
          <Col md="12" style={{ textAlign: "center", paddingBottom: "30px" }}>
            <b>Your footer</b>
          </Col>
        </Row>
        <Row>
          <Col md="4">Help</Col>
          <Col md="4">About</Col>
          <Col md="4">Terms & Policies </Col>
        </Row>
        <Row>
          <Col md="4">Order status</Col>
          <Col md="4">Company</Col>
          <Col md="4">Document</Col>
        </Row>
        <Row>
          <Col md="4">Contact us</Col>
          <Col md="4">Careers</Col>
          <Col md="4">Privacy</Col>
        </Row>
        <Row>
          <Col md="12" style={{ textAlign: "center", paddingTop: "30px" }}>
            Copyright your website © 2020 All Rights Reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
}
