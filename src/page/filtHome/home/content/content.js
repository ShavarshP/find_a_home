import React, { Component } from "react";
import "./content.css";
import Map from "../map/map";
import Phone from "../phone/phone";
import Delete from "../delete/delete";
import { loadState } from "../../../../helpers/localStorage";
const Content = (props) => {
  return (
    <div className="description_container">
      <div className="conect-container">
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
        <div style={{ display: "flex" }}>
          <div className="connects" style={{ color: "#630d0d" }}>
            {props.state.district}
          </div>
          <div className="connects">/</div>
          <div className="connects" style={{ color: "#630d0d" }}>
            street-{props.state.street}
          </div>
          <div className="connects">/{props.state.building_type}/</div>
          <div className="connects">{props.state.rooms} to. flat/</div>
          <div className="connects">area {props.state.area} m²/</div>
          <div className="connects">{props.state.floor} fl./</div>
        </div>

        {loadState("auth") ? <Phone phone={props.state.Mobile_number} /> : null}
        <span className="description-container">
          <p className="connects boconi-tekst">{props.state.description}</p>
          <Map />
        </span>
      </div>
      {/* <Block /> */}
      {loadState("auth") ? <> <button onClick={props.check}><Delete /> </button><button>edit</button></> : null}
    </div >
  );
};

export default Content;
