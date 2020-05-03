import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      isLoggedIn: true,
      user: data.user,
    });
  }
  checkLoginStatus() {
    //TO DO => send request to API if logged in?
  }

  componentDidMount() {
    this.checkLoginStatus;
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <h1>Loading API...</h1>
        </div>
      );
    } else {
      return (
        <Router>
          <Routes />
        </Router>
      );
    }
  }
}
