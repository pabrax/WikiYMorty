import Character from "./Characters"

function ShowContent() {

    const tarjetas = []

    for (let i = 0; i < 3; i++) {
        tarjetas.push(<Character key={i} characterID={randomInt(1, 50)} />)
        
    }
    
    return (
        <div className="container d-flex">
            {tarjetas}
        </div>
    )
}

function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}


export default ShowContent