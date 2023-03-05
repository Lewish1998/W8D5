// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import './css/characterList.css'
import CharacterListItem from './CharacterListItem'

const CharacterList = ({characters, setSelectedCharacter}) => {
  const characterItems = characters.sort((a, b) => a.name > b.name ? 1 : -1).map((character, index) => {
    return <CharacterListItem key={index} character={character} setSelectedCharacter={setSelectedCharacter} characters={characters}/>
  })

  return(
    <div>
        <h3 id='heading'>Characters</h3>
        <select>
          <option selected>Add a select bar to sort the characters by different properties.</option>
          <option>Alphabetical</option>
          <option>Birth Year</option>
        </select>
        <ul id='character-list'>{characterItems}</ul>

    </div>
  )
}

export default CharacterList