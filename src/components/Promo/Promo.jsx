import { HashLink } from 'react-router-hash-link';
import textLogo from '../../images/text__COLOR_landing-logo.svg';
export default function Promo() {
    return(
        <section className="promo">
            <div className="promo__container page__content">
                <div className="promo__container_place_text">
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                    <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <HashLink  className="promo__link button" smooth to="/#about">Узнать больше</HashLink >
                </div>
                <img src={textLogo} className="promo__image" alt="земной шар из слов" />
            </div>
        </section>
    )
};