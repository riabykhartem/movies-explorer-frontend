import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import accountLogo from "../../images/profile_transparent.svg";

export default function BurgerMenu() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <button
        className={`burger-menu button ${isMenuOpen && "burger-menu_open"} ${location.pathname === "/" && 'burger-menu_place_homepage'}`}
        onClick={handleMenuClick}
      ></button>

      <div
        className={`burger-menu__container ${
          isMenuOpen ? "burger-menu__container_active" : ""
        }`}
      >
        <nav className="burger-menu__navigation">
          <NavLink
            to="/"
            onClick={handleMenuClick}
            className={`burger-menu__link ${
              location.pathname === "/"
                && "burger-menu__container_place_homepage burger-menu__link_active"
                
            } link`}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            onClick={handleMenuClick}
            className={`burger-menu__link ${location.pathname === '/movies' && "burger-menu__link_active"} ${
              location.pathname === "/"
                ? "burger-menu__container_place_homepage"
                : ""
            } `}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            onClick={handleMenuClick}
            className={`burger-menu__link ${location.pathname === '/saved-movies' && 'burger-menu__link_active'} ${
              location.pathname === "/"
                ? "burger-menu__container_place_homepage"
                : ""
            }`}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <NavLink
          to="/profile"
          onClick={handleMenuClick}
          className={`burger-menu__account`}
        >
          <img src={accountLogo} alt="аккаунт" />
        </NavLink>
      </div>
    </>
  );
}
