import React from "react";
import "./WeekTable.css";

    export default function WeekTable() {
  return (
    <table>
      <tr className="weather-table">
        <td className="weather-table">Mon</td>
        <td className="weather-table">Tue</td>
        <td className="weather-table">Wed</td>
        <td className="weather-table">Thu</td>
        <td className="weather-table">Fri</td>
      </tr>
      <tr className="weatherLower">
        <td id="degree1" className="weatherLower">
          5℃
        </td>
        <td id="degree2" className="weatherLower">
          4℃
        </td>
        <td id="degree3" className="weatherLower">
          6℃
        </td>
        <td id="degree4" className="weatherLower">
          2℃
        </td>
        <td id="degree5" className="weatherLower">
          3℃
        </td>
      </tr>
      <tr className="weatherLowerText">
        <td className="weatherLowerText">Jan 25</td>
        <td className="weatherLowerText">Jan 26</td>
        <td className="weatherLowerText">Jan 27</td>
        <td className="weatherLowerText">Jan 28</td>
        <td className="weatherLowerText">Jan 29</td>
      </tr>
    </table>
  );
}
