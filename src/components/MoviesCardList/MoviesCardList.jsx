import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  LARGE_SCREEN,
  MEDIUM_SCREEN,
  SMALL_SCREEN,
  LARGE_SCREEN_MOVIES,
  MEDIUM_SCREEN_MOVIES,
  SMALL_SCREEN_MOVIES,
  LARGE_SCREEN_STEP,
  MEDIUM_SCREEN_STEP,
  SMALL_SCREEN_STEP,
  MOBILE_SCREEN_MOVIES,
} from "../../utils/constants";

export default function MoviesCardList({
  noMoviesFound,
  movies,
  onLike,
  onDislike,
  savedMovies,
}) {
  function checkInitialVisible() {
    if (window.innerWidth > LARGE_SCREEN) {
      return LARGE_SCREEN_MOVIES;
    } else if (window.innerWidth > MEDIUM_SCREEN) {
      return MEDIUM_SCREEN_MOVIES;
    } else if (window.innerWidth > SMALL_SCREEN) {
      return SMALL_SCREEN_MOVIES;
    } else {
      return MOBILE_SCREEN_MOVIES;
    }
  }
  function checkStepSize() {
    if (window.innerWidth > LARGE_SCREEN) {
      return LARGE_SCREEN_STEP;
    } else if (window.innerWidth > MEDIUM_SCREEN) {
      return MEDIUM_SCREEN_STEP;
    } else if (window.innerWidth > SMALL_SCREEN) {
      return SMALL_SCREEN_STEP;
    } else {
      return SMALL_SCREEN_STEP;
    }
  }

  const [visibleMovies, setVisibleMovies] = useState(checkInitialVisible);
  const [stepSize, setStepSize] = useState(checkStepSize);
  const location = useLocation();

  function handleShowMore() {
    setVisibleMovies(visibleMovies + stepSize);
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      function handleResize() {
        if (window.innerWidth > LARGE_SCREEN) {
          setVisibleMovies(LARGE_SCREEN_MOVIES);
          setStepSize(LARGE_SCREEN_STEP);
        } else if (window.innerWidth > MEDIUM_SCREEN) {
          setVisibleMovies(MEDIUM_SCREEN_MOVIES);
          setStepSize(MEDIUM_SCREEN_STEP);
        } else if (window.innerWidth > SMALL_SCREEN) {
          setVisibleMovies(SMALL_SCREEN_MOVIES);
          setStepSize(SMALL_SCREEN_STEP);
        } else {
          setVisibleMovies(MOBILE_SCREEN_MOVIES);
          setStepSize(SMALL_SCREEN_STEP);
        }
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [location.pathname, movies]);

  function handleDislike(movie) {
    savedMovies.filter((item) => item.movieId !== movie.id);
    onDislike(movie);
  }

  return (
    <section className="MoviesCardList">
      <div
        className={` ${
          noMoviesFound
            ? "MoviesCardList__not-found-container"
            : "MoviesCardList__grid-container"
        }`}
      >
        {location.pathname === "/movies" ? (
          noMoviesFound ? (
            <p className="MoviesCardList__not-found">Ничего не найдено</p>
          ) : (
            movies.slice(0, visibleMovies).map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  movieId={movie.id}
                  onLike={onLike}
                  onDislike={onDislike}
                  savedMovies={savedMovies}
                />
              );
            })
          )
        ) : (
          savedMovies.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.movieId}
                movieId={movie.movieId}
                onLike={onLike}
                onDislike={handleDislike}
                savedMovies={savedMovies}
              />
            );
          })
        )}
      </div>
      {location.pathname === "/movies" && (
        <button
          onClick={handleShowMore}
          className={`MoviesCardList__button button ${
            visibleMovies > movies.length && "MoviesCardList__button_hidden"
          }`}
        >
          Ещё
        </button>
      )}
    </section>
  );
}
