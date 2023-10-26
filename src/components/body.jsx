import CharacterTag from "./Characters"

function ShowContent() {

    const tarjetas = []

    for (let i = 0; i < 3; i++) {
        tarjetas.push(<CharacterTag key={i} characterID={randomInt(1, 50)} />)
        
    }
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="">
                    {tarjetas}
                </div>

                <div className="">
                    {tarjetas}
                </div>
            </div>
        </div>
    )
}

function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}


export default ShowContent