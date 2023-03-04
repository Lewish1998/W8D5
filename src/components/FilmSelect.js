const FilmSelect = ({films, handleSelectChange}) => {
  
    const handleChange = (event) => {
        const index = event.target.value;
        handleSelectChange(films[index])
    }

    const filmOptions = films.map((film, index) => {
      return <option key={index} value={index}>{film.title}</option>
    });

    return(
        <select onChange={handleChange}>
            {filmOptions}
        </select>
    )
}

export default FilmSelect