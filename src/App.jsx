// components
import Header from './components/Headers'
import Main from './components/PrincipalContent'
import Footer from './components/Footers'
import NavBar from './components/NavBar'
import Paginations from "./components/paginations";

// styles
import './assets/styles/App.css'


// main Function
function App() {
  
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
