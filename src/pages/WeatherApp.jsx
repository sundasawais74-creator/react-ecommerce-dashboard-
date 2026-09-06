import "../App.css";
import { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("Lahore");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
  const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p&units=metric`
);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather({
        temp: Math.round(data.main.temp),
        city: data.name,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="weather-card">
      <h1>🌤️ WeatherApp</h1>
      <div className="search-box">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && getWeather()}
          placeholder="Enter city name"
        />
        <button className="btn-blue" onClick={getWeather}>
          {loading? "Loading..." : "Get Weather"}
        </button>
      </div>

      {error && <p style={{color: '#ff6b6b', fontWeight: '600'}}>{error}</p>}

      {weather && (
        <div className="weather-result">
          <h2>{weather.city}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt="weather icon"
          />
          <p className="temp">{weather.temp}°C</p>
          <p className="desc">{weather.desc}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;