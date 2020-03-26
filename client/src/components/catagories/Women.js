import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Card, CardImg } from "react-bootstrap";
import Header from "../homepage/Header";

class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      women: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27aecaf25f31cf45d2de3ad774dad6ed&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          cardTitle: "Dresses",
          linkCategory: "Dresses"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1485527691629-8e370684924c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6f450a6506599df62dc29593779a1b3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          cardTitle: "Cardigans",
          linkCategory: "Cardigans"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42226a7bf3b99eec89267859b4f36114&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          cardTitle: "Tops",
          linkCategory: "Tops"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1508445861827-7711f397113a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b8561c6e78192892aae3c6943928c93&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          cardTitle: "Trench Coats",
          linkCategory: "Trench Coats"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Col md="12">
          <h1
            style={{ fontSize: "40px", textAlign: "center", padding: "20px" }}
          >
            Men selection
          </h1>
          <Row>
            {this.state.women.map((item, id) => (
              <Col md="4" style={{ marginBottom: "20px" }} key={id}>
                <Card>
                  <div
                    style={{ textAlign: "center" }}
                    onClick={() => item.cardTitle}
                  >
                    <CardImg
                      src={item.imgSrc}
                      alt="Card image cap"
                      style={{ boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.75)" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "40%",
                        textAlign: "center",
                        width: "100%",
                        color: "white",
                        fontSize: "200%"
                      }}
                    >
                      <b> {item.cardTitle} </b>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </div>
    );
  }
}
export default Women;
