import '../assets/styles/Header.css'

function Header() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center mb-4 mt-4">
        <h1 className='txtConf'>Wiki Y Morty</h1>
        <span className='subtxt'>
          Esta web esta hecha para que consultes el estado de tu personaje
          favorito
        </span>
      </div>
    </div>
  );
}

export default Header;
