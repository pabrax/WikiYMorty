/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import '../assets/styles/Character.css'

function CharacterTag({ characterID }) {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((res) => res.json())
      .then((data) => setCharacterData(data))
      .catch((error) => console.error(error));
  }, [characterID]);

  return (
    <>
      {characterData ? (
        <div className="CharacterCard">
          <div className=" d-flex">
            <img src={characterData.image} alt="characterImage" />
          </div>
          <div className="CcContent">
            <div className="Ccsection">
              <h3>{characterData.name}</h3>
              <span>{characterData.status} - {characterData.species}</span>
            </div>
            <div className="Ccsection">
              <span>Origin: </span>
              <span>{characterData.origin.name}</span>
              <span>Last Location:</span>
              <span>{characterData.location.name}</span>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}

function TagCharacter() {
  return <div></div>;
}

export default CharacterTag;
