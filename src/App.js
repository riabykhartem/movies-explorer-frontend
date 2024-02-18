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
import InfoToolTip from "./components/InfoToolTip/InfoToolTip";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const [isInfoToolTipOpened, setIsInfoToolTipOpened] = useState(false);
  const [InfoToolTipMessage, setInfoToolTipMessage] = useState("");

  //стейты Movies
  const [movies, setMovies] = useState(
    localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : []
  );
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [shortMoviesChecked, setShortMoviesChecked] = useState(
    localStorage.getItem("shortMoviesChecked") === "true" ? true : false
  );

  //стейты SavedMovies
  const [savedMovies, setSavedMovies] = useState([]);
  const [shortSavedMoviesChecked, setShortSavedMoviesChecked] = useState(
    localStorage.getItem("shortSavedMoviesChecked") === "true" ? true : false
  );


  useEffect(() => {
    if (isLoggedIn) {
      localStorage.getItem("movies") && setMovies(JSON.parse(localStorage.getItem("movies")));

      mainApi
        .getUserInfo(token)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          navigate("/", { replace: true });
          localStorage.clear();
          console.error(
            ` при получении информации о пользователе возникла ошибка: ${err}`
          );
        });

      moviesApi
        .getSavedMovies(token)
        .then((res) => {
          const filteredSavedMovies = filterMovies(
            res,
            localStorage.getItem("searchValue") || "",
            localStorage.getItem("shortSavedMoviesChecked") === "true" ? true : false
          );
          setSavedMovies(filteredSavedMovies);
          localStorage.setItem("savedMovies", JSON.stringify(filteredSavedMovies));
        })
        .catch((err) => {
          console.error(
            `при получении сохраненных фильмов возникла ошибка: ${err}`
          );
        });
    }
  }, [token, isLoggedIn, navigate]);
  function closeInfoToolTip() {
    setIsInfoToolTipOpened(false);
    window.location.reload();
  }

  async function signUp(data) {
    try {
      await mainApi.signUp(data).then(() => {
        mainApi
          .signIn({ email: data.email, password: data.password })
          .then((res) => {
            if (res.token) {
              localStorage.setItem("jwt", res.token);
              setToken(res.token);
              setIsLoggedIn(true);
              navigate("/", { replace: true });
            }
          });
      });
    } catch (err) {
      setIsInfoToolTipOpened(true);
      setInfoToolTipMessage("При регистрации пользователя произошла ошибка");
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
        setIsInfoToolTipOpened(true);
        setInfoToolTipMessage("При авторизации произошла ошибка");
        console.log(`ошибка при авторизации: ${err}`);
      });
  }

  function editProfile(data) {
    mainApi
      .editProfile(data, token)
      .then((res) => {
        setCurrentUser(res);
        setInfoToolTipMessage("Данные успешно обновлены");
        setIsInfoToolTipOpened(true);
      })
      .catch((err) => {
        console.log(`ошибка при редактировании профиля: ${err}`);
        setInfoToolTipMessage("При обновлении профиля произошла ошибка");
        setIsInfoToolTipOpened(true);
      });
  }

  function logOut() {
    localStorage.clear();
    setIsLoggedIn(false);
  }

  function handleShortMoviesCheck(checkState) {
    setShortMoviesChecked(checkState);
      moviesApi
        .getMovies()
        .then((movies) => {
          const filteredMovies = filterMovies(
            movies,
            localStorage.getItem("searchValue") || "",
            checkState
          );
          setMovies(filteredMovies);
          localStorage.setItem("movies", JSON.stringify(filteredMovies));
        })
        .catch((err) => {
          console.log(`Error occurred while loading movies: ${err}`);
        });
    
  }

  function handleSavedShortMoviesCheck(checkState) {
    console.log(checkState);
    setShortSavedMoviesChecked(checkState);
    localStorage.setItem("shortSavedMoviesChecked", checkState);
    const filteredSavedMovies = filterMovies(
      savedMovies,
      localStorage.getItem("searchValue") || "",
      checkState
    );
    setSavedMovies(filteredSavedMovies);
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
          if (filteredMovies.length === 0) {
            setNoMoviesFound(true);
          }
          localStorage.setItem("movies", JSON.stringify(filteredMovies));
        })
        .catch((err) => {
          console.log(`при загрузке фильмов произошла ошибка ${err}`);
        })
    );
  }

  async function filterSavedMovies(searchValue) {
     const allSavedMovies = await moviesApi.getSavedMovies(token)
    const filteredMovies = filterMovies(
      allSavedMovies,
      searchValue,
      shortMoviesChecked
    );
    setSavedMovies(filteredMovies);
    localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
    setSavedMovies(filteredMovies);
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
      await moviesApi.removeSavedMovie(moiveId, token);
      const newSavedMovies = savedMovies.filter((m) => m.movieId !== moiveId);
      setSavedMovies(newSavedMovies);
      localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
    } catch (err) {
      console.log(`при удалении фильма произошла ошибка ${err}`);
    }
  }

  return (
    <>
      <InfoToolTip
        isOpen={isInfoToolTipOpened}
        message={InfoToolTipMessage}
        onClose={closeInfoToolTip}
      />
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
                  noMoviesFound={noMoviesFound}
                  loggedIn={isLoggedIn}
                  element={Movies}
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
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  getFilteredMovies={filterSavedMovies}
                  onDislike={removeSavedMovie}
                  handleShortMoviesCheck={handleSavedShortMoviesCheck}
                  isChecked={shortSavedMoviesChecked}
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
