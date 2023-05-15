import "../Styles/Navbar.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import home from "../assets/home.svg";
import search from "../assets/search.svg";
import profile from "../assets/profile.svg";
import friends from "../assets/friends.svg";
import homeActive from "../assets/home-icon-active.svg";
import searchActive from "../assets/search-icon-active.svg";
import profileActive from "../assets/profile-icon-active.svg";
import friendsActive from "../assets/friends-icon-active.svg";

function Navbar() {
  const location = useLocation();

  return (
    <div className="container-nav">
      <div>
        <Outlet />
      </div>
      <nav id="nav-container">
        <ul id="list-container">
          <li className={`item-nav ${location.pathname === "/nav/home" ? "active" : ""}`}>
            <Link to="/nav/home" className="nav-link">
              <img src={location.pathname === "/nav/home" ? homeActive : home} alt="Home" />
              <p>Inicio</p>
            </Link>
          </li>
          <li className={`item-nav ${location.pathname === "/nav/search" ? "active" : ""}`}>
            <Link to="/nav/search" className="nav-link">
              <img src={location.pathname === "/nav/search" ? searchActive : search} alt="Search" />
              <p>Buscador</p>
            </Link>
          </li>
          <li className={`item-nav ${location.pathname === "/nav/profile" ? "active" : ""}`}>
            <Link to="/nav/profile" className="nav-link">
              <img src={location.pathname === "/nav/profile" ? profileActive : profile} alt="Profile" />
              <p>Perfil</p>
            </Link>
          </li>
          <li className="item-nav">
            <img src={friends} alt="Friends" />
            <p>Amigos</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
