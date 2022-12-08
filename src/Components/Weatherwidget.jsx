import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Skrevet i samarbejde med OpenGPT

const WeatherWidget = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Get the user's location using the geolocation API
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    });
  }, []);

  useEffect(() => {
    if (!location) return;

    // Use the OpenWeatherMap API to get the weather data for the given location
    const API_KEY = "d565cbe4bbe1e98da23fd2aa4cba4c82";
    const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&precipitation`;
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

    fetch(PROXY_URL + API_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          name: data.name,
          precipitation: data.precipitation,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      });
  }, [location]);

  if (!weather) return <p>Loading weather data...</p>;

  // Convert temperature from Kelvin to Celcius
  const temperatureCelcius = weather.temperature - 273.15;

  return (
    <StyledDiv>
      <p>{weather.name}</p>
      <p>Temperature: {temperatureCelcius.toFixed(1)}°C</p>
      <p>Description: {weather.description}</p>
      <p>Precipitation: {weather.precipitation}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

export default WeatherWidget;
