import CharacterTag from "./Characters";
import "../assets/PrincipalContent.css";

function ShowContent() {
  const tarjetas = [];

  for (let i = 0; i < 3; i++) {
    tarjetas.push(<CharacterTag key={i} characterID={randomInt(i, 50)} />);
  }

  return (
    <section className="sC">
      <div className="PcCrdContainer">
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
      </div>
    </section>
  );
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default ShowContent;
