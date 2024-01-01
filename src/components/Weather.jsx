import React, { useEffect, useState } from "react";
import "./weather.css";

const img =
  "https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png";

const url =
  "http://api.weatherapi.com/v1/current.json?key=cf7c3e48919d4d46b88203928231108&aqi=no&q=";
function Weather() {
  const [search, setSearch] = useState("");
  const [response, setReaponse] = useState({});

  const apiCall = () => {
    fetch(url + search.replace(" ", "+"))
      .then((res) => res.json())
      .then((data) => setReaponse(data));
  };

  return (
    <>
      <div className="box">
        <div className="input">
          <input
            type="search"
            className="inputFeild"
            placeholder="Search Country"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button className="btn" onClick={() => apiCall()}>
            Search
          </button>
        </div>
        <div>
          <div className="input">
            <h1>Country:{response.location?.country || "Search"}</h1>
          </div>

          <div className="location">
            <img
              src="https://img.icons8.com/?size=512&id=k1fSzY8XQUE8&format=png"
              alt=""
            />
            <h2>City:{response.location?.name || ""}</h2>
          </div>
          <div className="temprature">
            <div className="cloud-icon">
              <img src={response.current?.condition.icon || img} alt="" />
            </div>
            <h2>{response.current?.temp_c || "0"}°C°F</h2>
          </div>

          <div className="tiem">
            <h3>Time:{response.location?.localtime || ""}</h3>
          </div>

          <div className="region">
            <h3>Region:{response.location?.region || ""}</h3>
          </div>

          <div className="degree-section">
            <div className="degree-part">
              <span>Cloud:{response.current?.cloud || "0"}</span>
              <span>Wind_Degree:{response.current?.wind_degree || "0"}</span>
            </div>
            <div className="degree-part">
              <span>Longitude:{response.location?.lat || "0"}</span>
              <span>Latitude:{response.location?.lon || "0"}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Weather;
