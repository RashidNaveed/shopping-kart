import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Header from "../homepage/Header";
// import RatingProduct from "./RatingProduct";
import SizeSelection from "./SizeSelection";
import ColorSelection from "./ColorSelection";
import AddToCart from "../cart/AddToCart";
class ProductDiscription extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      selectedSize: "",
      selectedColor: "",
      missSizeMsg: "",
      missColorMsg: ""
    };
  }
  componentDidMount() {
    this._isMounted = true;
    const id = this.props.match.params.id;
    // console.log("recived id is", id);
    axios.get(`http://localhost:4000/products/${id}`).then(data => {
      // console.log("recived data is", data.data);
      this.setState({ products: data.data });
    });
  }
  handleSizeSelection = selectedSize => {
    this.setState({ selectedSize });
    // console.log("selected size in parent", selectedSize);
  };

  handleColorSelection = selectedColor => {
    this.setState({ selectedColor });
    // console.log("selected color in parent", selectedColor);
  };

  validateSizeSelection = remark =>
    remark === "valid"
      ? this.setState({ missSizeMsg: "" })
      : this.setState({ missSizeMsg: remark });

  validateColorSelection = remark =>
    remark === "valid"
      ? this.setState({ missColorMsg: "" })
      : this.setState({ missColorMsg: remark });
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div>
        <Header />
        {/* <RatingProduct /> */}
        <div className="container">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={this.state.products.images} />
            <Card.Body>
              <Card.Title>{this.state.products.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.state.products.price}
              </Card.Subtitle>
              <Card.Text>{this.state.products.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <SizeSelection
                size={this.state.products.size}
                handleSizeSelection={this.handleSizeSelection}
                selectedSize={this.state.selectedSize}
                validateSizeSelection={this.validateSizeSelection}
              />
              {this.state.missSizeMsg.length > 0 ? (
                <b style={{ color: "red" }}>*{this.state.missSizeMsg}</b>
              ) : (
                ""
              )}
              <br />
              <ColorSelection
                color={this.state.products.color}
                selectedColor={this.state.selectedColor}
                handleColorSelection={this.handleColorSelection}
                validateColorSelection={this.validateColorSelection}
              />
              {this.state.missColorMsg.length > 0 ? (
                <b style={{ color: "red" }}>*{this.state.missColorMsg}</b>
              ) : (
                ""
              )}
              <br />
              <AddToCart
                selectedColor={this.state.selectedColor}
                selectedSize={this.state.selectedSize}
                validateColorSelection={this.validateColorSelection}
                validateSizeSelection={this.validateSizeSelection}
                missSizeMsg={this.state.missSizeMsg}
                missColorMsg={this.state.missColorMsg}
                title={this.state.products.title}
                price={this.state.products.price}
                image={this.state.products.images}
              />
            </Card.Footer>
          </Card>
        </div>
        <div></div>
      </div>
    );
  }
}
export default ProductDiscription;
