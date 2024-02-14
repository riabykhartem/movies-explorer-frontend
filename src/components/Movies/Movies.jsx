import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { LoadingIndicator } from "../../utils/LoadingIndicator";

export default function Movies({
  movies,
  getFilteredMovies,
  onLike,
  onDislike,
  cashedSearchValue,
  handleShortMoviesCheck,
  shortMoviesChecked,
  currentUser,
  savedMovies
}) {
  return (
    <main className="movies">
      <SearchForm
        isChecked={shortMoviesChecked}
        onSubmit={getFilteredMovies}
        cashedSearchValue={cashedSearchValue}
        handleShortMoviesCheck={handleShortMoviesCheck}
      />
      <LoadingIndicator />
      <MoviesCardList movies={movies} savedMovies={savedMovies} onLike={onLike} onDislike={onDislike} currentUser={currentUser}/>
    </main>
  );
}
