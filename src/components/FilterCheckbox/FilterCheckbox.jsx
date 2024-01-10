export default function FilterCheckbox() {

    return (
        <section className="filterCheckbox">
            <label className="filterCheckbox__label" htmlFor="filterCheckbox">
                <input className="filterCheckbox__invisible-checkbox" type="checkbox" id="filterCheckbox"/>
                <span className="filterCheckbox__visible-checkbox"></span>
                <span className="filterCheckbox__text">Короткометражки</span>
            </label>
        </section>
    )
}
