import StarShipsList from "./StarshipsList"

const AllStarships = ({allShips}) => {
  


    return(
        <div>
            <h1>Starships</h1>
            <StarShipsList starship={allShips}/>
        </div>
    )
}

export default AllStarships