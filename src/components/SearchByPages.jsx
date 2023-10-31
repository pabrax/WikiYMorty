function SearchByPages({ pageID }) {
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
            <Character key={character.id} characterID={character.id} />
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default SearchByPages;
