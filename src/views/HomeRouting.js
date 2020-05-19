import React, { Component } from "react";
import Example from "../Components/home/Carousel";
import MainTopbar from "../Components/home/MainTopbar";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MapContainer from "./HomeView/map";

import HomeView from "./HomeView/HomeView";
import RentCarView from "./HomeView/RentCarView";

class HomeRouting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salon: "",
    };
    this.goToSalon = this.goToSalon.bind(this);
    this.salonReset = this.salonReset.bind(this);
  }
  goToSalon(salonId) {
    this.setState({
      salon: salonId,
    });
  }
  salonReset() {
    this.setState({
      salon: "",
    });
  }
  render() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/sign-in" />;
    }
    return (
      <Switch>
        <Route exact path="/home">
          <MainTopbar logout={this.props.logout} reset={this.salonReset} />
          <HomeView />
        </Route>
        <Route exact path="/home/car-map">
          <MainTopbar logout={this.props.logout} reset={this.salonReset} />
          <MapContainer goToSalon={this.goToSalon} />
        </Route>
        <Route exact part="/home/rent-a-car">
          <MainTopbar logout={this.props.logout} reset={this.salonReset} />
          <RentCarView salon={this.state.salon} />
        </Route>
      </Switch>
    );
  }
}

export default HomeRouting;
