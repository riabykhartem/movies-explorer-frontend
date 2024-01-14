export default function Techs() {
  return (
    <section className="techs">
      <div className="page__content">
        <h2 className="techs__headline">Технологии</h2>
        <div className="techs__text-container">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__paragraph">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__techs-list">
          <li className="techs__tech">HTML</li>
          <li className="techs__tech">CSS</li>
          <li className="techs__tech">JS</li>
          <li className="techs__tech">React</li>
          <li className="techs__tech">Git</li>
          <li className="techs__tech">Express.js</li>
          <li className="techs__tech">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
