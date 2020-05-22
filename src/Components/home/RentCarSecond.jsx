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
      errors: {},
      values: { dateTo: new Date(), dateFrom: new Date(), price: null },
      cars: ["Example1", "Example2", "Example3"],
    };
  }

  componentDidMount() {
    this.setState({
      values: { price: 0 },
    });
  }
  dateFromChange = (event) => {
    this.setState({ values: { dateFrom: event } });
  };
  dateToChange = (event) => {
    this.setState({ values: { dateTo: event } });
  };
  onChange = (date) => this.setState({ date });

  componentDidUpdate() {}

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    if (!this.props.salon) {
      return <Redirect to="/home/rent-a-car" />;
    }
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form className="content" onSubmit={this.handleSubmit}>
            <h2>Salon {this.props.salon}</h2>

            <SelectComponent
              caption="Choose a car"
              error={this.state.errors.car}
              id="cars"
              optionList={this.state.cars}
            />

            <div className="form-group">
              <label>Date from:</label>
            </div>
            <DateTimePicker
              onChange={this.dateFromChange}
              className="callender"
              dropUp
              data={["orange", "red", "blue", "purple"]}
            />
            <div className="form-group">
              <label>Date to:</label>
            </div>
            <DateTimePicker
              onChange={this.dateToChange}
              className="callender"
              dropUp
              data={["orange", "red", "blue", "purple"]}
            />
            <div className="form-group">
              <label>Total Price: {this.state.values.price}</label>
            </div>
            <button type="submit" className="btn btn-block">
              Book a car
            </button>
            <div
              className="btn btn-block"
              onClick={() => {
                return <Redirect to="/home/rent-a-car" />;
              }}
            >
              BACK
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RentCar;
