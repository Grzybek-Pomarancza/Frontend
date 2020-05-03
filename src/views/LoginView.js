import React, { Component } from "react";
import Topbar from "../Components/Topbar";
import Login from "../Components/Login";
import '../Styles/loginStyle.css'

class LoginView extends Component {
  render() {
    return (
      <div className="welcome-wrapper">
          <div className="login-wrapper">
            <Topbar />
            <Login />
          </div>
      </div>
    );
  }
}

export default LoginView;
