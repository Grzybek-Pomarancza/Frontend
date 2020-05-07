import React, { Component } from "react";
import FormComponent from "../../Components/FormComponent";
import SelectComponent from "../../Components/SelectComponent";

class RentCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        car: "",
      },
      values: {
        firstName: "",
        lastName: "",
        email: "",
      },
      cars: ["Example1", "Example2", "Example3"],
    };
  }
  componentDidMount() {
    this.setState({
      values: {
        firstName: sessionStorage.getItem("name"),
        lastName: sessionStorage.getItem("surname"),
        email: sessionStorage.getItem("email"),
      },
    });
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form className="content" onSubmit={this.handleSubmit}>
            <SelectComponent
              caption="Choose a car"
              error={this.state.errors.car}
              id="cars"
              optionList={this.state.cars}
            />
            <FormComponent
              caption="Email adress"
              error={this.state.errors.lastName}
              name="email"
              type="text"
              placeholder="example@gmail.com"
              value={this.state.values.email}
              handleChange={this.handleChange}
            />
            <FormComponent
              caption="First Name"
              error={this.state.errors.lastName}
              name="firstName"
              type="text"
              placeholder="First name"
              value={this.state.values.firstName}
              handleChange={this.handleChange}
            />
            <FormComponent
              caption="Last Name"
              error={this.state.errors.lastName}
              name="lastName"
              type="text"
              placeholder="Last name"
              value={this.state.values.lastName}
              handleChange={this.handleChange}
            />
            <button
              type="submit"
              className="btn btn-block"
              onClick={this.handleSubmit}
            >
              Book a car
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RentCar;
