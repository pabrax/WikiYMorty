import SearchBarCharacterByName from "./searchBarCharacter";

function Header() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-light mb-5 mt-5">
      <h1 className="mb-5">Informacion de los personajes</h1>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success mx-5">Personajes Vivos</button>
        <SearchBarCharacterByName />
        <button className="btn btn-success mx-5">ver especies</button>
      </div>
    </div>
  );
}

export default Header;
