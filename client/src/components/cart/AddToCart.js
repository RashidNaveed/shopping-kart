import React from "react";
import { Button } from "react-bootstrap";

export default function AddToCart(props) {
  const selectedColor = props.selectedColor;
  const selectedSize = props.selectedSize;
  const validateColorSelection = props.validateColorSelection;
  const validateSizeSelection = props.validateSizeSelection;
  const missSizeMsg = props.missSizeMsg;
  const missColorMsg = props.missColorMsg;
  // console.log("In Add to Cart", missColorMsg, missSizeMsg);
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
          props.toggle();
          props.localStorage();
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
}
