import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar(){
  const [showMenu, setShowMenu] = useState(false)
  
  return(
    <header className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link to={'/'} className="home-link">📦 LOGO</Link>
        </div>
        <nav className="desktop-menu">
          <Link to={'/products'} className="nav-link">Products</Link>
          <Link to={'/weather-app'} className="nav-link">WeatherApp</Link>
          <Link to={'/todo-app'} className="nav-link">TodoApp</Link>
        </nav>
        <div className="mobile-menu" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <RxCross2 /> : <IoMenu />}
        </div>
      </div>
      <div className={`mobile-options ${showMenu ? 'active' : ''}`}>
        <Link to={'/products'} className="nav-link" onClick={() => setShowMenu(!showMenu)}>Products</Link>
        <Link to={'/weather-app'} className="nav-link" onClick={() => setShowMenu(!showMenu)}>WeatherApp</Link>
        <Link to={'/todo-app'} className="nav-link" onClick={() => setShowMenu(!showMenu)}>TodoApp</Link>
      </div>
    </header>
  )
}
