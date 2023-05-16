import "../Styles/Home.css";
import { Link } from "react-router-dom";
import historyIcon from "../assets/history.svg";
import notificationIcon from "../assets/notification.svg";
import cupido from "../assets/cupido.svg";
import contextual from "../assets/contextual.svg";

function Home() {
  return (
    <div id="container">
      <div id="top-gradient"></div>
      <header id="header-home">
        <h2>Música ya</h2>
        <div id="icons">
          <img src={historyIcon} />
          <img src={notificationIcon} />
        </div>
      </header>

      <main id="main-container">
        <ul id="list">
          <li className="item">
            <img className="img-playlist" src={cupido} />
            <div className="text">

              <Link to="/cupidomusical"><h4 className="title">Cupido Músical</h4></Link>
              <p className="details">Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
            </div>
          </li>
          <li className="item">
            <Link to="/musica-contextual"> <img className="img-playlist" src={contextual} /></Link>
            <div className="text">
              <Link to="/musica-contextual"><h4 className="title">Música Contextual</h4></Link>
              <p className="details">Creamos la playlist perfecta para cualquier situación.</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Home;
