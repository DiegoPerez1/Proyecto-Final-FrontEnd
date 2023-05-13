import "../Styles/Profile.css";
import { Link } from "react-router-dom";
import profilePic from "../assets/ProfilePic.png";
import config from "../assets/config.svg";
import album from "../assets/albumImg.png";
import Justin from "../assets/cupido-img/Justin.png";
import Angeles from "../assets/cupido-img/Angeles.png";
import Beegees from "../assets/cupido-img/Beegees.png";
import Brian from "../assets/cupido-img/Brian.png";
import Deadmau5 from "../assets/cupido-img/Deadmau5.png";
import Kendrick from "../assets/cupido-img/Kendrick.png";
import Marley from "../assets/cupido-img/Marley.png";
import Ozuna from "../assets/cupido-img/Ozuna.png";
import Queen from "../assets/cupido-img/Queen.png";
import Yanni from "../assets/cupido-img/Yanni.png";

export default function Profile() {
  return (
    <div id="containerProfile">
      <div id="top-gradient"></div>
      <section id="img-container">
        <img src={profilePic} />
      </section>
      <div id="config-btn">
        <Link to={"/profile-config"}>
          <img src={config} />
        </Link>
      </div>
      <section id="name-user">
        <h3 id="name">Mara Perez</h3>
        <p id="user">@mara_pg</p>
      </section>
      <section id="titleAndBtn">
        <h4 id="mis-playlist">Mis playlist</h4>
        <div id="line"></div>
        <button id="crear-playlist">Crear playlist</button>
      </section>
      <section className="playlist-section">
        <ul className="playlistProfile">
          <img className="img-playlist" src={album} alt="" />
          <img className="img-playlist" src={Beegees} alt="" />
          <img className="img-playlist" src={Justin} alt="" />
          <img className="img-playlist" src={Yanni} alt="" />
          <img className="img-playlist" src={Marley} alt="" />
          <img className="img-playlist" src={Queen} alt="" />
          <img className="img-playlist" src={Ozuna} alt="" />
        </ul>
      </section>
    </div>
  );
}
