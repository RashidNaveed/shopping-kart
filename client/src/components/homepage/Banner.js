import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage:
            'url("https://3dzip.org/wp-content/uploads/2019/01/3D-Fashion-Shop-11-Model-Free-Download-1.jpg")',
          backgroundSize: "cover"
        }}
      >
        <Container fluid style={{ height: "300px" }}>
          <div
            style={{
              textShadow: "3px 3px 3px grey",
              textAlign: "center",
              color: "white"
            }}
          >
            <h1 className="display-3" style={{ fontSize: "80px" }}>
              Fashion shop
            </h1>
            <p>Cool shop</p>
          </div>
          <div style={{ textAlign: "center", padding: "40px" }}>
            <Link to="/men">
              <Button> Shop Men </Button>
            </Link>{" "}
            <Link to="/women">
              <Button> Shop Women </Button>
            </Link>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}
