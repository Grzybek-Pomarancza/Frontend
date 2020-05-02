import React from "react";

const FormComponent = (props) => {
  return (
    <div className="form-group">
      <label>{props.caption}</label>
      {props.error ? (
        <label
          style={{
            fontSize: 12,
            color: "red",
            float: "right",
          }}
        >
          {props.error}
        </label>
      ) : null}
      <input
        name={props.name}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default FormComponent;
