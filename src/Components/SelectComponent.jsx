import React from "react";
const SelectComponent = (props) => {
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
      <select
        class="form-control"
        id={props.id}
        name={props.name}
        onChange={props.handleChange}
      >
        {props.optionList.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
