import SearchBarCharacterByName from "./searchBarCharacter";

function Header() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-dark">
      <div className="text-center mb-4 mt-4">
        <h1>Wiki Y Morty</h1>
        <span>Esta web esta hecha para que consultes el estado de tu personaje favorito</span>
      </div>

      <div className="d-flex justify-content-center">
        <SearchBarCharacterByName />
      </div>
    </div>
  );
}

export default Header;
