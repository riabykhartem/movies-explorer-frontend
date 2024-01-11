import myPhoto from '../../images/myPhoto.jpg'
export default function AboutMe(){
    return(
        <section className="aboutMe page__content_section">
            <h2 className="aboutMe__headline">Студент</h2>
            <div className="aboutMe__main">
            <div className="aboutMe__text-container">
                <h3 className="aboutMe__name">Артём</h3>
                <p className="aboutMe__title">Фронтенд-разработчик, 27  лет</p>
                <p className="aboutMe__text">Я родился в Москве, в 2021 году закончил факультет английского языка в МГЛУ после чего перехал в США на постоянное место жительство. В свободное от основной работы время изучаю веб разработку и гуляю с женой. Продам гараж. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem facere </p>
                <a href="https://github.com/riabykhartem" target="_blank" className="aboutMe__link" rel="noreferrer">Github</a>
            </div>
            <img src={myPhoto} alt="моя фотография" className='aboutMe__photo' />
            </div>



        </section>
    )
}