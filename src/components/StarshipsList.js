import StarshipListItems from "./StarshipListItems"

const StarShipsList = ({starship}) => {
    const starshipItems = starship.map((ship, index) => {
      return <StarshipListItems key={index} ship={ship}/>
    })

    return(
        <div>
            <h3>Starships</h3>
            <ul>
                {starshipItems}
            </ul>
        </div>
    )
}

export default StarShipsList