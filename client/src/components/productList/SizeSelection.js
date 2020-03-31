import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export default class SizeSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: []
    };
  }
  componentDidUpdate() {
    // console.log("selected size is", this.props.selectedSize);
    // console.log(" size is", this.props.size);
    if (this.state.sizes.length === 0) {
      this.setState({ sizes: this.props.size });
    }
  }
  render() {
    const selectedSize = this.props.selectedSize;
    // console.log("in render", selectedSize);
    const dropdown = this.state.sizes.map(size => (
      <Dropdown.Item
        key={size}
        onClick={() => {
          this.props.handleSizeSelection(size);
          this.props.validateSizeSelection("valid");
        }}
      >
        {size}
      </Dropdown.Item>
    ));
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary">
            Size:
            {selectedSize.length > 0 ? selectedSize : "Click to choose"}
          </Dropdown.Toggle>
          <Dropdown.Menu>{dropdown}</Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
