import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavTab({ isLoggedIn }) {
  const location = useLocation();
    return(
          <nav className={`${isLoggedIn ? "navTab" : "navTab_hidden"} `}>
          <NavLink
            to="/movies"
            className={`navTab__link button ${
              location.pathname === '/' ? "navTab__container_place_homepage" : "navTab__container_place_movies"
            } ${location.pathname === "/movies" ? "navTab__link_active" : ""}`}
          >
            Movies
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={`navTab__link button ${
              location.pathname === '/' ? "navTab__container_place_homepage" : "navTab__container_place_movies"
            } ${location.pathname === "/saved-movies" ? "navTab__link_active" : ""}`}
          >
            Saved Movies
          </NavLink>
      </nav> )}