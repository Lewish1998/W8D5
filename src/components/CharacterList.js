import './css/characterList.css'
import CharacterListItem from './CharacterListItem'

const CharacterList = ({characters}) => {
  const characterItems = characters.sort((a, b) => a.name > b.name ? 1 : -1).map((character, index) => {
    return <CharacterListItem key={index} character={character}/>
  })

  return(
    <div>
        <h3>Character List</h3>
        <ul id='character-list'>{characterItems}</ul>
    </div>
  )
}

export default CharacterList