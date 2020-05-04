import React, { Component } from "react";
import Topbar from "../Components/Topbar";
import Login from "../Components/Login";
import "../Styles/loginStyle.css";

class LoginView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="welcome-wrapper">
        <div className="login-wrapper">
          <Topbar />
          <Login isLoggedIn={this.props.isLoggedIn} />
        </div>
      </div>
    );
  }
}

export default LoginView;
