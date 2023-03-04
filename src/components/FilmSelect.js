const FilmSelect = ({films, handleSelectChange}) => {
  
    const handleChange = (event) => {
        const index = event.target.value;
        handleSelectChange(films[index])
    }

    // Change to this to change buttons to dropdown
    // const filmOptions = films.map((film, index) => {
    //   return <option key={index} value={index}>{film.title}</option>
    // });



// ORIGINAL DON'T DELETE
    films.sort((a, b) => a.title < b.title ? 1 : -1)
    const filmButton = films.sort((a, b) => a.title < b.title ? 1: -1).map((film, index) => {
      return <button onClick={handleChange} key={index} value={index}>{film.title}</button>
    })

// This doesn't work 
    // const filmButton = films.sort((a, b => a.title > b.title) ? 1:-1).map((film, index) => {
    //       return <button onClick={handleChange} key={index} value={index}>{film.title}</button>
    //     })
        
    // films.sort((a, b) => a.title < b.title ? 1 : -1)





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