const FilmSelect = ({films, handleSelectChange}) => {
  
    const handleChange = (event) => {
        const index = event.target.value;
        handleSelectChange(films[index])
    }

    // Change to this to change buttons to dropdown
    // const filmOptions = films.map((film, index) => {
    //   return <option key={index} value={index}>{film.title}</option>
    // });


// a/b.episode_id > = 456, 123
// a/b.title > = alphabetical
// a/b.release_date = release date

    const filmButton = films.sort((a, b) => a.release_date > b.release_date ? 1: -1).map((film, index) => {
      return <button onClick={handleChange} key={index} value={index}>{film.title}</button>
    })

    





    return(
        <div>
        {/* Change to dropdown */}
        {/* <select onChange={handleChange}>
            {filmOptions}
        </select> */}
        {filmButton}
        </div>

    )
}

export default FilmSelect;