const StarshipListItems = ({ship}) => {
  
    return(
        <div>
        <li>
            <h4>{ship.name}</h4>
            <p>Model: {ship.model}</p>
            <p>Manufacturer: {ship.manufacturer}</p>
            <p>Price: {ship.cost_in_credits}</p>
            <p>Max Atmospheric Speed: {ship.max_atmosphering_speed}</p>
            <p>Cargo Capacity: {ship.cargo_capacity}</p>
            <p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
            <p>Class: {ship.starship_class}</p>
        </li>
        </div>
    )
}

export default StarshipListItems;