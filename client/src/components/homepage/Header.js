import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="">
        <Navbar bg="dark" variant="dark">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/men">
              <Nav.Link>Men</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/women">
              <Nav.Link href="">Women</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
            <LinkContainer to="/products/add">
              <Nav.Link href="">Add Product</Nav.Link>
            </LinkContainer>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
