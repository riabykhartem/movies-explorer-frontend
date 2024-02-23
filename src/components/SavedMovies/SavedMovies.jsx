import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { LoadingIndicator } from "../../utils/LoadingIndicator";

export default function SavedMovies({
  getFilteredMovies,
  onDislike,
  handleShortMoviesCheck,
  isChecked,
  savedMovies,
  savedMoviesSearchValue
}) {


  return (
    <main className="movies">
      <SearchForm
        savedMoviesSearchValue={savedMoviesSearchValue}
        isChecked={isChecked}
        onSubmit={getFilteredMovies}
        handleShortMoviesCheck={handleShortMoviesCheck}
      />
      <LoadingIndicator />
      <MoviesCardList
        onDislike={onDislike}
        savedMovies={savedMovies}
      />
    </main>
  );
}
