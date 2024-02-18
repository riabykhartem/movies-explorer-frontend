
function filterMovies(movies, searchValue, shortMoviesChecked) {
  if(searchValue === '' && !shortMoviesChecked){
    return movies;
  }

    const cyrillicCheck = (text) => /[а-я]/i.test(text);
    const isCyrillic = cyrillicCheck(searchValue);
    if (shortMoviesChecked) {
      return movies.filter((movie) => {
        const filterResult = isCyrillic
          ? movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
          : movie.nameEN.toLowerCase().includes(searchValue.toLowerCase());
        return filterResult && movie.duration < 40;
      });
    }
    else{
      return movies.filter((movie) => {
        const filterResult = isCyrillic
          ? movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
          : movie.nameEN.toLowerCase().includes(searchValue.toLowerCase());
        return filterResult;
      });
    }
  }
export { filterMovies }
