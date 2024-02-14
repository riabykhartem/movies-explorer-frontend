import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({
  movies,
  onLike,
  onDislike,
  savedMovies,
}) {
  function initialVisible() {
    if (window.innerWidth > 768) {
      return 12;
    } else if (window.innerWidth > 480) {
      return 8;
    } else {
      return 5;
    }
  }
  function checkStepSize() {
    if (window.innerWidth > 768) {
      return 4;
    } else {
      return 2;
    }
  }

  const [visibleMovies, setVisibleMovies] = useState(initialVisible);
  const [stepSize, setStepSize] = useState(checkStepSize);
  const location = useLocation();

  function handleShowMore() {
    setVisibleMovies(visibleMovies + stepSize);
  }

  useEffect(() => {
      window.addEventListener("resize", () => {
        setTimeout(() => {
          setVisibleMovies(initialVisible);
        }, 1000);
      });
      return () => {
        window.removeEventListener("resize", () => {
          setTimeout(() => {
            setVisibleMovies(initialVisible);
          }, 1000);
        });
      };
  }, []);

  return (
    <section className="MoviesCardList">
      <div className={` ${movies.length === 0 ? 'MoviesCardList__not-found-container' : 'MoviesCardList__grid-container'}`}>
        {movies.length === 0 && <p className="MoviesCardList__not-found">Ничего не найдено</p>}
        {movies.slice(0, visibleMovies).map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              key={movie.id || movie._id}
              movieId={movie.id}
              onLike={onLike}
              onDislike={onDislike}
              savedMovies={savedMovies}
            />
          );
        })}
      </div>
      <button
        onClick={handleShowMore}
        className={`MoviesCardList__button button ${
          visibleMovies > movies.length && "MoviesCardList__button_hidden"
        }`}
      >
        Ещё
      </button>
    </section>
  );
}
