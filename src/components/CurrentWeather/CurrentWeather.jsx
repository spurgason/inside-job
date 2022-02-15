import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import "./current-weather.scss";

class CurrentWeather extends Component {
  render() {
    return (
      <section className="current-weather-container">
        <div className="left">
          <h1 className="temp">
            <FontAwesomeIcon icon={faBolt} /> Temp <span>&#8457;</span>
          </h1>
          <ul className="weather-details">
            <li>Pressure: </li>
            <li>Humidity: </li>
            <li>Wind: </li>
          </ul>
        </div>
        <div className="right">
          <ul className="location-details">
            <li id="location">Location</li>
            <li id="date">Date, Time</li>
            <li id="description">Description</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default CurrentWeather;
