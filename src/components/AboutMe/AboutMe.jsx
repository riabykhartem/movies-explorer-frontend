import myPhoto from '../../images/myPhoto.jpg'
export default function AboutMe(){
    return(
        <section className="page__content aboutMe ">
            <h2 className="aboutMe__headline">About me</h2>
            <div className="aboutMe__main">
            <div className="aboutMe__text-container">
                <h3 className="aboutMe__name">Artem Riabykh</h3>
                <p className="aboutMe__title">Front-end developer, 27 years old</p>
                <p className="aboutMe__text"> Originally hailing from Moscow, Russia, I earned my bachelor's degree in linguistics from Moscow State Linguistics University in 2021. Subsequently, I embarked on a new journey to the USA through the Green Card lottery. Immersed in the vibrant atmosphere of Chicago, I've delved into the realm of web development, crafting numerous projects, including this one. Outside of coding, I find solace in learning JavaScript and exploring the great outdoors through hiking.</p>
                <a href="https://github.com/riabykhartem" target="_blank" className="aboutMe__link link" rel="noreferrer">Github</a>
            </div>
            <img src={myPhoto} alt="моя фотография" className='aboutMe__photo' />
            </div>
        </section>
    )
}