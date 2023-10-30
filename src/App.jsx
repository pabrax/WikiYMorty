import Header from './components/Headers'
import Main from './components/PrincipalContent'
import Footer from './components/Footers'
import NavBar from './components/NavBar'


function App() {
  
  return (
    <div className='bg-dark'>
      <NavBar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
