import CharacterTag from "./Characters";
import "../assets/styles/PrincipalContent.css";
import Paginations, {SearchByPages} from "./paginations";
import { useState } from "react";

function ShowContent() {
  
  const TagPreview = [];
  const [pageID, setPageID] = useState(4)

  for (let i = 0; i < 3; i++) {
    TagPreview.push(<CharacterTag key={i} characterID={randomInt(i, 50)} />);
  }

  return (
    <section className="sC">
      {pageID  > 0 ? (
        <div className="PcCrdContainer">
          <SearchByPages pageID={pageID}/>
        </div>
      ):(
      <div className="PcCrdContainer">
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
        <CharacterTag characterID={randomInt(1, 50)} />
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

export default ShowContent;



{/* <Paginations counter={pageID} setCounter={() => setPageID(pageID)}/> */}