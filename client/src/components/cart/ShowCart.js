import React, { Component } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../Layout";

export default class ShowCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      totalPrice: ""
    };
  }
  componentDidMount() {
    let cartArray = [];
    cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    this.setState({ cartItems: cartArray }, () => {
      let price = this.state.cartItems[0].price;
      if (this.state.cartItems.length !== 0) {
        for (let i = 1; i < this.state.cartItems.length; i++) {
          price = price + this.state.cartItems[i].price;
        }
        this.setState({ totalPrice: price });
      } else this.setState({ totalPrice: price });
    });
  }

  addProduct = (title, size, color, price, image, quantity) => {
    let cartArray = [];
    let addPrice = price / quantity;
    cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    if (cartArray.length > 0) {
      for (let i = 0; i < cartArray.length; i++) {
        if (
          cartArray[i].title === title &&
          cartArray[i].color === color &&
          cartArray[i].size === size
        ) {
          cartArray[i].quantity += 1;
          cartArray[i].price = cartArray[i].price + addPrice;
          localStorage.setItem("cartItem", JSON.stringify(cartArray));
        }
      }
    }

    let updateCartArray = [];
    // let updatePrice = 0;
    updateCartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    this.setState({ cartItems: updateCartArray }, () => {
      let price = this.state.cartItems[0].price;
      if (this.state.cartItems.length !== 0) {
        for (let i = 1; i < this.state.cartItems.length; i++) {
          price = price + this.state.cartItems[i].price;
        }
        this.setState({ totalPrice: price });
      } else this.setState({ totalPrice: price });
    });
  };
  removeProduct = (title, size, color, price, image, quantity) => {
    let cartArray = [];
    let addPrice = price / quantity;
    cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    if (cartArray.length > 0) {
      for (let i = 0; i < cartArray.length; i++) {
        if (
          cartArray[i].quantity > 1 &&
          cartArray[i].title === title &&
          cartArray[i].color === color &&
          cartArray[i].size === size
        ) {
          cartArray[i].quantity -= 1;
          cartArray[i].price = cartArray[i].price - addPrice;
          localStorage.setItem("cartItem", JSON.stringify(cartArray));
        }
      }
    }

    let updateCartArray = [];
    updateCartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    this.setState({ cartItems: updateCartArray }, () => {
      let price = this.state.cartItems[0].price;
      if (this.state.cartItems.length !== 0) {
        for (let i = 1; i < this.state.cartItems.length; i++) {
          console.log("in for loop", this.state.cartItems);
          price = this.state.cartItems[i].price - price;
          console.log("price for total is ", price);
        }
        this.setState({ totalPrice: price });
      } else this.setState({ totalPrice: price });
    });
  };
  render() {
    return (
      <Layout>
        <div className="mt-3">
          <div style={{ paddingTop: "70px", paddingBottom: "150px" }}>
            <Container>
              <h1 style={{ textAlign: "center", padding: "30px" }}>Cart</h1>
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.cartItems.map((item, id) => (
                    <tr key={id}>
                      <td>
                        <img
                          style={{ width: "30px" }}
                          src={item.image}
                          alt={item.title}
                        />
                        <p>
                          <b>{item.title}</b> | {item.size} | {item.color}
                        </p>
                      </td>
                      <td>
                        <p>
                          <b>Rs: {item.price}</b>
                        </p>
                      </td>
                      <td>
                        <p>
                          <button
                            style={{
                              color: "#072a48",
                              backgroundColor: "white",
                              border: "solid",
                              borderColor: "#072a48",
                              width: "30px",
                              cursor: "pointer",
                              borderWidth: "0.1ex"
                            }}
                            onClick={() =>
                              this.addProduct(
                                item.title,
                                item.size,
                                item.color,
                                item.price,
                                item.image,
                                item.quantity
                              )
                            }
                          >
                            +
                          </button>
                          <b>{" " + item.quantity + " "}</b>
                          <button
                            style={{
                              color: "#072a48",
                              backgroundColor: "white",
                              border: "solid",
                              borderColor: "#072a48",
                              width: "30px",
                              cursor: "pointer",
                              borderWidth: "0.1ex"
                            }}
                            onClick={() =>
                              this.removeProduct(
                                item.title,
                                item.size,
                                item.color,
                                item.price,
                                item.image,
                                item.quantity
                              )
                            }
                          >
                            -
                          </button>
                        </p>
                      </td>
                      <td>
                        <p>
                          <button
                            style={{
                              color: "white",
                              backgroundColor: "#072a48",
                              border: "solid",
                              borderColor: "#072a48",
                              width: "30px",
                              cursor: "pointer",
                              borderWidth: "0.1ex"
                            }}
                            onClick=""
                          >
                            x
                          </button>
                        </p>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <b>Subtotal</b>
                    </td>
                    <td>
                      <b>Rs: {this.state.totalPrice} </b>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <b>Shipping</b>
                    </td>
                    <td>
                      <b>Rs: 100</b>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <b>Rs: Total</b>
                    </td>
                    <td>
                      <b>Rs: {this.state.totalPrice + 100} </b>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div style={{ textAlign: "right" }}>
                <Link to="/checkout">
                  <Button>Check out</Button>
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </Layout>
    );
  }
}
