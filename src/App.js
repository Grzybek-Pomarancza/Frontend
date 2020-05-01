import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    //example link to rest API -> in future Car-Rental-App-API
    //for example localhost:3000
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
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
