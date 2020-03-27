import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { FiXSquare } from "react-icons/fi";
import axios from "axios";

class DeleteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false
    };
  }

  handleDelete = id => {
    console.log("recived id is", id);
    axios
      .delete(`http://localhost:4000/products/delete/${id}`)
      .then(response => {
        console.log(response);
        this.setState({ modalEdit: !this.state.modalEdit });
      })
      .then(() => {
        window.location.reload(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

  render() {
    const { title, id } = this.props;
    return (
      <div>
        <Button variant="danger" size="sm" onClick={this.toggle}>
          <FiXSquare />
        </Button>
        <Modal
          show={this.state.modalEdit}
          onHide={this.toggle}
          className={this.props.className}
        >
          <Modal.Header toggle={this.toggle}>{title}</Modal.Header>
          <Modal.Body>You confirm deleting item ID: {id}?</Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => this.handleDelete(id, title)}
            >
              Confirm
            </Button>{" "}
            <Button variant="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default DeleteProduct;
