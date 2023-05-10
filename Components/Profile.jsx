import profilePic from "../src/assets/ProfilePic.png";
import "../Styles/Profile.css";
import { Link } from "react-router-dom";
import config from "../src/assets/config.svg";
import album from "../src/assets/albumImg.png";
import begees from "../src/assets/cupido-img/beeGees.png";
import justin from "../src/assets/cupido-img/justin.png";
import yanni from "../src/assets/cupido-img/yanni.png";
import marley from "../src/assets/cupido-img/marley.png";
import freddy from "../src/assets/cupido-img/mercury.png";
import ozuna from "../src/assets/cupido-img/ozuna.png";

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
      <section id="buttonSectionProfile">
        <h5 id="my-playlist">Mis playlist</h5>
        <div id="line"></div>
        <button id="create-playlist">Crear playlist</button>
      </section>
      <section className="playlist-section">
        <ul className="playlistProfile">
          <img className="img-playlist" src={album} alt="" />
          <img className="img-playlist" src={begees} alt="" />
          <img className="img-playlist" src={justin} alt="" />
          <img className="img-playlist" src={yanni} alt="" />
          <img className="img-playlist" src={marley} alt="" />
          <img className="img-playlist" src={freddy} alt="" />
          <img className="img-playlist" src={ozuna} alt="" />
        </ul>
      </section>
    </div>
  );
}
