import React, { Component } from "react";
import FormComponent from "../../Components/FormComponent";
import SelectComponent from "../../Components/SelectComponent";
import "react-widgets/dist/css/react-widgets.css";
import "../../Styles/RentACar.css";
import { DateTimePicker } from "react-widgets";
import { Redirect } from "react-router-dom";

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
        salon: "",
      },
      salons: ["Mickiewicza", "Krakowska", "Dietla"],
      value: "",
    };
  }

  componentDidMount() {
    this.setState({
      values: {
        firstName: sessionStorage.getItem("name"),
        lastName: sessionStorage.getItem("surname"),
        email: sessionStorage.getItem("email"),
        salon: this.props.salon ? this.props.salon : this.state.salons[0],
      },
    });
  }

  handleChange = (event) => {
    event.persist();
    const value = event.target.value;
    const name = event.target.name;
    let errors = this.state.errors;
    /*switch (name) {
      case "email":
        errors.email = this.props.validEmailRegex.test(value)
          ? ""
          : "Email address is incorrect";
        break;
      case "name":
        break;
      default:
        break;
    }*/
    console.log(name, value);
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.chooseSalon(this.state.values.salon);
    this.props.goTo();
  };
  render() {
    if (this.props.redirect) {
      return <Redirect to="/home/rent-a-car/car-date" />;
    }
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form className="content" onSubmit={this.handleSubmit}>
            {this.props.salon ? (
              <h2>Salon {this.props.salon}</h2>
            ) : (
              <SelectComponent
                caption="Choose a salon"
                error={this.state.errors.car}
                id="salons"
                name="salon"
                optionList={this.state.salons}
                handleChange={this.handleChange}
              />
            )}
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
            <button type="submit" className="btn btn-block btn-custom">
              Choose car and termin
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RentCar;
