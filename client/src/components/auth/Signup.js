import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import Layout from "../Layout";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    const { FirstName, LastName, Email, Password } = this.state;
    console.log(this.state);
    axios
      .put("http://localhost:4000/signup", {
        Email,
        Password,
        name: { FirstName, LastName }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { FirstName, LastName, Email, Password } = this.state;
    return (
      <Layout>
        <Form
          className="container"
          style={{ paddingTop: "80px", paddingBottom: "100px" }}
        >
          <Row form>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">First Name</Label>
                <Input
                  type="text"
                  name="FirstName"
                  value={FirstName}
                  onChange={this.changeHandler}
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Last Name</Label>
                <Input
                  type="text"
                  name="LastName"
                  vale={LastName}
                  onChange={this.changeHandler}
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="Email"
                  value={Email}
                  id="exampleEmail"
                  onChange={this.changeHandler}
                  placeholder="Email"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="Password"
                  value={Password}
                  id="examplePassword"
                  onChange={this.changeHandler}
                  placeholder="Password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit" onSubmit={this.submitHandler}>
            Sign up
          </Button>
        </Form>
      </Layout>
    );
  }
}
