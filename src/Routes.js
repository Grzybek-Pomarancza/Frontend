import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import HomeView from "./views/HomeView";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
export default Routes;
