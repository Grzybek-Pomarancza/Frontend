import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RentCar from "../../Components/home/RentCar";
import RentCarSecond from "../../Components/home/RentCarSecond";

export default class RentCarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salon: this.props.salon,
      redirect: false,
    };
    this.chooseSalon = this.chooseSalon.bind(this);
    this.goTo = this.goTo.bind(this);
  }
  onChange(e) {
    console.log(e);
  }
  chooseSalon(salon) {
    this.setState({
      salon: salon,
    });
  }
  goTo() {
    this.setState({
      redirect: !this.state.redirect,
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/home/rent-a-car/car-date">
          <div className="rent-car-wrapper">
            <RentCarSecond
              salon={this.state.salon}
              goTo={this.goTo}
              redirect={this.state.redirect}
            />
          </div>
        </Route>
        <Route exact path="/home/rent-a-car">
          <div className="rent-car-wrapper">
            <RentCar
              salon={this.props.salon}
              chooseSalon={this.chooseSalon}
              redirect={this.state.redirect}
              goTo={this.goTo}
            />
          </div>
        </Route>
      </Switch>
    );
  }
}
