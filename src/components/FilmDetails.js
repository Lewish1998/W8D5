const FilmDetails = ({film}) => {
  return(
    <div>
    <li>Title: {film.title}</li>
    <li>Release Date: {film.release_date}</li>
    <br></br>
    </div>
  )
}

export default FilmDetails