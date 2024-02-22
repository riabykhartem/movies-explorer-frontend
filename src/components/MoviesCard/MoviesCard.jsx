import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MoviesCard({
  movie,
  onLike,
  onDislike,
  savedMovies,
}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    setIsLiked(savedMovies.some((el) => el.movieId === movie.id));
  }, [savedMovies, movie.id]);


  function handleLike() {
    if (location.pathname === "/movies") {
      if (isLiked) {
        setIsLiked(false);
        onDislike(movie.id);
      } else {
        setIsLiked(true);
        onLike(movie);
      }
    } else {
      setIsLiked(false);
      onDislike(movie.movieId);
    }
  }
  return (
    <article className="moviesCard__container">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="moviesCard__tailer-link link"> 
      <img
        className="moviesCard__image"
        src={
          location.pathname === "/movies"
            ? `https://api.nomoreparties.co${movie.image.url}`
            : movie.image
        }
        alt="обложка фильма"
      />
      </a>
      <div className="moviesCard__title-container">
        <h2 className="moviesCard__title">{movie.nameRU}</h2>
        <button
          onClick={handleLike}
          className={`moviesCard__like button ${
            location.pathname === "/movies"
              ? isLiked
                ? "moviesCard__like_active"
                : "moviesCard__like_inactive"
              : "moviesCard__like_active_saved"
          }`}
        />
      </div>
      <p className="moviesCard__duration">{`${Math.floor(
        movie.duration / 60
      )} ч ${movie.duration % 60} мин`}</p>
    </article>
  );
}
