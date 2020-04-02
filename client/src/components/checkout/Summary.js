import React, { Component } from "react";
import { ListGroup, Col, Row } from "react-bootstrap";

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      totalPrice: ""
    };
  }
  componentDidMount() {
    let cartArray = [];
    cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    this.setState({ cartItems: cartArray }, () => {
      if (this.state.cartItems.length < 1) {
        this.setState({ emptyMessage: "Empty Cart", totalPrice: 0 });
      }
      if (this.state.cartItems.length !== 0) {
        let price = this.state.cartItems[0].price;
        if (this.state.cartItems.length !== 0) {
          for (let i = 1; i < this.state.cartItems.length; i++) {
            price = price + this.state.cartItems[i].price;
          }
          this.setState({ totalPrice: price });
        } else this.setState({ totalPrice: price });
      }
    });
  }
  render() {
    let shipping;
    this.state.totalPrice === 0 ? (shipping = 0) : (shipping = 100);
    return (
      <div>
        <ListGroup>
          <ListGroup.Item>Order Summary</ListGroup.Item>
          <ListGroup.Item>
            {this.state.cartItems.map((item, id) => (
              <Row key={id}>
                <Col xs="8">
                  <p>
                    x{item.quantity} {item.title}
                  </p>
                </Col>
                <Col xs="4">
                  <p>Rs: {item.price}</p>
                </Col>
              </Row>
            ))}
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs="8">
                <p>Subtotal</p>
              </Col>
              <Col xs="4">
                <p>Rs: {this.state.totalPrice}</p>
              </Col>
            </Row>
            <Row>
              <Col xs="8">
                <p>Shipping</p>
              </Col>
              <Col xs="4">
                <p>Rs: {shipping}</p>
              </Col>
            </Row>
            <Row>
              <Col xs="8">
                <p>Tax</p>
              </Col>
              <Col xs="4">
                <p>Rs: 0</p>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs="8">
                <p>Total</p>
              </Col>
              <Col xs="4">
                <b style={{ fontSize: "25px" }}>
                  Rs: {this.state.totalPrice + shipping}
                </b>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
