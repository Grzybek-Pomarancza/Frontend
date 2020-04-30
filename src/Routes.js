import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import HomeView from "./views/HomeView";

const Routes = () => {
  return (
    <React.Fragment>
      <div className="auth-wrapper">
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route path="/sign-in" component={LoginView} />
          <Route path="/sign-up" component={SignupView} />
          <Route path="/home" component={HomeView} />
        </Switch>
      </div>
    </React.Fragment>
  );
};
export default Routes;
