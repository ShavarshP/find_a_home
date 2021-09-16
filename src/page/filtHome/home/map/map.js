import React, { useRef } from "react";
import "./map.css";
// import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [40.177414, 44.512482],
  zoom: 13,
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521],
];

const Maps = (props) => {
  const map = useRef();

  return (
    <div className="map-contener" ref={map}>
      {/* <YMaps>
        <Map defaultState={mapData} width={"100%"} height={"50vh"}>
          {coordinates.map((coordinate, index) => (
            <Placemark geometry={coordinate} key={index} />
          ))}
        </Map>
      </YMaps> */}
    </div>
  );
};

export default Maps;
