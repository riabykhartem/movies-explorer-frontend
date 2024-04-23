import { useLocation } from "react-router-dom";
export default function FilterCheckbox({handleShortMoviesCheck, isChecked}) {
    const location = useLocation();
    function handleCheckBox(e){
        handleShortMoviesCheck(e.target.checked);
        location.pathname === '/movies' && localStorage.setItem('shortMoviesChecked', e.target.checked) }
    return (
        <section className="filterCheckbox">
            <label className="filterCheckbox__label" htmlFor="filterCheckbox">
                <input className="filterCheckbox__invisible-checkbox button" checked={isChecked} onChange={handleCheckBox} type="checkbox" id="filterCheckbox"/>
                <span className="filterCheckbox__visible-checkbox"></span>
                <span className="filterCheckbox__text">Short films</span>
            </label>
        </section>
    )
}
