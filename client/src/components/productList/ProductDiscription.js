import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Image,
  Row,
  Col,
  Button,
  Modal,
  Container
} from "react-bootstrap";
// import RatingProduct from "./RatingProduct";
import SizeSelection from "./SizeSelection";
import ColorSelection from "./ColorSelection";
import AddToCart from "../cart/AddToCart";
import Layout from "../Layout";
import { Link } from "react-router-dom";
class ProductDiscription extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      selectedSize: "",
      selectedColor: "",
      missSizeMsg: "",
      missColorMsg: "",
      modalEdit: false
    };
  }
  componentDidMount() {
    this._isMounted = true;
    const id = this.props.match.params.id;

    axios.get(`http://localhost:4000/products/${id}`).then(data => {
      this.setState({ products: data.data });
    });
  }

  handleSizeSelection = selectedSize => {
    this.setState({ selectedSize });
  };

  handleColorSelection = selectedColor => {
    this.setState({ selectedColor });
  };

  validateSizeSelection = remark => {
    remark === "valid"
      ? this.setState({ missSizeMsg: "" })
      : this.setState({ missSizeMsg: remark });
  };

  validateColorSelection = remark => {
    remark === "valid"
      ? this.setState({ missColorMsg: "" })
      : this.setState({ missColorMsg: remark });
  };
  toggle = () => {
    if (
      this.state.selectedColor.length > 0 &&
      this.state.selectedSize.length > 0
    ) {
      this.setState({ modalEdit: !this.state.modalEdit });
    }
  };
  localStorage = () => {
    if (
      this.state.selectedColor.length > 0 &&
      this.state.selectedSize.length > 0
    ) {
      let cartArray = [];
      cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
      const cartData = {
        title: this.state.products.title,
        price: this.state.products.price,
        image: this.state.products.images,
        size: this.state.selectedSize,
        color: this.state.selectedColor,
        quantity: 1
      };
      if (
        cartArray.some(
          data =>
            data.title === cartData.title &&
            data.size === cartData.size &&
            data.color === cartData.color
        )
      ) {
        for (let i = 0; i < cartArray.length; i++) {
          cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];

          if (
            cartArray[i].title === cartData.title &&
            cartArray[i].color === cartData.color &&
            cartArray[i].size === cartData.size
          ) {
            cartArray[i].quantity += cartData.quantity;
            cartArray[i].price += cartData.price;
            localStorage.setItem("cartItem", JSON.stringify(cartArray));
          }
        }
      } else {
        cartArray.push(cartData);
        localStorage.setItem("cartItem", JSON.stringify(cartArray));
      }

      // for (let i = 0; i < cartArray.length && cartArray.length > 0; i++) {
      //   cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
      //   console.log("cartArray length", cartArray.length);
      //   console.log("value of i", i);

      //   if (
      //     cartArray[i].title === cartData.title &&
      //     cartArray[i].color === cartData.color &&
      //     cartArray[i].size === cartData.size
      //   ) {
      //     console.log(
      //       "array before adding local storage in loop if",
      //       cartArray[i]
      //     );
      //     cartArray[i].quantity += cartData.quantity;
      //     cartArray[i].price += cartData.price;
      //     localStorage.setItem("cartItem", JSON.stringify(cartArray));
      //   }
      //   if (cartArray[i].quantity <= 1) {
      //     console.log("cartData before pushing in loop else", cartData);
      //     cartArray.push(cartData);
      //     console.log("cartArray after pushing in loop else", cartArray);
      //     localStorage.setItem("cartItem", JSON.stringify(cartArray));
      //   }
      // }
      // if (cartArray.length === 0) {
      //   console.log("cartData before pushing in else ", cartData);
      //   cartArray.push(cartData);
      //   console.log("cartArray after pushing in else", cartArray);
      //   localStorage.setItem("cartItem", JSON.stringify(cartArray));
      // }
    }
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    let cartArray = [];
    cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    return (
      <Layout>
        <div className="mt-3">
          {/* <RatingProduct /> */}
          <div className="container">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={this.state.products.images} />
              <Card.Body>
                <Card.Title>{this.state.products.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {this.state.products.price}
                </Card.Subtitle>
                <Card.Text>{this.state.products.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <SizeSelection
                  size={this.state.products.size}
                  handleSizeSelection={this.handleSizeSelection}
                  selectedSize={this.state.selectedSize}
                  validateSizeSelection={this.validateSizeSelection}
                />
                {this.state.missSizeMsg.length > 0 ? (
                  <b style={{ color: "red" }}>*{this.state.missSizeMsg}</b>
                ) : (
                  ""
                )}
                <br />
                <ColorSelection
                  color={this.state.products.color}
                  selectedColor={this.state.selectedColor}
                  handleColorSelection={this.handleColorSelection}
                  validateColorSelection={this.validateColorSelection}
                />
                {this.state.missColorMsg.length > 0 ? (
                  <b style={{ color: "red" }}>*{this.state.missColorMsg}</b>
                ) : (
                  ""
                )}
                <br />
                <AddToCart
                  selectedColor={this.state.selectedColor}
                  selectedSize={this.state.selectedSize}
                  validateColorSelection={this.validateColorSelection}
                  validateSizeSelection={this.validateSizeSelection}
                  missSizeMsg={this.state.missSizeMsg}
                  missColorMsg={this.state.missColorMsg}
                  toggle={this.toggle}
                  localStorage={this.localStorage}
                />
              </Card.Footer>
            </Card>
          </div>
          <Modal show={this.state.modalEdit} onHide={this.toggle}>
            <Modal.Header closeButton>
              <Modal.Title>
                you have {cartArray.length}{" "}
                {cartArray.length > 0 ? "items" : "item"} in cart
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col xs={6} md={5}>
                    <Image src={this.state.products.images} fluid />
                  </Col>
                  <Col xs={6} md={4}>
                    <h3> {this.state.products.title} </h3>
                    <p>Rs: {this.state.products.price} </p>
                    <p>color: {this.state.selectedColor}</p>
                    <p>size: {this.state.selectedSize}</p>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Link to="/cart">
                <Button variant="secondary">View Cart</Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
      </Layout>
    );
  }
}
export default ProductDiscription;
