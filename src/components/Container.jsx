// components
import Header from "./Headers";
import MainContent from "./MainContent";
import Footer from "./Footers";
import NavBar from "./NavBar";
import Paginations from "./paginations";

// styles
import { useState } from "react";
import SearchBarCharacterByName from "./SearchBarCharacterByName";

// main Function
function Container() {
  const [pageID, setPageID] = useState(0);
  const [searchResult, setsearchResult] = useState([]);

  const handleSearchResults = (results) => {
    setsearchResult(results);
  };

  return (
    <div>
      <NavBar />
      <Header />
      <SearchBarCharacterByName onSearchResults={handleSearchResults} />
      <MainContent PageID={pageID} SearchResults={searchResult} />
      <Paginations counter={pageID} setCounter={setPageID} />
      <Footer />
    </div>
  );
}

export default Container;
