import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  let itemArray = [];
  itemArray = JSON.parse(localStorage.getItem("cartItem")) || [];
  return (
    <div>
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
          <LinkContainer to="/admin">
            <Nav.Link>Admin</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>
              Cart{" "}
              <Badge pill variant="info">
                {itemArray.length}
              </Badge>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}
