import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RentCar from "../../Components/home/RentCar";
import RentCarSecond from "../../Components/home/RentCarSecond";

export default class RentCarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salon: this.props.salon,
    };
    this.chooseSalon = this.chooseSalon.bind(this);
  }
  onChange(e) {
    console.log(e);
  }
  chooseSalon(salon) {
    this.setState({
      salon: salon,
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/home/rent-a-car/car-date">
          <RentCarSecond salon={this.state.salon} />
        </Route>
        <Route exact path="/home/rent-a-car">
          <RentCar salon={this.props.salon} chooseSalon={this.chooseSalon} />
        </Route>
      </Switch>
    );
  }
}
