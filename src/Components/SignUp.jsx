import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login";
import validate from "validate.js";

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32,
    },
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 6,
      maximum: 128,
    },
  },
  confirmPassword: {
    presence: { allowEmpty: false, message: "must match" },
  },
};

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.persist();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: null,
      },
    });
  }

  isEmpty(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  handleValidation() {
    const errors = validate(this.state.values, schema) || {};

    if (this.state.values.password !== this.state.values.confirmPassword) {
      errors.confirmPassword = ["Confirm password must match"];
    }

    this.setState({
      ...this.state,
      isValid: this.isEmpty(errors),
      errors: errors || {},
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleValidation();
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

          <div className="form-group">
            <label>First name </label>
            {this.state.errors.firstName ? (
              <label
                style={{
                  fontSize: 12,
                  color: "red",
                  float: "right",
                }}
              >
                {this.state.errors.firstName}
              </label>
            ) : null}
            <input
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            {this.state.errors.lastName ? (
              <label
                style={{
                  fontSize: 12,
                  color: "red",
                  float: "right",
                }}
              >
                {this.state.errors.lastName}
              </label>
            ) : null}
            <input
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Last name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            {this.state.errors.email ? (
              <label
                style={{
                  fontSize: 12,
                  color: "red",
                  float: "right",
                }}
              >
                {this.state.errors.email[0]}
              </label>
            ) : null}
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            {this.state.errors.password ? (
              <label
                style={{
                  fontSize: 12,
                  color: "red",
                  float: "right",
                }}
              >
                {this.state.errors.password[0]}
              </label>
            ) : null}
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirm password</label>
            {this.state.errors.confirmPassword ? (
              <label
                style={{
                  fontSize: 12,
                  color: "red",
                  float: "right",
                }}
              >
                {this.state.errors.confirmPassword}
              </label>
            ) : null}
            <input
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

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
