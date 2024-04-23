export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <p className="footer__text">
            Educational project Yandex.Praktikum х BeatFilm.
            </p>
            <div className="footer__container_place_bottom">
            <p className="footer__year">©2024</p>
            <nav className="footer__nav link">
                <a href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__navLink">
                    Yandex.Practikum
                </a>
                <a href="https://youtu.be/HEXWRTEbj1I?si=uQSv-eQegXSiT6LZ&t=3" target="_blank" rel="noreferrer" className="footer__navLink link">
                    Github
                </a>
            </nav>
            </div>
        </div>
    </footer>
  );
}
