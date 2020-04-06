import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  FormFeedback,
  Alert,
} from "reactstrap";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      userId: "",
      userRole: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ errorMessage: "" });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((res) => {
        console.log("response is", res);
        if (res.status === 200) {
          this.setState({ userId: res.data.userId }, () => {
            console.log("user id is", this.state.userId);
          });
        }
      })
      .catch((err) => {
        console.log("error is", err.response.data.message);
        this.setState({ errorMessage: err.response.data.message });
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <Layout>
        {" "}
        <Form
          className="container"
          style={{ paddingTop: "80px", paddingBottom: "100px" }}
          onSubmit={this.submitHandler}
        >
          <Row form>
            <Col md="7">
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  id="exampleEmail"
                  placeholder="Email"
                  onChange={this.changeHandler}
                  invalid={
                    this.state.errorMessage === "User with email not found"
                  }
                />
                <FormFeedback invalid="true">
                  {this.state.email === ""
                    ? "Please enter Email"
                    : this.state.errorMessage}
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="7">
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  id="examplePassword"
                  placeholder="Password"
                  onChange={this.changeHandler}
                  invalid={this.state.errorMessage === "Wrong Password"}
                />
                <FormFeedback invalid="true">
                  {this.state.password === ""
                    ? "Please enter Password"
                    : this.state.errorMessage}
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Button type="submit">Sign in</Button> &nbsp;
            <h6 style={{ marginTop: "10px" }}>
              {" "}
              Need an account? <Link to="/signup">Signup</Link>
            </h6>
          </Row>
        </Form>
      </Layout>
    );
  }
}
