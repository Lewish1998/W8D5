import StarshipListItems from "./StarshipListItems"

const StarShipsList = ({starships}) => {
    const starshipItems = starships.map((starship, index) => {
      return <StarshipListItems key={index} starship={starship}/>
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