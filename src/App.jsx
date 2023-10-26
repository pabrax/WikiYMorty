import CharacterTag from './components/Characters';
import SearchBarCharacterByName from './components/searchBarCharacter';
import PrimeraVista from './components/header';
import ShowContent from './components/body';
import Footer from './components/footer';
import './App.css'

function App() {
  
  return (
    <div className='bg-dark'>
      <PrimeraVista />
      <ShowContent/>
      <Footer/>
    </div>
  )
}

export default App
