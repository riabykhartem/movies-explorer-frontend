import { useNavigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Movies from "./components/Movies/Movies";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { trackPromise } from "react-promise-tracker";
import moviesApi from "./utils/MoviesApi";
import { filterMovies } from "./utils/FilterMovies";
import CurrentUserContext from "./components/context/CurrentUserContext";
import mainApi from "./utils/MainApi";
import ProtectedRouteElement from "./components/ProtectedRoute";
import { set } from "react-hook-form";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const [shortMoviesChecked, setShortMoviesChecked] = useState(
    localStorage.getItem("shortMoviesChecked") === true ? true : false
  );
  const cashedMovies = localStorage.getItem("movies");
  const cashedSearchValue = localStorage.getItem("searchValue");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      Promise.all([mainApi.getUserInfo(token), moviesApi.getSavedMovies(token)])
        .then(([userInfo, savedMovies]) => {
          setCurrentUser(userInfo);
          setSavedMovies(savedMovies);
          localStorage.setItem("savedMovies", [JSON.stringify(savedMovies)]);
        })
        .catch((err) => {
          console.log(`An error occurred: ${err}`);
        }, [token, savedMovies]);
    }
  }, [token]);
  async function signUp(data) {
    try {
      const res = await mainApi.signUp(data);
      console.log(res);
      navigate("/signin", { replace: true });
    } catch (err) {
      console.log(` ошибка при регистрации: ${err}`);
    }
  }

  function signIn(data) {
    mainApi
      .signIn(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setToken(res.token);
          setIsLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`ошибка при авторизации: ${err}`);
      });
  }

  function editProfile(data) {
    mainApi
      .editProfile(data, token)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`ошибка при редактировании профиля: ${err}`);
      });
  }

  function logOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/signin", { replace: true });
  }

  function handleShortMoviesCheck(checkState) {
    setShortMoviesChecked(checkState);
    Promise.all([moviesApi.getMovies(), moviesApi.getSavedMovies(token)])
      .then(([movies, savedMovies]) => {
        const filteredMovies = filterMovies(
          movies,
          cashedSearchValue || "",
          checkState
        );

        setMovies(filteredMovies);
        localStorage.setItem("movies", JSON.stringify(filteredMovies));

        const filteredSavedMovies = filterMovies(
          savedMovies,
          cashedSearchValue || "",
          checkState
        );
        setSavedMovies(filteredSavedMovies);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(filteredSavedMovies)
        );
      })
      .catch((err) => {
        console.log(`Error occurred while loading movies: ${err}`);
      });
  }

  function getFilteredMovies(searchValue) {
    localStorage.setItem("searchValue", searchValue);
    trackPromise(
      moviesApi
        .getMovies()
        .then((res) => {
          const filteredMovies = filterMovies(
            res,
            searchValue,
            shortMoviesChecked
          );
          setMovies(filteredMovies);
          localStorage.setItem("movies", JSON.stringify(filteredMovies));
        })
        .catch((err) => {
          console.log(`при загрузке фильмов произошла ошибка ${err}`);
        })
    );
  }

  function filterSavedMovies(searchValue) {
    localStorage.setItem("searchValue", searchValue);
    const filteredMovies = filterMovies(
      savedMovies,
      searchValue,
      shortMoviesChecked
    );
    setSavedMovies(filteredMovies);
    console.log(filteredMovies);
  }

  function saveMovie(movie) {
    moviesApi
      .saveMovie(movie, token)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([res, ...savedMovies])
        );
      })
      .catch((err) => {
        console.log(`при сохранении фильма произошла ошибка ${err}`);
      });
  }

  async function removeSavedMovie(moiveId) {
    try {
      const res = await moviesApi.removeSavedMovie(moiveId, token);
      const newSavedMovies = savedMovies.filter((m) => m._id !== moiveId);
      setSavedMovies(newSavedMovies);
      localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
    } catch (err) {
      console.log(`при удалении фильма произошла ошибка ${err}`);
    }
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <ProtectedRouteElement
                  loggedIn={isLoggedIn}
                  element={Movies}
                  cashedSearchValue={cashedSearchValue}
                  isLoggedIn={isLoggedIn}
                  movies={movies}
                  getFilteredMovies={getFilteredMovies}
                  onLike={saveMovie}
                  onDislike={removeSavedMovie}
                  shortMoviesChecked={shortMoviesChecked}
                  handleShortMoviesCheck={handleShortMoviesCheck}
                  setShortMoviesChecked={setShortMoviesChecked}
                  currentUser={currentUser}
                  savedMovies={savedMovies}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <ProtectedRouteElement
                  loggedIn={isLoggedIn}
                  element={SavedMovies}
                  cashedSearchValue={cashedSearchValue}
                  isLoggedIn={isLoggedIn}
                  movies={savedMovies}
                  getFilteredMovies={filterSavedMovies}
                  onDislike={removeSavedMovie}
                  handleShortMoviesCheck={handleShortMoviesCheck}
                  isChecked={shortMoviesChecked}
                  savedMovies={savedMovies}
                />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<Register signUp={signUp} />} />
          <Route path="/signin" element={<Login signIn={signIn} />} />
          <Route
            path="/profile"
            element={
              
              <ProtectedRouteElement
                loggedIn={isLoggedIn}
                element={Profile}
                isLoggedIn={isLoggedIn}
                logOut={logOut}
                currentUser={currentUser}
                editProfile={editProfile}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
