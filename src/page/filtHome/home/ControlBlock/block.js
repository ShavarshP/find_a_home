import React, { Component, useState, useRef } from "react";
import "./block.css";

const Blok = (props) => {
  // const [state, setState] = useState(null);
  const button = useRef();
  const span = useRef();
  const deletb = () => {
    if (
      "variousamechanics samilpaken done" == button.current.className ||
      button.current.className == "variousamechanics samilpaken"
    ) {
      button.current.classList.add("done");
      span.current.innerText = "Removed";
    } else {
      button.current.classList.add("samilpaken");
      span.current.innerText = "Are you sure?";
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <button ref={button} className="variousamechanics" onClick={deletb}>
        <div className="cleverlypaired">
          <i className="fa fa-trash-o"></i>
          <i className="fa fa-question"></i>
          <i className="fa fa-check"></i>
        </div>
        <div className="kedeverything">
          <span ref={span}>Delete!</span>
        </div>
      </button>
    </div>
  );
};

export default Blok;
