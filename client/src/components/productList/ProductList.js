import React, { Component } from "react";
import axios from "axios";
import { Card, Badge, CardColumns } from "react-bootstrap";
import Header from "../homepage/Header";
import { Link } from "react-router-dom";
import RatingProduct from "./RatingProduct";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: ""
    };
  }
  componentDidMount() {
    const tag = this.props.match.params.tag;
    console.log("Category is params is ", tag);
    axios
      .get(`http://localhost:4000/category/${tag}`)
      .then(data => {
        if (data.data.message) {
          this.setState({ error: data.data.message });
          console.log("error is", this.state.error);
        } else {
          this.setState({ products: data.data });
          console.log("data in  category", this.state.products);
        }
      })
      .catch(err => {
        console.log("error is", err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="mt-5">
          {" "}
          {this.state.error && <h1>{this.state.error}</h1>}
        </div>
        {this.state.products && (
          <div className="mt-5">
            <CardColumns>
              {this.state.products.map((product, id) => (
                <Card key={id}>
                  <Link to={`/productdiscription/${product._id}`}>
                    <Card.Img variant="top" src={product.images} alt="image" />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Subtitle>Rs:{product.price}</Card.Subtitle>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Badge variant="primary">{product.rating}</Badge>
                    </Card.Body>
                    <Card.Footer>
                      <RatingProduct rating={product.rating} />
                    </Card.Footer>
                  </Link>
                </Card>
              ))}
            </CardColumns>
          </div>
        )}
      </div>
    );
  }
}
export default ProductList;
