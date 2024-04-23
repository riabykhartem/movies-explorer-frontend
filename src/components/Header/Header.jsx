import { NavLink } from "react-router-dom";
import Burgermenu from "../Burgermenu/Burgermenu";
import { useLocation } from "react-router-dom";
import NavTab from "../NavTab/NavTab";
export default function Header({ isLoggedIn }) {
  const location = useLocation();
  return (
    <header
      className={`header ${
        location.pathname === "/"
          ? "header_place_homepage"
          : "header_place_main"
      }`}
    >
      <div className="header__container">
        <NavLink to="/" className="header__logo link"/>
        {isLoggedIn ? (
          <>
            <NavTab isLoggedIn={isLoggedIn} />
            <NavLink to="/profile"
              className={`header__account-icon button ${
                location.pathname === "/"
                  ? "header__account-icon_place_homepage"
                  : "header__account-icon_place_main"
              }`}
            />
            <Burgermenu />
          </>
        ) : (
          <div className="header__authorization">
            <NavLink
              to="/signup"
              className={`header__signup-button ${location.pathname === '/' && 'header__signup-button_place_homepage'} link`}
            >
              Sign up
            </NavLink>
            <NavLink
              to="/signin"
              className="header__signin-button button"
            >
              Log in
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

