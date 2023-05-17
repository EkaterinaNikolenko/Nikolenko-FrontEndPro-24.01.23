import React, { useState } from 'react';
import './App.css';
import {Layout} from 'antd';
import WeatherForm from './Components/WeatherComponents/WeatherForm';
import Weather from './Components/WeatherComponents/Weather';
import StyledHeader from './Components/StyledComponents/StyledHeader'
import StyledContent from './Components/StyledComponents/StyledContent'
import StyledSider from './Components/StyledComponents/StyledSider'
import StyledMenuWithItems from './Components/StyledComponents/StyledMenuWithItems'

function App() {
  let [state, setState] = useState({});

  async function getWeather (e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city) {
      const server = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
      const api_url = await fetch (server, {method: "GET"});
      const data = await api_url.json();
      if(data.cod === '404') {
        setState(() => ({
          city: null,
          error: "Enter the city correctly"
        }));
      }
      else {
        setState(() => ({
          city: data.name,
          temp: data.main.temp,
          pressure: data.main.pressure,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          speed: data.wind.speed,
          deg: data.wind.deg,
          icon: data.weather[0].icon,
          error: ""
        }));
      }
    } else {
      setState(() => ({
        city: null,
        error: "Enter the city"
      }));
    }
  }

  return (
    <div className="App">
      <Layout>
        <StyledSider theme="light">
          <StyledMenuWithItems></StyledMenuWithItems>
        </StyledSider>
        <Layout>
          <StyledHeader>Weather Forecast</StyledHeader>
          <StyledContent>
            <div>
              <WeatherForm getWeather={getWeather} />
              <Weather state={state}/>
            </div>
          </StyledContent>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
