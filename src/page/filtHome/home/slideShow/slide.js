import React, { Component, useState } from "react";
import "../home.css";

const Slide = (prop) => {
  const [boxLeft, setboxLeft] = useState(0);

  const doSlide = () => {
    setboxLeft((index) => {
      if (index + 900 !== prop.img.length * 600) {
        return index + 900;
      } else {
        return 0;
      }
    });
  };
  const turnSlide = (index2) => {
    setboxLeft((index) => {
      return index2 * 900;
    });
  };
  return (
    <div className="container-slid">
      <div className="slid-div-container">
        <div
          className="slid-div"
          style={{ right: boxLeft + "px", width: prop.img.length * 900 + "px" }}
          onClick={() => {
            doSlide();
          }}
        >
          {prop.img.map((imgs, index) => (
            <div className="imgSlid" key={index}>
              <img className="imgSlid_img" src={imgs} alt="" />
            </div>
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
