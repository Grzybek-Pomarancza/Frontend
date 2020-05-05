import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import HomeView from "./views/HomeView";
import WelcomeView from "./views/WelcomeView";

import { GetUserData } from "./services/PostData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loggedInStatus: "NOT_LOGGED_IN",
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.checkSession = this.checkSession.bind(this);
  }
  login() {
    this.setState({
      isLoggedIn: true,
      loggedInStatus: "LOGGED_IN",
    });
  }
  logout() {
    sessionStorage.clear();
    this.setState({
      isLoggedIn: false,
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }
  checkSession() {
    GetUserData(sessionStorage.getItem("token")).then((resault) => {
      let responseJson = resault;
      if (responseJson.email) {
        sessionStorage.setItem("email", responseJson.email);
        sessionStorage.setItem("name", responseJson.name);
        this.setState({
          isLoggedIn: true,
          loggedInStatus: "LOGGED_IN",
        });
        console.log("user is logged in!");
      } else {
        console.log("Error in downloading user data!");
      }
    });
  }
  componentDidMount() {
    this.checkSession();
  }

  render() {
    return (
      <Router>
        <div className="auth-wrapper">
          <Switch>
            <Route path="/(|welcome)" component={WelcomeView} />
            <Route
              exact
              path="/sign-in"
              render={(props) => (
                <LoginView
                  {...props}
                  isLoggedIn={this.state.isLoggedIn}
                  login={this.login}
                />
              )}
            />
            <Route path="/sign-up" component={SignupView} />
            <Route
              path="/home"
              render={(props) => <HomeView logout={this.logout} />}
            />
            <Route
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
}
