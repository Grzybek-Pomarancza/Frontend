import React, { Component } from "react";
import Topbar from "../Components/Topbar";
import SignUp from "../Components/SignUp";

class SignupView extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <SignUp />
      </div>
    );
  }
}

export default SignupView;
