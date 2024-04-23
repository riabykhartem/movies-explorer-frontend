import arrow from "../../images/linkIcon.svg"
export default function Portfolio() {
  return (
    <section className="page__content portfolio">
      <h2 className="portfolio__headline">Portofolio</h2>
      <ul className="portfolio__links">
        <li className="portfolio_list-item">
          <a
            href=" https://riabykhartem.github.io/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link link"
          >
            <h3 className="portfolio__link_place_text">Static page</h3>
            <img src={arrow} className="portfolio__arrow" alt="стрелка ссылки"></img>
          </a>
        </li>
        <li className="portfolio_list-item">
          <a
            href="https://riabykhartem.github.io/russian-travel/#"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link link"
          >
            <h3 className="portfolio__link_place_text">Responsive page</h3>
            <img src={arrow} className="portfolio__arrow" alt="стрелка ссылки"></img>
          </a>
        </li>

        <li className="portfolio_list-item">
          <a
            href="https://mesto.riabykh.nomoredomainsrocks.ru/sign-up"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link link"
          >
            <h3 className="portfolio__link_place_text">
            Single-Page Application
            </h3>
            <img src={arrow} className="portfolio__arrow" alt="стрелка ссылки"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}
