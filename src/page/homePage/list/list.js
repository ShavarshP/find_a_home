import React from "react";
import "./list.css";
import ListBlok from "./saleBlok";

const List = (props) => {
  const state = props.data;

  const render = state.map((item, i) => <ListBlok key={i} state={item} />);
  return (
    <div className={props.state.filtClassName[5]}>
      <div className={props.state.filtClassName[1]}>{render}</div>
    </div>
  );
};

export default List;
