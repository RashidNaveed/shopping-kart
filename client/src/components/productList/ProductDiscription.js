import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Header from "../homepage/Header";
// import RatingProduct from "./RatingProduct";

class ProductDiscription extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      products: {}
    };
  }
  componentDidMount() {
    this._isMounted = true;
    const id = this.props.match.params.id;
    console.log("recived id is", id);
    axios.get(`http://localhost:4000/products/${id}`).then(data => {
      console.log("recived data is", data.data);
      this.setState({ products: data.data });
    });
  }
  //   componentDidUpdate() {
  //     this._isMounted = true;
  //     const id = this.props.match.params.id;
  //     axios.get(`http://localhost:4000/products/${id}`).then(data => {
  //       this.setState({ products: data.data });
  //     });
  //   }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div>
        <Header />
        {/* <RatingProduct /> */}
        <div className="container">
          <Card style={{ width: "20rem" }} className="mt-5">
            <Card.Img variant="top" src={this.state.products.images} />
            <Card.Body>
              <Card.Title>{this.state.products.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.state.products.price}
              </Card.Subtitle>
              <Card.Text>{this.state.products.description}</Card.Text>
              <Button variant="info" onClick={this.setCart}>
                Add to cart
              </Button>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
        {/* <div className="mt-2">
          <SizeSelection
            style="mt-2"
            sizesArray={products.size}
            infoItem={infoItem}
            handleSizeSelection={handleSizeSelection}
            selectedSize={selectedSize}
            validateSizeSelection={validateSizeSelection}
          />
          {sizeSelectionMissingRemark.length > 0 ? (
            <b style={{ color: "red" }}>*{sizeSelectionMissingRemark}</b>
          ) : (
            ""
          )}
        </div> */}
      </div>
    );
  }
}
export default ProductDiscription;
