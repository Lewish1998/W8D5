import './css/starshipsList.css'
import StarshipListItems from "./StarshipListItems"

const StarShipsList = ({starship}) => {
    const starshipItems = starship.map((ship, index) => {
      return <StarshipListItems key={index} ship={ship}/>
    })

    return(
        <div>
            <ul id='ship-grid'>
                {starshipItems}
            </ul>
        </div>
    )
}

export default StarShipsList