export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <p className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__container_place_bottom">
            <p className="footer__year">©2023</p>
            <nav className="footer__nav">
                <a href="https://praktikum.yandex.ru/" className="footer__navLink">
                    Яндекс.Практикум
                </a>
                <a href="#" className="footer__navLink">
                    Github
                </a>
            </nav>
            </div>
        </div>
    </footer>
  );
}
