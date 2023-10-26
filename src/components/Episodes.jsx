/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

function Episode({ episodeID }) {

    const [episodeData, setEpisodeData] = useState(null);
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${episodeID}`)
        .then((res) => res.json())
        .then((data) => {
            const characterUrls = data.characters;
            const characterPromises = characterUrls.map((url) => fetch(url).then((res) => res.json()));
            Promise.all(characterPromises)
            .then((characterData) => {
                const episodeWithCharacters = {
                    ...data,
                    characters: characterData,
                }
                setEpisodeData(episodeWithCharacters)
            })
            .catch((error) => console.error("error al obtener los datos de personajes: ", error));
        })
        .catch((error) => console.error("error al mostrar el episodio", error))
    }, [episodeID])

    return(
        <div>
            {episodeData ? (
                <div>
                    <h2>{episodeData.title}</h2>
                    <p>{episodeData.episode}</p>
                    <h3>Personajes: </h3>
                    {episodeData.characters.map((character, index) => (
                        <p key={index}>{character.name}</p>
                    ))}
                </div>
            ):(
                <div>loading...</div>
            )}
        </div>
    )
}

export default Episode