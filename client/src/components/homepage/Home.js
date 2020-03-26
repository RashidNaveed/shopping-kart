import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Slider from "./Slider";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Slider />
      </div>
    );
  }
}
