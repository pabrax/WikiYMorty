import "../assets/styles/NavBar.css";

function NavBar() {
  return (
    <nav className="nbdc" data-bs-theme="dark">
      <a href="/">
        <img src="./home-rick-sanchez.svg" alt="" />
      </a>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <a href="https://rickandmortyapi.com/">Api</a>
        </li>
        <li className="list-group-item">
          <a href="https://github.com/pabrax/practicaReact">Github</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
