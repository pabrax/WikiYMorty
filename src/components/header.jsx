function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg  bg-body-tertiary ">
            
            <div className="container-fluid">
                <a className="navbar-brand" href="#">home</a>
                <a className="navbar-brand" href="#">Characters</a>
                <a className="navbar-brand" href="#">Locations</a>
                <a className="navbar-brand" href="#">Episodes</a>
            </div>
        </nav>
    )
}

function WikiYmorty() {
    
    return (
        <div className="text-success text-center">
            <h1 style="font-size : 24px">Rick y Morty Wiki</h1>
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