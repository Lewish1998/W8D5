import { useEffect, useState } from "react"
import FilmDetail from "../components/FilmDetail"
import FilmSelect from "../components/FilmSelect"
import './container.css'

const MainContainer = () => {
  
    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [planets, setPlanets] = useState([])
    const [characters, setCharacters] = useState([])
    const [ships, setShips] = useState([])

    useEffect( () => {
      fetch('https://swapi.dev/api/films')
      .then(r=>r.json())
      .then(data=>setFilms(data.results))
    }, [])

    const handleSelectChange = (film) => {
        const planetPromises = film.planets.map((planet) => {
          return fetch(planet)
          .then(r=>r.json())
        })    
        const characterPromises = film.characters.map((character) => {
          return fetch(character)
          .then(r=>r.json())
        })
        const shipPromises = film.characters.spaceships.map((ship) => {
          return fetch(ship)
          .then(r=>r.json())
        })
        
        
    Promise.all(planetPromises)
        .then((data) => {
        setPlanets(data)
        setSelectedFilm(film)
    })
    Promise.all(characterPromises)
        .then((data) => {
        setCharacters(data)
        })
    Promise.all(shipPromises)
        .then((data) => {
        setShips(data)
        })
    }  

    return(
        <div className="container">
            {/* <img id="logo" src={require("../images/starwars.png")}></img> */}
            {/* <img id='background'src={require('../images/background.png')}></img> */}
            <div id="header-box">
              <div id="dropdown"><FilmSelect films={films} handleSelectChange={handleSelectChange}/></div>
            </div>
            <div id="film-detail">{selectedFilm ? <FilmDetail film={selectedFilm} planets={planets} characters={characters}/>:null}</div>
        </div>
    )
}

export default MainContainer