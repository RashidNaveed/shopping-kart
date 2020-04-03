import React, { Component } from "react";
import Layout from "../Layout";
import Summary from "./Summary";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import CustomerInfo from "./CustomerInfo";
import Confirom from "./Confirom";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      country: "Pakistan",
      city: "",
      province: "",
      postalCode: 0,
      phoneNumber: 0,
      address1: "",
      address2: "",
      shippingMethod: 2,
      totalDelivery: 1,
      modalEdit: false,
      cartItems: [],
      totalPrice: "",
      redirect: false
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
  toggle = () => {
    this.setState({ modalEdit: !this.state.modalEdit });
  };
  onChangeFirstName = e => {
    this.setState({ firstName: e.target.value }, () => {
      console.log("FirstName is", this.state.firstName);
    });
  };
  onChangeLastName = e => this.setState({ lastName: e.target.value });
  onChangeCountry = e => {
    this.setState({ country: e.target.value });
  };
  onChangeCity = e => this.setState({ city: e.target.value });
  onChangeProvince = e => this.setState({ province: e.target.value });
  onChangePostalCode = e =>
    this.setState({ postalCode: Number(e.target.value) });
  onChangePhoneNumber = e =>
    this.setState({ phoneNumber: Number(e.target.value) });
  onChangeAdress1 = e => this.setState({ address1: e.target.value });
  onChangeAdress2 = e => this.setState({ address2: e.target.value });
  onChangeShipppingMethod = shippingMethod =>
    this.setState({ shippingMethod }, () => {
      console.log("shipping method", shippingMethod);
    });

  onSubmit = () => {
    const {
      firstName,
      lastName,
      country,
      city,
      province,
      postalCode,
      phoneNumber,
      address1,
      address2,
      totalDelivery,
      cartItems,
      totalPrice
    } = this.state;
    console.log("cartItem", cartItems);

    axios
      .post("http://localhost:4000/products/order", {
        customerInfo: {
          firstName,
          lastName,
          country,
          city,
          province,
          postalCode,
          phoneNumber,
          address1,
          address2
        },
        customerOrder: cartItems.map(x => ({
          itemTitle: x.title,
          selectedSize: x.size,
          selectedColor: x.color,
          price: x.price,
          quantity: x.quantity
        })),
        totalDelivery,
        totalAmount: totalPrice + 100
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    localStorage.removeItem("cartItem");
    alert("thanks for placing order");
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Layout>
        <Container style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <h1 style={{ paddingBottom: "20px" }}>Check out</h1>
          <Row>
            <Col md="8">
              <ListGroup>
                <CustomerInfo
                  onChangeFirstName={this.onChangeFirstName}
                  onChangeLastName={this.onChangeLastName}
                  onChangeCountry={this.onChangeCountry}
                  onChangeCity={this.onChangeCity}
                  onChangeProvince={this.onChangeProvince}
                  onChangePostalCode={this.onChangePostalCode}
                  onChangePhoneNumber={this.onChangePhoneNumber}
                  onChangeAdress1={this.onChangeAdress1}
                  onChangeAdress2={this.onChangeAdress2}
                  onChangeShipppingMethod={this.onChangeShipppingMethod}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  country={this.state.country}
                  city={this.state.city}
                  province={this.state.province}
                  postalCode={this.state.postalCode}
                  phoneNumber={this.state.phoneNumber}
                  address1={this.state.address1}
                  address2={this.state.address2}
                  shippingMethod={this.state.shippingMethod}
                  toggle={this.toggle}
                />
                <Confirom
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  country={this.state.country}
                  city={this.state.city}
                  province={this.state.province}
                  postalCode={this.state.postalCode}
                  phoneNumber={this.state.phoneNumber}
                  address1={this.state.address1}
                  address2={this.state.address2}
                  toggle={this.toggle}
                  modalEdit={this.state.modalEdit}
                  onSubmit={this.onSubmit}
                />
              </ListGroup>
            </Col>
            <Col md="4">
              <Summary />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
