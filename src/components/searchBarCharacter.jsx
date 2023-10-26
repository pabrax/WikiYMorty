/* eslint-disable react/prop-types */
import {  useState } from "react"
import CharacterTag from "./Characters";


export function SearchBarCharacterByName() {

    const [searchQuery, setSearchQuery] = useState('');
    const [SearchResult, setSearchResult] = useState([]);

    function handleSearch() {
        fetch(`https://rickandmortyapi.com/api/character/?name=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => setSearchResult(data.results))
        .catch((error) => console.error(error));
    }

    return (
        <div>
            <input type="text" placeholder="Buscar Personajes..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
            <button onClick={handleSearch}>Buscar</button>

            {SearchResult.length > 0 ? (
                <ul>
                    {SearchResult.map((character)=> (
                        <Character key={character.id} characterID={character.id}/>
                    ))}
                </ul>
            ) : (
                <div>no se encontraron resultados.</div>
            )}
        </div>
    )
}



export default SearchBarCharacterByName;