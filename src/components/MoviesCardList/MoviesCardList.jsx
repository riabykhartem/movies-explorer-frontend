import MoviesCard from "../MoviesCard/MoviesCard"
import moviePicture from '../../images/movieExample.svg'
export default function MoviesCardList() {
    return(
        <section className="MoviesCardList">
        <div className="MoviesCardList__grid-container">
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
            <MoviesCard movieImage={moviePicture} movieTitle="33 слова о дизайне"/>
        </div>
        <button className="MoviesCardList__button button">Ещё</button>
        </section>
    )

}
