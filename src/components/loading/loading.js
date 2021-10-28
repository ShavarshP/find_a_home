import React, { Component, useState, useEffect } from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <span className="loader"><span className="loader-inner"></span></span>
    </div>
  );
};

export default Loading;
