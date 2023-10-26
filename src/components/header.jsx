import SearchBarCharacterByName from "./searchBarCharacter"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg  bg-body-tertiary bg-dark" data-bs-theme="dark">
            
            <div className="container-fluid">
                <a className="navbar-brand" href="/">home</a>
                <SearchBarCharacterByName/>
            </div>
        </nav>
    )
}

function WikiYmorty() {
    
    return (
        <div className="text-success text-center" >
            <h1>Rick y Morty Wiki</h1>
            <p>Esta es una wiki de Rick y Morty</p>
        </div>
    )
}

function PrimeraVista() {
    return (
        <div>
            <NavBar />
            <WikiYmorty />

        </div>
    )
}


export default PrimeraVista