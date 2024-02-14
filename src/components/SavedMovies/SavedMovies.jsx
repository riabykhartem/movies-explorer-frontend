import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { LoadingIndicator } from "../../utils/LoadingIndicator";
import { useLocation } from "react-router-dom";

export default function SavedMovies({
  movies,
  getFilteredMovies,
  onDislike,
  handleShortMoviesCheck,
  isChecked,
  savedMovies,
}) {
  const location = useLocation();

  return (
    <main className="movies">
      <SearchForm
        isChecked={isChecked}
        onSubmit={getFilteredMovies}
        handleShortMoviesCheck={handleShortMoviesCheck}
      />
      <LoadingIndicator />
      <MoviesCardList
        movies={movies}
        onDislike={onDislike}
        savedMovies={savedMovies}
      />
    </main>
  );
}
