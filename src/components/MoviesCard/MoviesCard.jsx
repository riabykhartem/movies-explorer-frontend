
import { useLocation } from 'react-router-dom';

export default function MoviesCard({movieImage, movieTitle}) {
    const location = useLocation();
    return(
        <article className="moviesCard__container">
            <img className="moviesCard__image" src={movieImage} alt="Фото фильма"/>
            <div className="moviesCard__title-container">
                <h2 className="moviesCard__title">{movieTitle}</h2>
                <button className={`moviesCard__like button ${location.pathname === '/saved-movies' ? "moviesCard__like_remove": "moviesCard__like_active"}  `}/>
            </div>
            <p className="moviesCard__duration">1ч42м</p>
        </article>
    )
}