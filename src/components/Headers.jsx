import SearchBarCharacterByName from "./searchBarCharacter";

function Header() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-light">
      <div className="text-center mb-4 mt-4">
        <h1>Wiki Y Morty</h1>
        <span>Esta web esta hecha para que consultes el estado de tu personaje favorito</span>
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn btn-success mx-5" onClick={() => alert("muestra todos los personajes")}>Todos los personajes</button>
        <SearchBarCharacterByName />
        <button className="btn btn-success mx-5" onClick={() => alert("muestra especies")}>ver especies</button>
      </div>
    </div>
  );
}

export default Header;
