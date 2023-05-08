import "../Styles/search.css";
import iconInput from "../src/assets/search-icon-input.svg";

function Search() {
  return (
    <>
      <header id="container">
        <div id="top-gradient"></div>
        <h2 id="title">Buscador</h2>
        <div id="search-container">
          <img id="icon" src={iconInput} />
          <input
            id="search-input"
            type="text"
            placeholder="¿Que deseas escuchar?"
          />
        </div>
      </header>
    </>
  );
}

export default Search;
