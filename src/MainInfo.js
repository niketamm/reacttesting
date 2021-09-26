import React from "react";
import "./MainInfo.css";

export default function MainInfo(prop) {
  return (
    <h2>
      <br />
      It is {prop.temperature}℃ in {prop.city}
      <br />
      Humidity {prop.humidity}%
      <br />
      Wind speed {prop.windspeed} m/s
      <br />
    </h2>
  );
}
