import React from "react";
import "./list.css";
import ListBlok from "./saleBlok";

const List = (props) => {
  const state = props.data;

  const render = state.map((item, i) => <ListBlok key={i} state={item} />);
  return (
    <div className="home14-0">
      <div className="list-filter-container">{render}</div>
    </div>
  );
};

export default List;
