import React from "react";
import "./phone.css";

const Phone = (props) => {
  return (
    <div className="call-button" style={{ marginRight: "10px" }}>
      <button className="phone">
        <i className="fa fa-phone fa-5" aria-hidden="true"></i>
      </button>
      <button className="bt-phone phone">
        <i className="fa fa-phone fa-4" aria-hidden="true"></i>
      </button>
      <div className="box-phone">{props.phone}</div>
    </div>
  );
};

export default Phone;
