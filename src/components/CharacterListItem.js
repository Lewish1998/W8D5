import './css/characterListItem.css'
import StarshipsList from './StarshipsList';

const CharacterListItem = ({character, handleCharacterClick, starship}) => {


        
    const handleClick = () => {
        handleCharacterClick(character)
    }

    // const starshipButton = characters.map((index, name) => {
    //   return <button id='starship-button' onClick={handleClick} key={name} value={index}>Starship</button>
    // })

 return(
    <div>
    <li id="list-item">
        <h4>{character.name}</h4>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Colour: {character.hair_color}</p>
        <p>Skin Colour: {character.skin_color}</p>
        <p>Eye Colour: {character.eye_color}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <button onClick={handleClick} value={character}>Starships</button>
    </li>
        <h3>{starship.name}</h3>
    </div>
 ) 
};

export default CharacterListItem;