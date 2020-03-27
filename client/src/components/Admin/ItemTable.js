import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    await axios
      .get("http://localhost:4000/products")
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })

      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const stylesColor = color => ({
      textDecoration: "underline",
      textDecorationColor: color
    });

    const { products } = this.state;
    console.log("product", products);
    return (
      <div>
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Id</th>
              <th>Price</th>
              <th>Colors</th>
              <th>Sizes</th>
              <th>Tags</th>
              <th>Images</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((x, index) => (
              <tr key={x._id}>
                <th scope="row">{index + 1}</th>
                <td>{x.title}</td>
                <td>{x._id}</td>
                <td>{x.price}$</td>
                <td>
                  {x.color.map(x => (
                    <span>
                      <span style={stylesColor(x)}>{x}</span> /{" "}
                    </span>
                  ))}
                </td>
                <td>{x.size.map(x => x + " / ")}</td>
                <td>{x.tags}</td>
                <td>{x.images.length}</td>
                <td>{x.description.substring(0, 30) + "... "}</td>
                <td>
                  <EditProduct infos={x} />
                </td>
                <td>
                  <DeleteProduct id={x._id} title={x.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
