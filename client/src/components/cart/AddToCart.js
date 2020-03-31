import React, { Component } from "react";
import { Button, Modal, Row, Col, Container, Image } from "react-bootstrap";

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false
    };
  }
  toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

  render() {
    const selectedColor = this.props.selectedColor;
    const selectedSize = this.props.selectedSize;
    const validateColorSelection = this.props.validateColorSelection;
    const validateSizeSelection = this.props.validateSizeSelection;
    const missSizeMsg = this.props.missSizeMsg;
    const missColorMsg = this.props.missColorMsg;
    const title = this.props.title;
    const price = this.props.price;
    const image = this.props.image;
    console.log(
      "In Add to Cart",
      missColorMsg,
      missSizeMsg,
      "title is",
      title,
      "price is ",
      price
    );
    const color =
      missSizeMsg.length > 0 || missColorMsg.length > 0 ? "danger" : "success";

    return (
      <div>
        <Button
          variant={color}
          onClick={() => {
            selectedSize.length < 1 &&
              validateSizeSelection("Please, select a size");
            selectedColor.length < 1 &&
              validateColorSelection("Please, select a color");
          }}
        >
          Add to Cart
        </Button>
        <Modal show={this.state.modalEdit} onHide={this.toggle}>
          <Modal.Header closeButton>
            <Modal.Title>you have item in cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={image} fluid />
                </Col>
                <Col xs={6} md={4}>
                  <h3> {title} </h3>
                  <p>Rs: {price} </p>
                  <p>color: {selectedColor}</p>
                  <p>size: {selectedSize}</p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggle}>
              EditCart
            </Button>
            <Button variant="primary" onClick={this.toggle}>
              CheckOut
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
