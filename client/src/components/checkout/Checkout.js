import React, { Component } from "react";
import Layout from "../Layout";
import Summary from "./Summary";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import CustomerInfo from "./CustomerInfo";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      province: "",
      postalCode: Number,
      phoneNumber: Number,
      address1: "",
      address2: "",
      shippingMethod: 2,
      formIsValid: false,
      totalDelivery: 5
    };
  }
  onChangeFirstName = e => this.setState({ firstName: e.target.value });
  onChangeLastName = e => this.setState({ lastName: e.target.value });
  onChangeCountry = e => this.setState({ country: e.target.value });
  onChangeCity = e => this.setState({ city: e.target.value });
  onChangeProvince = e => this.setState({ province: e.target.value });
  onChangePostalCode = e =>
    this.setState({ postalCode: Number(e.target.value) });
  onChangePhoneNumber = e =>
    this.setState({ phoneNumber: Number(e.target.value) });
  onChangeAdress1 = e => this.setState({ address1: e.target.value });
  onChangeAdress2 = e => this.setState({ address2: e.target.value });
  onChangeShipppingMethod = shippingMethod => this.setState({ shippingMethod });
  formValidator = formIsValid => this.setState({ formIsValid });
  render() {
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
                  formValidator={this.formValidator}
                  formIsValid={this.state.formIsValid}
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
