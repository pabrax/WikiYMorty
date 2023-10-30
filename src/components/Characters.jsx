/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import '../assets/Character.css'

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
        <div className="bg-body CharacterCard">
          <div className=" d-flex">
            <img src={characterData.image} alt="characterImage" />
          </div>
          <div className="CcContent">
            <h3>nombre {characterData.name}</h3>
            <p>stado: {characterData.status}</p>
            <p>especie: {characterData.species}</p>
            <p>origin: {characterData.origin.name}</p>
            <p>{characterData.location.name}</p>
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
