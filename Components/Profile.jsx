import profilePic from "../src/assets/ProfilePic.png";
import "../Styles/Profile.css";
import { Link } from "react-router-dom";
import config from "../src/assets/config.svg";
import album from "../src/assets/albumImg.png";
import Justin from "../src/assets/cupido-img/Justin.png";
import Angeles from "../src/assets/cupido-img/Angeles.png";
import Beegees from "../src/assets/cupido-img/Beegees.png";
import Brian from "../src/assets/cupido-img/Brian.png";
import Deadmau5 from "../src/assets/cupido-img/Deadmau5.png";
import Kendrick from "../src/assets/cupido-img/Kendrick.png";
import Marley from "../src/assets/cupido-img/Marley.png";
import Ozuna from "../src/assets/cupido-img/Ozuna.png";
import Queen from "../src/assets/cupido-img/Queen.png";
import Yanni from "../src/assets/cupido-img/Yanni.png";

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
