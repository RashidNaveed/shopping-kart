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
    let price = 0;
    cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    console.log("cartArray is", cartArray);
    this.setState({ cartItems: cartArray }, () => {
      console.log("cartItem", this.state.cartItems);
      if (this.state.cartItems.length !== 0) {
        for (let i = 0; i < this.state.cartItems.length; i++) {
          price = 0 + this.state.cartItems[i].price;
        }
        this.setState({ totalPrice: price });
      }
    });
  }
  //   componentDidUpdate() {

  //     let cartArray = [];
  //     let price = 0;
  //     cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
  //     console.log("cartArray is", cartArray);
  //     this.setState({ cartItems: cartArray }, () => {
  //       console.log("cartItem", this.state.cartItems);
  //       //   console.log("price", this.state.cartItems.length);
  //       if (this.state.cartItems.length !== 0) {
  //         // console.log("length", this.state.cartItems.length);
  //         for (let i = 0; i < this.state.cartItems.length; i++) {
  //           price = price + this.state.cartItems[i].price;
  //         }
  //         // console.log("price", price);
  //         this.setState({ totalPrice: price });
  //         // console.log("total price", this.state.totalPrice);
  //       }
  //     });
  //   }
  addProduct = (title, size, color, price, image) => {
    console.log("passed data", title, size, color, price, image);

    const cartData = {
      title: title,
      price: price,
      image: image,
      size: size,
      color: color,
      quantity: 1
    };
    let cartArray = [];
    cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    if (cartArray.length > 0) {
      for (let i = 0; i < cartArray.length; i++) {
        if (
          cartArray[i].title === title &&
          cartArray[i].color === color &&
          cartArray[i].size === size
        ) {
          //   console.log("array before adding local storage", cartArray[i]);
          cartArray[i].quantity += 1;
          cartArray[i].price += cartData.price / 2;
          localStorage.setItem("cartItem", JSON.stringify(cartArray));
        } else {
          cartArray.push(cartData);
          localStorage.setItem("cartItem", JSON.stringify(cartArray));
        }
      }
    } else {
      cartArray.push(cartData);
      localStorage.setItem("cartItem", JSON.stringify(cartArray));
    }
    // let updatePrice = cartData.price + cartData.price
    // this.setState({totalPrice: updatePrice})
    let updateCartArray = [];
    let updatePrice = 0;
    updateCartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    this.setState({ cartItems: updateCartArray }, () => {
      if (updateCartArray.length !== 0) {
        for (let i = 0; i < updateCartArray.length; i++) {
          if (updateCartArray[i].quantity > 1) {
            console.log("quantity", updateCartArray[i].quantity);
            console.log("price", updateCartArray[i].price);

            updatePrice = 0 + updateCartArray[i].price / 2;
            console.log("price to show", updatePrice);
            this.setState({ totalPrice: updatePrice });
          }
        }
      }
    });
  };
  removeProduct = (title, size, color, price, image) => {
    console.log("passed data", title, size, color, price, image);

    const cartData = {
      title: title,
      price: price,
      image: image,
      size: size,
      color: color,
      quantity: 1
    };
    let cartArray = [];
    cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
    cartArray.push(cartData);
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
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
                                item.image
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
                                item.image
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
