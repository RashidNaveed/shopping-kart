import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  FormFeedback,
  Alert,
} from "reactstrap";
import Layout from "../Layout";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: [],
      success: "",
      errorMessage: "",
      visible: true,
      param: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    this.setState({ errorMessage: "" });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    } = this.state;
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      this.setState({ errorMessage: "Required field couldn't be empty" });
      this.setState({ visible: true });
    } else {
      if (password === confirmPassword) {
        axios
          .put("http://localhost:4000/signup", {
            firstname,
            lastname,
            email,
            password,
          })
          .then((res) => {
            console.log("response is", res);
            this.setState({ success: res.data.message }, () => {
              console.log("success message is", this.state.success);
            });
          })
          .catch((err) => {
            // console.log("error is", err.response.data.data);
            this.setState({ error: err.response.data.data }, () => {
              console.log("error is", this.state.error);
            });
            const result = this.state.error.find((err) => err.param);
            console.log("email result is", result);
            if (email !== undefined && result.param === "email") {
              this.setState({ errorMessage: result.msg }, () => {
                console.log("email error message is", this.state.errorMessage);
              });
              this.setState({ param: result.param }, () => {
                console.log("email error param is", this.state.param);
              });
            } else {
              console.log("password result is", result);
              if (result !== undefined && result.param === "password") {
                this.setState({ errorMessage: result.msg }, () => {
                  console.log("password message is", this.state.errorMessage);
                });
                this.setState({ param: result.param }, () => {
                  console.log("password param is", this.state.param);
                });
              }
            }
          });
      } else {
        this.setState({ errorMessage: "Password didn't match" }, () => {
          console.log("error is", this.state.errorMessage);
        });
      }
    }
  };
  render() {
    // if (this.state.success !== "") {
    //   this.setState({ redirect: true });
    //   if (this.state.redirect) {
    //     return <Redirect to="/login" />;
    //   }
    // }
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      visible,
    } = this.state;
    const onDismiss = () => this.setState({ visible: !this.state.visible });
    return (
      <Layout>
        <Form
          className="container"
          style={{ paddingTop: "80px", paddingBottom: "100px" }}
          onSubmit={this.submitHandler}
        >
          {this.state.success !== "" ? (
            <Alert color="success">
              {this.state.success} <Link to="/login">Login</Link>
            </Alert>
          ) : (
            ""
          )}
          <Row form>
            <Col>
              <FormGroup>
                <Label for="exampleFirstName">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={this.changeHandler}
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleLastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  vale={lastname}
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
                  name="email"
                  value={email}
                  id="exampleEmail"
                  onChange={this.changeHandler}
                  placeholder="Email"
                  invalid={this.state.param === "email"}
                />
                <FormFeedback>{this.state.errorMessage}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  id="examplePassword"
                  onChange={this.changeHandler}
                  placeholder="Password"
                  invalid={
                    this.state.param === "password" &&
                    this.state.errorMessage !== "Password didn't match"
                  }
                />
                <FormFeedback>{this.state.errorMessage}</FormFeedback>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleConfirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  id="exampleConfirmPassword"
                  onChange={this.changeHandler}
                  placeholder="Confirm Password"
                  invalid={this.state.errorMessage === "Password didn't match"}
                />
                <FormFeedback>{this.state.errorMessage}</FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          {this.state.errorMessage === "Required field couldn't be empty" ? (
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
              ({this.state.errorMessage})
            </Alert>
          ) : (
            ""
          )}
          <Row form>
            <Button type="submit">Sign up</Button> &nbsp;
            <h6 style={{ marginTop: "10px" }}>
              {" "}
              Already have an account? <Link to="/login">login</Link>
            </h6>
          </Row>
        </Form>
      </Layout>
    );
  }
}
