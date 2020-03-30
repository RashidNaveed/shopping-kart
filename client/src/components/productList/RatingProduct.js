import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
// import axios from "axios";

export default class RatingProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating,
      products: {}
    };
  }
  //   componentDidMount() {
  //     const id = this.props.match.params.id;
  //     console.log("recived id is", id);
  //     axios.get(`http://localhost:4000/products/${id}`).then(data => {
  //       console.log("recived data is", data.data);
  //       this.setState({ products: data.data });
  //     });
  //   }
  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  render() {
    const { rating } = this.state;

    return (
      <div>
        <StarRatingComponent
          name="rate"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}
