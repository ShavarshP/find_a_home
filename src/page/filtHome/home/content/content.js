import React, { Component } from "react";
import "./content.css";
import Map from "../map/map";
import Phone from "../phone/phone";
import Delete from "../delete/delete";
import { loadState } from "../../../../helpers/localStorage";
const Content = (props) => {
  return (
    <div className="description_contener">
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
        <div style={{ display: "flex" }}>
          <div className="conects" style={{ color: "#630d0d" }}>
            {props.state.district}
          </div>
          <div className="conects">/</div>
          <div className="conects" style={{ color: "#630d0d" }}>
            street-{props.state.street}
          </div>
          <div className="conects">/{props.state.building_type}/</div>
          <div className="conects">{props.state.rooms} to. flat/</div>
          <div className="conects">area {props.state.area} m²/</div>
          <div className="conects">{props.state.floor} fl./</div>
        </div>

        {loadState("auth") ? <Phone phone={props.state.Mobile_number} /> : null}
        <span className="description-contener">
          <p className="conects boconi-tekst">{props.state.description}</p>
          <Map />
        </span>
      </div>
      {/* <Block /> */}
      {loadState("auth") ? <button onClick={props.check}><Delete /> </button> : null}
    </div>
  );
};

export default Content;
