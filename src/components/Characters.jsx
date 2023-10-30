/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function CharacterTag({ characterID }) {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((res) => res.json())
      .then((data) => setCharacterData(data))
      .catch((error) => console.error(error));
  }, [characterID]);

  return (
    <div className="ms-4 me-4">
      {characterData ? (
        <div className="w-100 bg-body d-flex mb-4">
          
          <img
            src={characterData.image}
            className=""
            alt="characterImage"
          />
          <div className="p-4">
            <h3>nombre {characterData.name}</h3>
            <p>stado: {characterData.status}</p>
            <p>especie: {characterData.species}</p>
            <p>origin: {characterData.origin.name}</p>
            <p>Last Location: {characterData.location.name}</p>
            <p> created at: {characterData.created}</p>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}



function TagCharacter() {
  return (
    <div></div>
  )
}

export default CharacterTag;
