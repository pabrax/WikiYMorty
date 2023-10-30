import CharacterTag from "./Characters";

function ShowContent() {
  const tarjetas = [];

  for (let i = 0; i < 3; i++) {
    tarjetas.push(<CharacterTag key={i} characterID={randomInt(i, 50)} />);
  }

  return (
    <div className="container-fluid d-flex p-0 mt-10">
      <div className="">{tarjetas}</div>
      <div className="">{tarjetas}</div>
    </div>
  );
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default ShowContent;
