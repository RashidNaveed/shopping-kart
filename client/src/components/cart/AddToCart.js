import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class AddToCart extends Component {
  render() {
    const selectedColor = this.props.selectedColor;
    const selectedSize = this.props.selectedSize;
    const validateColorSelection = this.props.validateColorSelection;
    const validateSizeSelection = this.props.validateSizeSelection;
    const missSizeMsg = this.props.missSizeMsg;
    const missColorMsg = this.props.missColorMsg;
    console.log("In Add to Cart", missColorMsg, missSizeMsg);
    const color =
      missSizeMsg.length > 0 || missColorMsg.length > 0 ? "danger" : "success";

    return (
      <div>
        <Button
          variant={color}
          onClick={() => {
            selectedSize.length < 1 &&
              validateSizeSelection("Please, select a size");
            selectedColor.length < 1 &&
              validateColorSelection("Please, select a color");
            this.props.toggle();
            this.props.localStorage();
          }}
        >
          Add to Cart
        </Button>
      </div>
    );
  }
}
