import React from "react";
import "./weather.css"


function Weather() {
    return (
        <>

            <div className="box">

                <div className="input">
                    <input type="search" className="inputFeild" placeholder="Search Country" onChange={(event) => { }} />
                </div>

                <div className="location">
                    <img src="https://img.icons8.com/?size=512&id=k1fSzY8XQUE8&format=png" alt="" />
                    <h1>karachi</h1>
                </div>
                <div className="temprature">

                    <div className="cloud-icon">
                        <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="" />
                    </div>
                    <h2>39°C°F</h2>

                </div>

            </div>
        </>
    );
}
export default Weather;