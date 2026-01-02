import React from "react";
//import './Price.css';
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name="test2" value="" />
        <span className="checkmark"></span>
      </label>
      <Input
        handleChange={handleChange}
        value="all"
        name="test2"
        title="All prices"
      />
      <Input
        handleChange={handleChange}
        value="101-200"
        name="test2"
        title="101-200"
      />
      <Input
        handleChange={handleChange}
        value="51-100"
        name="test2"
        title="51-100"
      />
      <Input
        handleChange={handleChange}
        value="0-50"
        name="test2"
        title="0-50"
      />
    </div>
  );
}

export default Price;
