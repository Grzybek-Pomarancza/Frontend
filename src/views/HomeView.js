import React, { Component } from "react";
import Topbar from "../Components/Topbar";
import Example from "../Components/Carousel";

class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Example />
      </React.Fragment>
    );
  }
}

export default HomeView;
