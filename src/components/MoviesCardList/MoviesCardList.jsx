import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({
  noMoviesFound,
  movies,
  onLike,
  onDislike,
  savedMovies,
}) {
  function checkInitialVisible() {
    if (window.innerWidth > 1279) {
      return 16;
    } else if (window.innerWidth > 958) {
      return 12;
    } else if (window.innerWidth > 767) {
      return 6;
    }
    else {
      return 5;
    }
  }
  function checkStepSize() {
    if (window.innerWidth > 1279) {
      return 8;
    } else if(window.innerWidth > 958){
      return 6
    }
    else if (window.innerWidth > 767) {
      return 2;
    } else {
      return 2;
    }
  }

  const [visibleMovies, setVisibleMovies] = useState(checkInitialVisible);
  const [stepSize, setStepSize] = useState(checkStepSize);
  const location = useLocation();

  function handleShowMore() {
    setVisibleMovies(visibleMovies + stepSize);
  }

  useEffect(() => {
    if(location.pathname === '/movies'){
      function handleResize() {
        if (window.innerWidth > 1279) {
          setVisibleMovies(16);
          setStepSize(8);
        } else if (window.innerWidth > 958) {
          setVisibleMovies(12);
          setStepSize(6);
        }
         else if (window.innerWidth > 767) {
          setVisibleMovies(6);
          setStepSize(2);
        } else {
          setVisibleMovies(5);
          setStepSize(2);
        }

      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      }

    }

  }, [location.pathname, movies]);

  function handleDislike(movie) {
    savedMovies.filter((item) => item.movieId !== movie.id);
    onDislike(movie);
  }

  return (
    <section className="MoviesCardList">
      <div className={` ${noMoviesFound ? 'MoviesCardList__not-found-container' : 'MoviesCardList__grid-container'}`}>
        {location.pathname === '/movies' ?
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
          )})
          :
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
        }
        {noMoviesFound &&  <p className="MoviesCardList__not-found">Ничего не найдено</p>}
      </div>
      {location.pathname === '/movies' && <button
        onClick={handleShowMore}
        className={`MoviesCardList__button button ${
          visibleMovies > movies.length && "MoviesCardList__button_hidden"
        }`}>Ещё</button>}
    </section>
  );
}
