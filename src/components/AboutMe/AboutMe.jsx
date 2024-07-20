import myPhoto from '../../images/myPhoto.jpg'
export default function AboutMe(){
    return(
        <section className="page__content aboutMe ">
            <h2 className="aboutMe__headline">About me</h2>
            <div className="aboutMe__main">
            <div className="aboutMe__text-container">
                <h3 className="aboutMe__name">Artem Riabykh</h3>
                <p className="aboutMe__title">Front-End Developer</p>
                <p className="aboutMe__text"> I am a front-end developer with over a year of experience in designing and developing responsive and user-friendly websites. I’m responsible for translating UI/UX designs into interactive web pages using various frameworks and tools. </p>
                <p className="aboutMe__text"> My main expertise lies in JavaScript, React, HTML/CSS, but I also have experience with backend technologies like Node.js and MongoDB. I’m always expanding my skillset by exploring new framework and technologies, which helps me stay up to date within the tech field. </p>
                <a href="https://github.com/riabykhartem" target="_blank" className="aboutMe__link link" rel="noreferrer">Github</a>
            </div>
            <img src={myPhoto} alt="моя фотография" className='aboutMe__photo' />
            </div>
        </section>
    )
}