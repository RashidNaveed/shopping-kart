import React, { Component } from "react";
import {
  Button,
  Modal,
  ListGroup,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      title: this.props.infos.title,
      colors: this.props.infos.color,
      sizes: this.props.infos.size,
      tags: this.props.infos.tags,
      images: this.props.infos.images,
      description: this.props.infos.description,
      price: this.props.infos.price
    };
  }

  toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

  onSubmit = (id, title, price, color, size, tags, images, description) => {
    console.log("recived id is", id);
    axios
      .put(`http://localhost:4000/products/edit/${id}`, {
        title,
        price,
        color: (color.slice(0) + "").replace(/\s/g, "").split(","),
        size: (size.slice(0) + "").replace(/\s/g, "").split(","),
        tags: (tags.slice(0) + "").replace(/\s/g, "").split(","),
        images: (images.slice(0) + "").replace(/\s/g, "").split(","),
        description
      })
      .then(response => {
        this.setState({ modalEdit: !this.state.modalEdit });
        console.log(response);
      })
      .then(() => {
        window.location.reload(true);
      })
      .catch(err => {
        console.log("error is", err);
      });
  };

  onChangeTitle = e => this.setState({ title: e.target.value });
  onChangePrice = e => this.setState({ price: e.target.value });
  onChangeColor = e => this.setState({ colors: e.target.value });
  onChangeSizes = e => this.setState({ sizes: e.target.value });
  onChangeTags = e => this.setState({ tags: e.target.value });
  onChangeImages = e => this.setState({ images: e.target.value });
  onChangeDescription = e => this.setState({ description: e.target.value });

  render() {
    const {
      title,
      colors,
      sizes,
      tags,
      images,
      description,
      price
    } = this.state;
    const { _id } = this.props.infos;

    return (
      <div>
        <Button variant="primary" size="sm" onClick={this.toggle}>
          <FiEdit2 />
        </Button>
        <Modal
          show={this.state.modalEdit}
          onHide={this.toggle}
          className={this.props.className}
        >
          <Modal.Header toggle={this.toggle}>
            {this.props.infos.title} - (id: {_id})
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder={"default: " + this.props.infos.title}
                  value={title}
                  onChange={this.onChangeTitle}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Price $</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder={"default: " + this.props.infos.price}
                  value={price}
                  onChange={this.onChangePrice}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Colors</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder={
                    "default: " + this.props.infos.color.map(x => " " + x)
                  }
                  value={colors}
                  onChange={this.onChangeColor}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Sizes</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder={
                    "default: " + this.props.infos.size.map(x => x + " " + x)
                  }
                  value={sizes}
                  onChange={this.onChangeSizes}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Category</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder={"default: " + this.props.infos.tags}
                  value={tags}
                  onChange={this.onChangeTags}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Images</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="textarea"
                  placeholder={
                    "default: " + this.props.infos.images.map(x => x + " " + x)
                  }
                  value={images}
                  onChange={this.onChangeImages}
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>description</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="textarea"
                  placeholder={"default: " + this.props.infos.description}
                  value={description}
                  onChange={this.onChangeDescription}
                />
              </InputGroup>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() =>
                this.onSubmit(
                  _id,
                  title,
                  price,
                  colors,
                  sizes,
                  tags,
                  images,
                  description
                )
              }
            >
              Confirm the changes?
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

export default EditProduct;
