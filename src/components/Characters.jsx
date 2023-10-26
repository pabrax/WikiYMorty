/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Character( {characterID} ) {
    const [characterData, setCharacterData] = useState(null)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
        .then((res) => res.json())
        .then((data) => setCharacterData(data))
        .catch((error) => console.error(error))
    }, [characterID]
    )

    return(
        <div>
            {characterData ? (
                <div>
                    <h2>{characterData.name}</h2>
                    <p>{characterData.status}</p>
                    <p>{characterData.species}</p>
                    <p>origin: {characterData.origin.name}</p>
                    <p>Last Location: {characterData.location.name}</p>
                    <img src={characterData.image} alt="characterImage" />
                </div>
            ):(
                <div>loading...</div>
            )}
        </div>
    )
}


export default Character
