import Character from "./Characters";
import "../assets/styles/PrincipalContent.css";
import SearchByPages from "./SearchByPages";

function MainContent({ PageID, SearchResults }) {
  const TagPreview = [];

  for (let i = 0; i < 11; i++) {
    TagPreview.push(<Character key={i} characterID={randomInt(i, 50)} />);
  }

  return (
    <section className="sC">
      {PageID > 0 ? (
        <div className="PcCrdContainer">
          {SearchResults.length > 0 ? (
            <>
              {SearchResults.map((character) => (
                <Character key={character.id} characterID={character.id} />
              ))}
            </>
          ) : (
            <SearchByPages pageID={PageID} />
          )}
        </div>
      ) : (
        <div className="PcCrdContainer">
          {TagPreview.map((character, index) => (
            <Character key={index} characterID={character.props.characterID} />
          ))}
        </div>
      )}
    </section>
  );
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default MainContent;
