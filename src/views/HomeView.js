import React, { Component } from "react";
import Example from "../Components/Carousel";
import MainTopbar from "../Components/MainTopbar";

class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <MainTopbar logout={this.props.logout} />
        <Example />
      </React.Fragment>
    );
  }
}

export default HomeView;
