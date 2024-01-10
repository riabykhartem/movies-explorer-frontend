import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
export default function SearchForm() {
    return(
        <section className="searchForm page__content">
            <form className="searchForm__container">
                <input className="searchForm__input" type="text" placeholder="Фильм"/>
                <button className="searchForm__button">Найти</button>
            </form>
            <FilterCheckbox/>
            
        </section>
    )
}