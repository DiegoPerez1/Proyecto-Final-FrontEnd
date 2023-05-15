import "../Styles/Home.css";
import historyIcon from "../src/assets/history.svg";
import notificationIcon from "../src/assets/notification.svg";
import cupido from "../src/assets/cupido.svg";
import contextual from "../src/assets/contextual.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="container">
      <div id="top-gradient"></div>
      <header id="header">
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
              <Link to="/cupido-musical"><h4 className="title">Cupido Músical</h4></Link>
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
