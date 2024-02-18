import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { LoadingIndicator } from "../../utils/LoadingIndicator";

export default function Movies({
  noMoviesFound,
  movies,
  getFilteredMovies,
  onLike,
  onDislike,
  handleShortMoviesCheck,
  shortMoviesChecked,
  currentUser,
  savedMovies,
}) {
  return (
    <main className="movies">
      <SearchForm
        isChecked={shortMoviesChecked}
        onSubmit={getFilteredMovies}
        handleShortMoviesCheck={handleShortMoviesCheck}
      />
      <LoadingIndicator />
      <MoviesCardList
        noMoviesFound={noMoviesFound}
        movies={movies}
        savedMovies={savedMovies}
        onLike={onLike}
        onDislike={onDislike}
        currentUser={currentUser}
      />
    </main>
  );
}
