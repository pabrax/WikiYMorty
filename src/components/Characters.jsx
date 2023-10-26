/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Character({ characterID }) {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((res) => res.json())
      .then((data) => setCharacterData(data))
      .catch((error) => console.error(error));
  }, [characterID]);

  return (
    <div className="card ">
      {characterData ? (
        <div className="bg-secondary text-light d-flex card-body">
          
          <img
            src={characterData.image}
            className="w-50 h-50"
            alt="characterImage"
          />
          <div className="p-4">
            <h3>{characterData.name}</h3>
            <p>{characterData.status}</p>
            <p>{characterData.species}</p>
            <p>origin: {characterData.origin.name}</p>
            <p>Last Location: {characterData.location.name}</p>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default Character;
