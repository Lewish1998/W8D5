import FilmDetails from "./FilmDetails"
const FilmsList = ({films}) => {
  
    const filmItems = (films.map((film, index) => {
      return <FilmDetails film={film} key={index}/>
    }))

    return(
        <ul>
            {filmItems}
        </ul>
    )
}

export default FilmsList