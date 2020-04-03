import React, { Component } from "react";
import { Badge, Button, ListGroupItem, Collapse, Col, Row } from "reactstrap";

export default class Confirom extends Component {
  render() {
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
      modalEdit
    } = this.props;
    return (
      <div style={{ borderBottom: "1px solid grey" }}>
        <ListGroupItem>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.props.toggle();
            }}
          >
            <Badge color="secondary" pill size="sm">
              2
            </Badge>{" "}
            Confirm Details
          </h3>
          <Collapse isOpen={modalEdit}>
            <Row>
              <Col md="8">
                <h4>Delivery address:</h4>
                <div>
                  First Name: <b>{firstName}</b>
                </div>
                <div>
                  Last Name: <b>{lastName}</b>
                </div>
                <div>
                  Tel: <b>{phoneNumber}</b>
                </div>
                <div>
                  Country: <b>{country}</b>
                </div>
                <div>
                  City: <b>{city}</b>
                </div>
                <div>
                  State/Province: <b>{province}</b>
                </div>
                <div>
                  Postal Code: <b>{postalCode}</b>
                </div>
                <div>
                  Address: <b>{address1 + " " + address2}</b>
                </div>
              </Col>

              <Col md="8">
                <br />
                <Button
                  onClick={this.props.onSubmit}
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
                >
                  Confirm
                </Button>
              </Col>
            </Row>
          </Collapse>
        </ListGroupItem>
      </div>
    );
  }
}
