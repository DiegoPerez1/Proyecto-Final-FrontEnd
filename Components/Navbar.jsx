import "../Styles/Navbar.css";
import homeActive from "../src/assets/home-icon-active.svg"
import searchActive from "../src/assets/search-icon-active.svg"
import profileActive from "../src/assets/profile-icon-active.svg"
import friendsActive from "../src/assets/friends-icon-active.svg"
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div>
        <Outlet />
      </div>
      <nav id="nav-container">
        <ul id="list-container">
          <Link to="/nav/home"><li> <img src={homeActive} /> Inicio</li></Link>
          <Link to="/nav/search"><li> <img src={searchActive} /> Buscador</li></Link>
          <li> <img src={profileActive} /> Perfil</li>
          <li> <img src={friendsActive} /> Amigos</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
