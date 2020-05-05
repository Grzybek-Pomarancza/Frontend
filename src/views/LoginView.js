import React, { Component } from "react";
import Topbar from "../Components/Topbar";
import Login from "../Components/Login";
import "../Styles/loginStyle.css";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class LoginView extends Component {
  render() {
    return (
      <div className="welcome-wrapper">
        <div className="login-wrapper">
          <Topbar />
          <Login
            validEmailRegex={validEmailRegex}
            isLoggedIn={this.props.isLoggedIn}
            login={this.props.login}
          />
        </div>
      </div>
    );
  }
}

export default LoginView;
