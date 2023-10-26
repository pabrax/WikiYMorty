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
    <div className="card w-50 d-flex mb-4">
      {characterData ? (
        <div className="bg-body d-flex card-body">
          
          <img
            src={characterData.image}
            className="m-0 p-0"
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


function CharacterFullView() {

    const [] = useState(null)

    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
        .then((res) => res.json())
        .then((data) => setCharacterData(data))
        .catch((error) => console.error(error));
    }, [characterID]);

    return (
        <div>
            {characterData ? (
                <div>
                    <div>
                        <h1>{characterData.name}</h1>
                    </div>

                    <div>
                        
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
    
}
export default CharacterTag;
