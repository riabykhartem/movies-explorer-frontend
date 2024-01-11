export default function Portfolio() {
  return (
    <section className="portfolio page__content_section">
      <h2 className="portfolio__headline">Портфолио</h2>
      <ul className="portfolio__links">
        <a href="https://youtu.be/HEXWRTEbj1I?si=uQSv-eQegXSiT6LZ&t=3" target="_blank" rel="noreferrer" className="portfolio__link" >
          <h3 className="portfolio__link_place_text">Статичный сайт</h3>
          <button className="portfolio__link_place_button"></button>
        </a>
        <a href="https://youtu.be/HEXWRTEbj1I?si=uQSv-eQegXSiT6LZ&t=3" target="_blank" rel="noreferrer"  className="portfolio__link">
          <h3 className="portfolio__link_place_text">Адаптивный сайт</h3>
          <button className="portfolio__link_place_button"></button>

        </a>
        <a href="https://youtu.be/HEXWRTEbj1I?si=uQSv-eQegXSiT6LZ&t=3" target="_blank" rel="noreferrer"  className="portfolio__link">
          <h3 className="portfolio__link_place_text">Одностраничное приложение</h3>
          <button className="portfolio__link_place_button"></button>
        </a>
      </ul>
    </section>
  );
}
