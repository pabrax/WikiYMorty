/* eslint-disable react/prop-types */
import { useState } from "react";

// crea una barra de busqueda que filtra por el nombre
function SearchBarCharacterByName({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [SearchResult, setSearchResult] = useState([]);

  function handleSearch() {
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.results);
        onSearchResults(data.results);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="d-flex justify-content-center ps-4 pe-4">
      <input
        className="form-control "
        type="text"
        placeholder="Buscar Personajes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBarCharacterByName;
