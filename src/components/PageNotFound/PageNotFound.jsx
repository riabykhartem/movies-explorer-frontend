import { NavLink, useNavigate } from "react-router-dom";
export default function PageNotFound() {
    const navigate = useNavigate();
    return(
        <section className="pageNotFound">
            <h1 className="pageNotFound__heading">404</h1>
            <p className="pageNotFound__paragraph">Страница не найдена</p>
            <NavLink to={navigate(-1)} className="pageNotFound__link">Назад</NavLink>
        </section>
    )
}