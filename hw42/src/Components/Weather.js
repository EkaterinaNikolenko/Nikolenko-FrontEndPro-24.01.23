import React from 'react';
import './Weather.css';

function Weather({ state }) {
  return (
    <div>
        { state.city && 
            <div className='container-weather'>
                <div className="weather-header">
                    <h1 className="city">{state.city}</h1>
                    <img src={`http://openweathermap.org/img/w/${state.icon}.png`}/>
                </div>
                <div className='weather-info'>
                    <div>
                        <p className="desc">Description: {state.description}</p>
                        <p className='temp'>Temperature: {state.temp}&#176;</p>
                        <p className='pres'>Pressure: {state.pressure}</p>
                    </div>
                    <div>
                        <p className='humidity'>Humidity: {state.humidity}</p>
                        <p className='speed'>Speed: {state.speed}</p>
                        <p className='deg'>Degree: {state.deg}</p>
                    </div>
                </div>
            </div>
        }
        <p>{state.error}</p>
    </div>
  )
}

export default Weather;