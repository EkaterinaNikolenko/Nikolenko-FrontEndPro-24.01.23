import React, { useState } from 'react';
import './App.css';
import WeatherForm from './Components/WeatherForm';
import Weather from './Components/Weather';
import {Layout} from 'antd';
import {Menu} from 'antd';
import { Header, Content} from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';

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
          error: "Enter the city right"
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
  function getItem(label, key, icon, children, type) {
    return {
      key,
      label,
    };
  }
  const items = [
    getItem('Home', '1'),
    getItem('API', '2'),
    getItem('Maps', '3'),
    getItem('Option 1', '4'),
    getItem('Option 2', '4'),
  ];
  const StyledHeader = styled(Header)`
      color: white;
      font-size: 30px;
      font-weight: 700;
      background-color: #7797ac;
  `
  const StyledSider = styled(Sider)`
      color: white;
      font-size: 20px;
      height: 100vh;
  `
  const StyledMenu = styled(Menu)`
      color: black;
      font-size: 20px;
      background-color: white;
  `
  const StyledContent = styled(Content)`
      display: flex;
      justify-content: center;
      align-items: center;
  `
  return (
    <div className="App">
      <Layout>
        <StyledSider theme="light">left sidebar
          <StyledMenu items={items}></StyledMenu>
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
      {/* <Form getWeather={getWeather} />
      <Weather state={state}/> */}
    </div>
  );
}

export default App;
