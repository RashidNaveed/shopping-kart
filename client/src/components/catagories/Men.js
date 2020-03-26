import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Card, CardImg } from "react-bootstrap";
import Header from "../homepage/Header";

class Men extends Component {
  constructor(props) {
    super(props);
    this.state = {
      men: [
        {
          imgSrc:
            "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=717ae13fa0e515d1c7c9e92456439845&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          cardTitle: "Polos",
          linkCategory: "Polos"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1530856021941-02c71be5926f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d29673aa02db77423cf5ca770bd6d8e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          cardTitle: "Shirts",
          linkCategory: "Shirts"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1421986386270-978ed214ec60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f6cec57034960f50caf64c5af9c26d4&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          cardTitle: "Pants",
          linkCategory: "Pants"
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1530856021941-02c71be5926f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d29673aa02db77423cf5ca770bd6d8e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
          cardTitle: "Jackets",
          linkCategory: "Jackets"
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
            {this.state.men.map((item, id) => (
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
export default Men;
