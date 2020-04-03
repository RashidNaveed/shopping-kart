import React, { Component } from "react";
import {
  Collapse,
  Input,
  Label,
  Row,
  Col,
  ListGroupItem,
  Button,
  Badge,
  FormGroup
} from "reactstrap";

export default class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false
    };
  }
  toggle = () => {
    this.setState({ modalEdit: !this.state.modalEdit });
  };
  render() {
    // const firstName = this.props.firstName;
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
      shippingMethod
    } = this.props;
    return (
      <div style={{ borderBottom: "1px solid grey" }}>
        <ListGroupItem>
          <h3 style={{ cursor: "pointer" }} onClick={this.toggle}>
            <Badge color="secondary" pill size="sm">
              1
            </Badge>{" "}
            Customer Info {}
          </h3>
          <Collapse isOpen={this.state.modalEdit}>
            <Row>
              <Col md={6} style={{ paddingTop: "10px" }}>
                <Label for="First name">First name</Label>
                <Input
                  type="text"
                  onChange={this.props.onChangeFirstName}
                  value={firstName}
                />
              </Col>
              <Col md={6} style={{ paddingTop: "10px" }}>
                <Label for="exampleEmail">Last Name</Label>
                <Input
                  type="text"
                  onChange={this.props.onChangeLastName}
                  value={lastName}
                />
              </Col>
              <Col md={12} style={{ paddingTop: "10px" }}>
                <Label>Country</Label>
                <Input
                  type="select"
                  onChange={this.props.onChangeCountry}
                  value={country}
                >
                  <option id="Pakistan">Pakistan</option>
                  <option id="China">China</option>
                  <option id="India">India</option>
                </Input>
              </Col>
              <Col md={6} style={{ paddingTop: "10px" }}>
                <Label>City</Label>
                <Input
                  type="text"
                  onChange={this.props.onChangeCity}
                  value={city}
                />
              </Col>
              <Col md={6} style={{ paddingTop: "10px" }}>
                <Label>State/Province</Label>
                <Input
                  type="text"
                  onChange={this.props.onChangeProvince}
                  value={province}
                />
              </Col>
              <Col md={6} style={{ paddingTop: "10px" }}>
                <Label>Postal Code</Label>
                <Input
                  type="number"
                  onChange={this.props.onChangePostalCode}
                  value={postalCode}
                />
              </Col>
              <Col md={6} style={{ paddingTop: "10px" }}>
                <Label>Phone Number</Label>
                <Input
                  type="number"
                  onChange={this.props.onChangePhoneNumber}
                  value={phoneNumber}
                />
              </Col>
              <Col md={12} style={{ paddingTop: "10px" }}>
                <Label for="Address1">Address1</Label>
                <Input
                  type="text"
                  onChange={this.props.onChangeAdress1}
                  value={address1}
                />
              </Col>
              <Col md={12} style={{ paddingTop: "10px" }}>
                <Label>Address2</Label>
                <Input
                  type="text"
                  onChange={this.props.onChangeAdress2}
                  value={address2}
                />
              </Col>
              <Col xs={6} style={{ paddingTop: "10px" }}>
                <FormGroup style={{ paddingTop: "10px" }}>
                  <Label for="exampleCheckbox">
                    <u>Shipping Method</u>
                  </Label>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        onChange={() => this.props.onChangeShipppingMethod(1)}
                        checked={shippingMethod === 1}
                      />{" "}
                      express (2 days shipping)
                    </Label>
                  </FormGroup>
                  <FormGroup check disabled>
                    <Label check>
                      <Input
                        type="radio"
                        onChange={() => this.props.onChangeShipppingMethod(2)}
                        checked={shippingMethod === 2}
                      />{" "}
                      1 week shipping
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
              <div className="d-flex align-items-center">
                <Button
                  disabled={
                    !firstName ||
                    !lastName ||
                    !country ||
                    !city ||
                    !province ||
                    !postalCode ||
                    !phoneNumber ||
                    !address1
                  }
                  onClick={() => {
                    this.toggle();
                    this.props.toggle();
                  }}
                >
                  continue
                </Button>
              </div>
            </Row>
          </Collapse>
        </ListGroupItem>
      </div>
    );
  }
}
