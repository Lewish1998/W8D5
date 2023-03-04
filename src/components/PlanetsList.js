import PlanetListItem from "./PlanetListItem"
// import './planetList.css'

const PlanetList = ({planets}) => {
  const planetItems = planets.map((planet, index) => {
    return <PlanetListItem key={index} planet={planet}/>
  })

  return(
    <div>
        <h3>Planet List</h3>
        <ul>
            {planetItems}
        </ul>
    </div>
  )
}

export default PlanetList;