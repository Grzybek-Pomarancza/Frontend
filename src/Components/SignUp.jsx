import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login";
import FormComponent from "./FormComponent";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.persist();
    const value = event.target.value;
    const name = event.target.name;
    let errors = this.state.errors;
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length !== 0
            ? value.length < 3
              ? "Too short name"
              : ""
            : "First name is required";
        break;
      case "lastName":
        errors.lastName =
          value.length !== 0
            ? value.length < 3
              ? "Too short last name"
              : ""
            : "Last name is required";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email address is incorrect";
        break;
      case "password":
        errors.password =
          value.length !== 0
            ? value.length < 7
              ? "Password is too short (minimum is 6 characters)"
              : ""
            : "Password is required";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          this.state.values.password === value
            ? ""
            : "Confirm password must match";
        break;
    }
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
      errors,
    });
  }


  handleValidation = (errors, values) => {
    let isValid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (isValid = false));
    Object.values(values).forEach(
      (val) => val.length === 0 && (isValid = false)
    );
    this.setState({
      ...this.state,
      isValid: isValid,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleValidation(this.state.errors, this.state.values);
    console.log(this.state);
  };

  render() {
    return (
      <div className="auth-inner">
        <form onSubmit={this.handleSubmit}>
          <h3>Sign Up</h3>
          {this.state.isValid ? (
            <h3 style={{ color: "green", fontSize: 20, float: "center" }}>
              You are registered successfully!
            </h3>
          ) : null}
          <FormComponent
            caption="First name"
            error={this.state.errors.firstName}
            name="firstName"
            type="text"
            placeholder="First name"
            value={this.state.value}
            handleChange={this.handleChange}
          />
          <FormComponent
            caption="Last name"
            error={this.state.errors.lastName}
            name="lastName"
            type="text"
            placeholder="Last name"
            value={this.state.value}
            handleChange={this.handleChange}
          />
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
            placeholder="password"
            value={this.state.value}
            handleChange={this.handleChange}
          />
          <FormComponent
            caption="Confirm Password"
            error={this.state.errors.confirmPassword}
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={this.state.value}
            handleChange={this.handleChange}
          />

          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={this.handleSubmit}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered? <Link to={"/sign-in"}>login </Link>
          </p>
        </form>
      </div>
    );
  }
}
