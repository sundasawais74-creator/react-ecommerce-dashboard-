import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import TodoApp from "./pages/TodoApp";
import WeatherApp from "./pages/WeatherApp";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">⚡</div>
        <div className="nav-links">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/todo-app">TodoApp</NavLink>
          <NavLink to="/weather-app">WeatherApp</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/weather-app" element={<WeatherApp />} />
      </Routes>
    </Router>
  )
}
export default App


