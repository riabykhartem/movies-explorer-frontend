export default function AboutProject() {
  return (
    <section className="aboutProject" id="about">
      <div className="page__content aboutProject__container ">
        <h2 className="aboutProject__headline">About the project</h2>
        <div className="aboutProject__grid-container">
          <p className="aboutProject__title aboutProject__title_position_left" >The project consisted of 5 stages</p>
          <p className="aboutProject__title aboutProject__title_position_right">
          The completion of the project took 5 weeks.
          </p>
          <p className="aboutProject__paragraph aboutProject__paragraph_position_left">
          Creating a plan, working on the backend, layout, adding functionality, and final adjustments.
          </p>
          <p className="aboutProject__paragraph aboutProject__paragraph_position_right">
          At each stage, there were both soft and hard deadlines that had to be met in order to successfully defend the project.
          </p>
        </div>
        <div className="aboutProject__time-block">
          <p className="aboutProject__time-title aboutProject__time-title_background_green">1 week</p>
          <p className="aboutProject__time-title aboutProject__time-title_background_gray">4 weeks</p>
          <p className="aboutProject__time-subtitle ">Back-end</p>
          <p className="aboutProject__time-subtitle ">Front-end</p>
        </div>
      </div>
    </section>
  );
}
