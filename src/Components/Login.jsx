import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormComponent from "./FormComponent";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
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
  }
  handleChange = (event) => {
    event.persist();
    const value = event.target.value;
    const name = event.target.name;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email adress is incorrect";
        break;
      case "password":
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
            error=""
            name="password"
            type="password"
            placeholder="password"
            value={this.state.value}
            handleChange={this.handleChange}
          />
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
