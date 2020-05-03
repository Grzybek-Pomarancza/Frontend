import React, { Component } from "react";
import Topbar from "../Components/Topbar";
import SignUp from "../Components/SignUp";
import '../Styles/loginStyle.css'

class SignupView extends Component {
  render() {
    return (
        <div className="welcome-wrapper">
            <div className="login-wrapper">
                <Topbar />
                <SignUp />
            </div>
        </div>
    );
  }
}

export default SignupView;
