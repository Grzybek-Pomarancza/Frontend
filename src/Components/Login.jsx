import React, { Component } from "react";
import { Link } from "react-router-dom";
import validate from "validate.js";
const schema = {
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
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
      isValid: false,
    };
  }
  handleValidation() {}
  handleSubmit = (event) => {
    event.preventDefault();
    this.handleValidation();
    console.log(this.state);
  };
  render() {
    return (
      <div className="auth-inner">
        <form className="content" onSubmit={this.handleSubmit}>
          <h3>Login</h3>

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
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
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
