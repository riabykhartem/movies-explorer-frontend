import { HashLink } from 'react-router-hash-link';
import textLogo from '../../images/text__COLOR_landing-logo.svg';
export default function Promo() {
    return(
        <section className="promo">
            <div className="promo__container page__content">
                <div className="promo__container_place_text">
                    <h1 className="promo__title">Educational project of the Web Development faculty student</h1>
                    <p className="promo__paragraph">Scroll down to learn more about this project and its creator.</p>
                    <HashLink  className="promo__link button" smooth to="/#about">Learn more</HashLink >
                </div>
                <img src={textLogo} className="promo__image" alt="земной шар из слов" />
            </div>
        </section>
    )
};