import React, { Component } from "react";
import "./content.css";
import Map from "../map/map";


const Content = (props) => {
  return (
    <div className="conect-contener">
      <a
        style={{
          color: "#f50000",
          position: "absolute",
          right: "0px",
          fontSize: "40px",
        }}
      >
        {props.state.price}$

      </a>
      <div className="conects">{props.state.district}</div>
      <div className="conects">street-{props.state.street}</div>
      <div className="conects">{props.state.rooms} to. flat</div>
      <div className="conects">area {props.state.area} m²</div>
      <div className="conects">{props.state.floor} fl.</div>
      <span className="description-contener">
        <p className="conects boconi-tekst">{props.state.description}</p>
        <Map />
      </span>
    </div>
  );
};

export default Content;
