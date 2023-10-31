// components
import Header from './components/Headers'
import MainContent from './components/MainContent'
import Footer from './components/Footers'
import NavBar from './components/NavBar'
import Paginations from "./components/paginations";

// styles
import './assets/styles/App.css'
import { useState } from 'react';
import SearchBarCharacterByName from './components/SearchBarCharacterByName';


// main Function
function App() {

  const [pageID, setPageID] = useState(0)
  const [searchResult, setsearchResult] = useState([]);

  const handleSearchResults = (results) => {
    setsearchResult(results);
  };

  return (
    <div className='App'>
      <NavBar />
      <Header/>
      <SearchBarCharacterByName onSearchResults={handleSearchResults}/>
      <MainContent PageID={pageID} SearchResults={searchResult}/>
      <Paginations counter={pageID} setCounter={setPageID}/>
      <Footer/>
    </div>
  )
}

export default App
