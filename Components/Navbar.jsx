import "../Styles/Navbar.css";
import homeActive from "../src/assets/home-icon-active.svg"
import searchActive from "../src/assets/search-icon-active.svg"
import profileActive from "../src/assets/profile-icon-active.svg"
import friendsActive from "../src/assets/friends-icon-active.svg"
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-nav">
      <div>
        <Outlet />
      </div>
      <nav id="nav-container">
      <ul id="list-container">
          <li className="item-nav"><Link to="/nav/home" className="nav-link"><img src={homeActive}/><p>Inicio</p> </Link></li>
          <li className="item-nav"><Link to="/nav/search" className="nav-link"><img src={searchActive} /><p>Buscador</p> </Link></li>
          <li className="item-nav"><Link to="/nav/profile" className="nav-link"><img src={profileActive} /><p>Perfil</p> </Link></li>
          <li className="item-nav"><img src={friendsActive} /><p>Amigos</p></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
