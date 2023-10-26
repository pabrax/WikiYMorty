// import Episode from './components/Episodes'
import Character from './components/Characters';
import SearchBarCharacterByName from './components/searchBarCharacter';
import './App.css'

function App() {
  // const episodeID = 3;
  const characterID = 45
  
  return (
    <div className='App'>
      <SearchBarCharacterByName />
      <h1>datos del personaje</h1>
      <Character characterID={characterID}/>
      {/* <Episode episodeID={episodeID}/> */}
    </div>
  )
}

export default App
