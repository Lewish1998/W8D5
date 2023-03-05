import './css/filmDetail.css'
import CharacterList from "./CharacterList";
import PlanetList from "./PlanetsList";

const FilmDetail = ({film, planets, characters, handleCharacterClick}) => {
  return(
    <div id="outer-box">
        <div id="inner-box">
            <h2>{film.title}</h2>
            <p><b>Directer: </b>{film.director}</p>
            <p><b>Producer: </b>{film.producer}</p>
            <p><b>Release Date: </b>{film.release_date}</p>
        </div>
        <div>
            <PlanetList planets={planets}/>
        </div>
        <div>
          <CharacterList characters={characters} handleCharacterClick={handleCharacterClick}/>
        </div>
    </div>
  )
}

export default FilmDetail