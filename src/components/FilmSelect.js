const FilmSelect = ({films, handleSelectChange}) => {
  
    const handleChange = (event) => {
        const index = event.target.value;
        handleSelectChange(films[index])
    }

    // Change to this to change buttons to dropdown
    // const filmOptions = films.map((film, index) => {
    //   return <option key={index} value={index}>{film.title}</option>
    // });

    const filmButton = films.map((film, index) => {
      return <button onClick={handleChange} key={index} value={index}>{film.title}</button>
    })
    return(
        <div>
        {/* <select onChange={handleChange}>
            {filmOptions}
        </select> */}
        {filmButton}
        </div>

    )
}

export default FilmSelect;