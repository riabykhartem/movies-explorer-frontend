import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
export default function SearchForm() {
    return(
        <section className="searchForm">
            <form className="searchForm__container">
                <input className="searchForm__input" type="text" placeholder="Фильм"/>
                <button className="searchForm__button button">Найти</button>
            </form>
            <FilterCheckbox/>
            
        </section>
    )
}