import CharacterListItem from './CharacterListItem'

const CharacterList = ({characters}) => {
  const characterItems = characters.map((character, index) => {
    return <CharacterListItem key={index} character={character}/>
  })

  return(
    <div>
        <h3>Character List</h3>
        <ul>{characterItems}</ul>
    </div>
  )
}

export default CharacterList