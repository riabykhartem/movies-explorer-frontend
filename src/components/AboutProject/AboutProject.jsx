export default function AboutProject() {
  return (
    <section className="aboutProject page__content_section" id="about">
      <div className="aboutProject__container">
        <h2 className="aboutProject__headline">О проекте</h2>
        <div className="aboutProject__grid-container">
          <p className="aboutProject__title aboutProject__title_position_left" >Дипломный проект включал 5 этапов</p>
          <p className="aboutProject__title aboutProject__title_position_right">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="aboutProject__paragraph aboutProject__paragraph_position_left">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <p className="aboutProject__paragraph aboutProject__paragraph_position_right">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="aboutProject__time-block">
          <p className="aboutProject__time-title aboutProject__time-title_background_green">1 неделя</p>
          <p className="aboutProject__time-title aboutProject__time-title_background_gray">4 недели</p>
          <p className="aboutProject__time-subtitle ">Back-end</p>
          <p className="aboutProject__time-subtitle ">Front-end</p>
        </div>
      </div>
    </section>
  );
}
