import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AllStarships from "../components/AllStarships"
import { useEffect, useState } from "react"
import FilmDetail from "../components/FilmDetail"
import FilmSelect from "../components/FilmSelect"
import './container.css'
import { useNavigate } from "react-router-dom"

const MainContainer = () => {
  
    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [planets, setPlanets] = useState([null])
    const [characters, setCharacters] = useState([])
    const [starship, setStarship] = useState([])
    const [allShips, setAllShips] = useState([])


    useEffect( () => {
      fetch('https://swapi.dev/api/films')
      .then(r=>r.json())
      .then(data=>setFilms(data.results))
    }, [])

    useEffect(() => {
      fetch('https://swapi.dev/api/starships/')
      .then(r=>r.json())
      .then(data=>setAllShips(data.results))
    },[])


    const handleSelectChange = (film) => {
        const planetPromises = film.planets.map((planet) => {
          return fetch(planet)
          .then(r=>r.json())
        })    
        const characterPromises = film.characters.map((character) => {
          return fetch(character)
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
    }  


    const handleCharacterClick = (character) => {
      const starshipPromises = character.starships.map((starship) => {
        return fetch(starship)
        .then(r=>r.json())
      })
      Promise.all(starshipPromises)
      .then((data) => {
      data?setStarship(data):setStarship(null)
      console.log(starship)
      });
    }

    return(
        <div className="container">
            {/* <img id="logo" src={require("../images/starwars.png")}></img> */}
            {/* <img id='background'src={require('../images/background.png')}></img> */}
            <div id="header-box">
              <div id="dropdown"><FilmSelect films={films} handleSelectChange={handleSelectChange}/></div>
            </div>
            <div id="film-detail">{selectedFilm ? <FilmDetail film={selectedFilm} planets={planets} characters={characters} starship={starship} handleCharacterClick={handleCharacterClick}/>:null}</div>

            <Router>
              <Routes>
                <Route path="/starships" element={<AllStarships allShips={allShips}/>}/>
              </Routes>
            </Router>
              

        </div>
    )
}

export default MainContainer