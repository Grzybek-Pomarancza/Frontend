import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import HomeView from "./views/HomeView";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }
  render() {
<<<<<<< HEAD
    return (
      <Router>
        <div className="auth-wrapper">
          <Switch>
            <Route
              exact
              path="/(|sign-in)"
              render={(props) => (
                <LoginView
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route path="/sign-up" component={SignupView} />
            <Route path="/home" component={HomeView} />
            <Route
              exact
              path="/home"
              render={(props) => (
                <HomeView
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
=======
      return (
        <Router>
          <Routes />
        </Router>
      );
    }

>>>>>>> 3b44b5b6caa4a2a78e5f0294b757c7bdaa86752c
}
