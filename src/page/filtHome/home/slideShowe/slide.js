import React, { Component, useState } from "react";
import "../home.css";

const Slide = (prop) => {
  const [boxLeft, setboxLeft] = useState(0);

  const doSlide = () => {
    setboxLeft((index) => {
      if (index + 600 !== prop.img.length * 600) {
        return index + 600;
      } else {
        return 0;
      }
    });
  };
  const turnSlide = (index2) => {
    setboxLeft((index) => {
      return index2 * 600;
    });
  };
  return (
    <div className="contener-slid">
      <div className="slid-div-contener">
        <div
          className="slid-div"
          style={{ right: boxLeft + "px", width: prop.img.length * 600 + "px" }}
          onClick={() => {
            doSlide();
          }}
        >
          {prop.img.map((imgs, index) => (
            <img className="imgSlid" key={index} src={imgs} alt="" />
          ))}
        </div>
      </div>
      <div className="flex-container-img">
        {prop.img.map((imgs, index) => (
          <img
            className="imgSlid-smol"
            key={index}
            src={imgs}
            alt=""
            onClick={() => {
              turnSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
