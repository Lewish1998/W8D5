const PlanetListItem = ({planet}) => {



// pretend this isn't here. No idea how it works but it looks nice
  function commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  




  return(
    <li>
      <h4>{planet.name}</h4>
      <p><b>Rotation Period: </b>{planet.rotation_period}</p>
      <p><b>Orbital Period: </b>{planet.orbital_period}</p>
      <p><b>Climate: </b>{planet.climate}</p>
      <p><b>Gravity: </b>{planet.gravity}</p>
      <p><b>Terrain: </b>{planet.terrain}</p>
      <p><b>Population: </b>{commas(planet.population)}</p>
    </li>
  )
}

export default PlanetListItem;