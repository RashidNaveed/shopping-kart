import React, { Component } from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
      cartNumber: Number,
    };
  }
  componentDidMount() {
    let itemArray = [];
    itemArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    this.setState({ cartNumber: itemArray.length });

    let user = localStorage.getItem("users");
    JSON.stringify(user);
    console.log("user is ", user);
    if (user === "{}") {
      this.setState({ isUser: false });
    } else this.setState({ isUser: true });
  }
  render() {
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
            <LinkContainer to="/signup">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            {this.state.isUser === true ? (
              <LinkContainer to="/admin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
            ) : (
              ""
            )}
            <LinkContainer to="/cart">
              <Nav.Link>
                Cart{" "}
                <Badge pill variant="info">
                  {this.state.cartNumber}
                </Badge>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
