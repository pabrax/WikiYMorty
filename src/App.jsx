// components
import Header from './components/Headers'
import MainContent from './components/MainContent'
import Footer from './components/Footers'
import NavBar from './components/NavBar'
import Paginations from "./components/paginations";

// styles
import './assets/styles/App.css'
import { useState } from 'react';


// main Function
function App() {

  const [pageID, setPageID] = useState(0)
  
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <MainContent PageID={pageID}/>
      <Paginations counter={pageID} setCounter={setPageID}/>
      <Footer/>
    </div>
  )
}

export default App
