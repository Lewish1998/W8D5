const PlanetListItem = ({planet}) => {
  return(
    <li>
      <h4>{planet.name}</h4>
      <p><b>Rotation Period: </b>{planet.rotation_period}</p>
      <p><b>Orbital Period: </b>{planet.orbital_period}</p>
      <p><b>Climate: </b>{planet.climate}</p>
      <p><b>Gravity: </b>{planet.gravity}</p>
      <p><b>Terrain: </b>{planet.terrain}</p>
      <p><b>Population: </b>{planet.population}</p>
    </li>
  )
}

export default PlanetListItem;