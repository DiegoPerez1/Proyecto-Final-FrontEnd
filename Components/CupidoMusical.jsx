import { useNavigate } from "react-router-dom";
import "../Styles/CupidoMusical.css";
import Vector from "../src/assets/Vector.svg";
import like from "../src/assets/green-heart.svg";
import pass from "../src/assets/red-cross.svg";

function CupidoMusical() {

  const navigate = useNavigate();
  

  const onClickLike = () => {
  }
  const onClickPass = () => {
  }

  return (
    <div id="container">
      <div id="top-gradient"></div>
      <header id="header">
        <img src={Vector} />
        <p id="cupido-title">Cupido Musical</p>
      </header>
      <main>
        <img id="img-artist" src="../src/assets/cupido-img/marley.png" />
        <section id="both-icons">
          <button className="icon-btn" onClick={onClickLike}>
            <img src={like} />
          </button>
          <button className="icon-btn" onClick={onClickPass}>
            <img src={pass} />
          </button>
        </section>
      </main>
      <button id="btn-create">Crear Playlist</button>
    </div>
  );
}

export default CupidoMusical;
