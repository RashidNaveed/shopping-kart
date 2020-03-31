import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export default class ColorSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }
  componentDidUpdate() {
    // console.log("Color is", this.props.color);
    if (this.state.colors.length === 0) {
      this.setState({ colors: this.props.color });
    }
  }
  render() {
    const selectedColor = this.props.selectedColor;
    const dropdown = this.state.colors.map(color => (
      <Dropdown.Item
        key={color}
        onClick={() => {
          this.props.handleColorSelection(color);
          this.props.validateColorSelection("valid");
        }}
      >
        {color}
      </Dropdown.Item>
    ));
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Color:
            {selectedColor.length > 0 ? selectedColor : "Click to choose"}
          </Dropdown.Toggle>
          <Dropdown.Menu>{dropdown}</Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
