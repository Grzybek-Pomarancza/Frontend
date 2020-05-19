import React, { Component } from "react";

import RentCar from "../../Components/home/RentCar";

export default class RentCarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salon: "",
    };
  }
  render() {
    return (
      <React.Fragment>
        <RentCar salon={this.props.salon} />
      </React.Fragment>
    );
  }
}