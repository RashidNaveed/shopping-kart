// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import {
//   Dropdown
// } from "react-bootstrap";

// const propTypes = {
//   handleSizeSelection: PropTypes.func.isRequired,
//   sizesArray: PropTypes.array.isRequired,
//   selectedSize: PropTypes.string.isRequired,
//   validateSizeSelection: PropTypes.func.isRequired
// };

// class SizeSelection extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dropdownOpen: false
//     };
//   }

//   toggle = () => {
//     this.setState(prevState => ({
//       dropdownOpen: !prevState.dropdownOpen
//     }));
//   };

//   render() {
//     const {
//       handleSizeSelection,
//       sizesArray,
//       selectedSize,
//       validateSizeSelection
//     } = this.props;
//     const dropDownList = sizesArray.map(x => (
//       <Dropdown.Item
//         key={x}
//         onClick={() => {
//           return handleSizeSelection(x), validateSizeSelection("valid");
//         }}
//       >
//         {x}
//       </Dropdown.Item>
//     ));
//     return (
//       <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//         <Dropdown.Toggle caret outline color="secondary">
//           Size: {selectedSize.length > 0 ? selectedSize : "Click to choose"}
//         </Dropdown.Toggle>
//         <Dropdown.Menu>{dropDownList}</Dropdown.Menu>
//       </Dropdown>
//     );
//   }
// }

// SizeSelection.propTypes = propTypes;

// export default SizeSelection;
