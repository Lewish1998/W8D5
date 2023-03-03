import FilmsList from "../components/FilmsList"
import { useEffect, useState } from "react"

const MainContainer = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
      fetch('https://swapi.dev/api/films')
      .then(r=>r.json())
      .then(data=>setFilms(data.results))
    }, [])

  return(
    <div>
        <FilmsList films={films}/>
    </div>
  )
}

export default MainContainer;