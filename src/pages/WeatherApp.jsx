import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = d6df250f418198c7ea01eabc54595e6e;

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌤️ Weather App</h1>

        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            style={styles.input}
          />
          <button onClick={getWeather} style={styles.button}>
            Search
          </button>
        </div>

        {loading && <p style={styles.loading}>Loading...</p>}
        {error && <p style={styles.error}>{error}</p>}

        {weather && (
          <div style={styles.weatherInfo}>
            <h2>{weather.name}, {weather.sys.country}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <h3 style={styles.temp}>{Math.round(weather.main.temp)}°C</h3>
            <p style={styles.desc}>{weather.weather[0].description}</p>

            <div style={styles.details}>
              <p>💨 Wind: {weather.wind.speed} m/s</p>
              <p>💧 Humidity: {weather.main.humidity}%</p>
              <p>🌡️ Feels like: {Math.round(weather.main.feels_like)}°C</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #74b9ff, #0984e3)",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    background: "white",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center"
  },
  title: {
    marginBottom: "20px",
    color: "#0984e3"
  },
  searchBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "2px solid #ddd",
    fontSize: "16px",
    outline: "none"
  },
  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    background: "#0984e3",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  loading: {
    color: "#0984e3"
  },
  error: {
    color: "red"
  },
  weatherInfo: {
    marginTop: "20px"
  },
  temp: {
    fontSize: "48px",
    margin: "10px 0",
    color: "#0984e3"
  },
  desc: {
    textTransform: "capitalize",
    fontSize: "18px",
    color: "#555"
  },
  details: {
    marginTop: "20px",
    textAlign: "left",
    background: "#f1f8ff",
    padding: "15px",
    borderRadius: "10px"
  }
};