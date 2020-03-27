import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      color: "",
      size: "",
      tags: "",
      images: "",
      description: "",
      price: 0
    };
  }

  onSubmit = (title, price, color, size, tags, images, description) => {
    axios
      .post("http://localhost:4000/products/add", {
        title,
        price,
        color: (color.slice(0) + "").replace(/\s/g, "").split(","),
        size: (size.slice(0) + "").replace(/\s/g, "").split(","),
        tags: (tags.slice(0) + "").replace(/\s/g, "").split(","),
        images: (images.slice(0) + "").replace(/\s/g, "").split(","),
        description
      })
      .then(res => {
        console.log(res);
      })
      .then(() => {
        window.location.reload(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeTitle = e => this.setState({ title: e.target.value });
  onChangePrice = e => this.setState({ price: e.target.value });
  onChangeColor = e => this.setState({ color: [e.target.value] });
  onChangesize = e => this.setState({ size: e.target.value });
  onChangeTags = e => this.setState({ tags: [e.target.value] });
  onChangeImages = e => this.setState({ images: [e.target.value] });
  onChangeDescription = e => this.setState({ description: e.target.value });

  render() {
    const { title, price, color, size, tags, images, description } = this.state;
    return (
      <div>
        <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <h1>Add new item</h1>
          <Form>
            <Form.Group>
              <Form.Label>Item's name</Form.Label>
              <Form.Control
                placeholder="Product Name"
                type="text"
                name="title"
                value={title}
                onChange={this.onChangeTitle}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="example: $:10"
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.onChangePrice}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>color available</Form.Label>
              <Form.Control
                placeholder="color1, color2, color3"
                type="text"
                name="color"
                value={this.state.color}
                onChange={this.onChangeColor}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>size available</Form.Label>
              <Form.Control
                placeholder="XS, L, XL"
                type="text"
                name="size"
                value={this.state.size}
                onChange={this.onChangesize}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                placeholder="Polos,Shirts"
                name="tags"
                value={this.state.tags}
                onChange={this.onChangeTags}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Images</Form.Label>
              <Form.Control
                placeholder="image URL: http://link1.jpg, http://link2.jpg"
                name="images"
                value={this.state.images}
                onChange={this.onChangeImages}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </Form.Group>
          </Form>
          <Button
            onClick={() =>
              this.onSubmit(
                title,
                price,
                color,
                size,
                tags,
                images,
                description
              )
            }
          >
            Submit
          </Button>
        </Container>
      </div>
    );
  }
}

export default Add;
