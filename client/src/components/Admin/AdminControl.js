import React, { Component } from "react";
import ItemTable from "./ItemTable";
import AddProduct from "./AddProduct";
import Header from "../homepage/Header";
import { Tab, Nav, Row, Col } from "react-bootstrap";

export default class AdminControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Tab.Container defaultActiveKey="second">
          <Row>
            <Col>
              <Nav variant="pills" className="row-flex">
                <Nav.Link
                  eventKey="first"
                  style={{
                    backgroundColor: "#66bceb",
                    color: "white"
                  }}
                >
                  Add Items
                </Nav.Link>

                <Nav.Link
                  eventKey="second"
                  style={{
                    backgroundColor: "#cd5957",
                    color: "white"
                  }}
                >
                  Update/Delete Items
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {" "}
                <AddProduct
                  stylesTab2={{
                    cursor: "pointer",
                    backgroundColor: "#cd5957",
                    color: "white"
                  }}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ItemTable
                  stylesTab1={{
                    cursor: "pointer",
                    backgroundColor: "#66bceb",
                    color: "white"
                  }}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </div>
    );
  }
}
