import textLogo from '../../images/text__COLOR_landing-logo.svg';
export default function Promo() {
    return(
        <div className="promo">
            <div className="promo__container page__content_section">
                <div className="promo__container_place_text">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a className="promo__link" href="#about-project">Узнать больше</a>
                </div>
                <img src={textLogo} className="promo__image" alt="" />
            </div>
        </div>
    )
};