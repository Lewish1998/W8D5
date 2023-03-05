import PlanetListItem from "./PlanetListItem"
import './css/planetList.css'

const PlanetList = ({planets}) => {
  const planetItems = planets.map((planet, index) => {
    return <PlanetListItem key={index} planet={planet}/>
  })

  return(
    <div>
        <h3 id="heading">Planet List</h3>
        <ul id="planet-list">
            {planetItems}
        </ul>
    </div>
  )
}

export default PlanetList;