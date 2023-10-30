import React, { useEffect, useState } from "react";
import CharacterTag from "./Characters";

function paginations({ counter, setCounter }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => setCounter(counter - 1)}
            href="#"
          >
            Previous
          </a>
        </li>
        <li className="page-item">
          {counter <= 0 ? (
            <></>
          ) : (
            <a className="page-link" href="#">
              {counter - 1}
            </a>
          )}
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            {counter}
          </a>
        </li>
        <li className="page-item">
          {counter >= 42 ? (
            <></>
          ) : (
            <a className="page-link" href="#">
              {counter + 1}
            </a>
          )}
        </li>
        <li className="page-item">
          {counter >= 42 ? (
            <></>
          ) : (
            <a
              className="page-link"
              onClick={() => setCounter(counter + 1)}
              href="#"
            >
              Next
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}

export function SearchByPages({ pageID }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageID}`)
      .then((res) => res.json())
      .then((data) => setContent(data.results))
      .catch((error) => console.error(error));
  }, [pageID]);

  return (
    <>
      {content.length > 0 ? (
        <>
          {content.map((character) => (
            <CharacterTag key={character.id} characterID={character.id} />
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default paginations;
