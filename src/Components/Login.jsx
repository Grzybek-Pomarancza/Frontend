import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import FormComponent from "./FormComponent";
import { PostData } from "../services/PostData";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
      isValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.login = this.login.bind(this);
  }
  login() {
    PostData("/login", this.state.values).then((data) => {
      console.log(data);
      if (data.token) {
        sessionStorage.setItem("token", data.token);
        this.props.login();
      } else {
        console.log("login error!");
      }
    });
  }

  handleChange = (event) => {
    event.persist();
    const value = event.target.value;
    const name = event.target.name;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = this.props.validEmailRegex.test(value)
          ? ""
          : "Email address is incorrect";
        break;
      case "password":
        errors.password = value.length !== 0 ? "" : "Password is required";
        break;
      default:
        break;
    }
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
      errors,
    });
  };

  isEmpty(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }
  handleValidation() {
    let isValid = true;
    let errors = this.state.errors;
    if (this.state.values.email.length === 0)
      errors.email = "This field cannot be empty!";
    if (this.state.values.password.length === 0)
      errors.password = "This field cannot be empty!";
    Object.values(errors).forEach((val) => {
      if (val.length > 0) {
        isValid = false;
      }
    });
    this.state.isValid = isValid;
    this.setState({
      ...this.state,
      isValid: isValid,
      errors,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.handleValidation();
    if (this.state.isValid) {
      console.log("logowanie!");
      this.login();
    }
  };
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to={"/home"} />;
    }
    return (
      <div className="auth-inner">
        <form className="content" onSubmit={this.handleSubmit}>
          <h3>Login</h3>

          <FormComponent
            caption="Email address"
            error={this.state.errors.email}
            name="email"
            type="text"
            placeholder="Enter email"
            value={this.state.value}
            handleChange={this.handleChange}
          />
          <FormComponent
            caption="Password"
            error={this.state.errors.password}
            name="password"
            type="password"
            placeholder="Enter password"
            value={this.state.value}
            handleChange={this.handleChange}
          />

          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Don't have account? <Link to={"/sign-up"}>register </Link>
          </p>
        </form>
      </div>
    );
  }
}
