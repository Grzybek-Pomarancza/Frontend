import React, { Component } from "react";
import FormComponent from "../../Components/FormComponent";

class RentCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      values: {},
    };
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form className="content" onSubmit={this.handleSubmit}>
            <FormComponent
              caption=""
              error={this.state.errors.lastName}
              name="lastName"
              type="text"
              placeholder="Last name"
              value={this.state.value}
              handleChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default RentCar;
