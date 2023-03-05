const StarshipListItems = ({starship}) => {
  
    return(
        <li>
            <h4>{starship.name}</h4>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Price: {starship.cost_in_credits}</p>
            <p>Max Atmospheric Speed: {starship.max_atmosphering_speed}</p>
            <p>Cargo Capacity: {starship.cargo_capacity}</p>
            <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
            <p>Class: {starship.starship_class}</p>
        </li>
    )
}

export default StarshipListItems;