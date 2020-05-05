import React, { Component } from "react";
import Topbar from "../Components/Topbar";
import SignUp from "../Components/SignUp";
import "../Styles/loginStyle.css";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
class SignupView extends Component {
  render() {
    return (
      <div className="welcome-wrapper">
        <div className="login-wrapper">
          <Topbar />
          <SignUp validEmailRegex={validEmailRegex} />
        </div>
      </div>
    );
  }
}

export default SignupView;
