import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className=" img-responsive center-block"
              width={1200}
              height={700}
              src="https://i.pinimg.com/originals/0e/b5/19/0eb519517652079a5f464a869288b9bb.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Fashion is cool</h3>
              <p>Check our nice collection</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" img-responsive center-block"
              width={1200}
              height={700}
              src="https://images.unsplash.com/photo-1488826701985-4c18de62b405?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ce707ffe1b3f8c031acc5788cf6aef2&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Nice for couples</h3>
              <p>Collection summer 2018</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" img-responsive center-block"
              width={1200}
              height={700}
              src="https://images.unsplash.com/photo-1485331129317-1717811a2b75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b713c86ebb20befc80029db6bc98dae&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Nice for everyone</h3>
              <p>Amazing clothes!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
