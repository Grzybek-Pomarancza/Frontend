import React, { Component } from "react";
import Example from "../Components/home/Carousel";
import MainTopbar from "../Components/home/MainTopbar";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import MapContainer from "./HomeView/map";

import HomeView from "./HomeView/HomeView";
import RentCarView from "./HomeView/RentCarView";

class HomeRouting extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  componentDidMount() {
    if (!this.props.isLoggedIn) this.setState({ isLoggedIn: false });
  }*/
  render() {
    if (this.props.isLoggedIn === false) {
      return <Redirect to="/sign-in" />;
    }
    return (
      <Switch>
        <Route exact path="/home">
            <MainTopbar logout={this.props.logout} />
            <HomeView />
        </Route>
        <Route exact path="/home/car-map">
          <MainTopbar logout={this.props.logout} />
          <MapContainer />
        </Route>
        <Route exact part="/home/rent-a-car">
          <MainTopbar logout={this.props.logout} />
          <RentCarView />
        </Route>
      </Switch>
    );
  }
}

export default HomeRouting;
