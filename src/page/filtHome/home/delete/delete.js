import React from "react";
import "./phone.css";

const Delete = () => {
  return (
    <div className="call-button" style={{ marginRight: "10px" }}>
      <button className="phone" style={{ backgroundColor: 'red' }}>
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Delete;
