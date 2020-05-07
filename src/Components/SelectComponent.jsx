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
      <select id={props.id} onChange={props.handleChange}>
        {/*Object.props.optionList.forEach((val) => {
          <option value={val}>{val}</option>;
        })*/}
      </select>
    </div>
  );
};

export default SelectComponent;
