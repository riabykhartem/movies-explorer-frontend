import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
export default function SearchForm({
  onSubmit,
  handleShortMoviesCheck,
  isChecked,
}) {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue") || ""
  );

  const [savedMoviesSearchValue, setSavedMoviesSearchValue] = useState(
    localStorage.getItem("savedMoviesSearchValue") || ""
  );
  


  function handleSubmit(e) {
    e.preventDefault();
    if(location.pathname === "/movies"){
    localStorage.setItem("searchValue", searchValue);
    onSubmit(searchValue)
    }
    else{    
    onSubmit(savedMoviesSearchValue)
    localStorage.setItem("savedMoviesSearchValue", savedMoviesSearchValue);
    }

  }

  return (
    <section className="searchForm">
      {location.pathname === "/movies" ? (
        <>
          <form className="searchForm__container" onSubmit={handleSubmit}>
            <input
              className="searchForm__input"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder={`${localStorage.getItem("searchValue") || "фильм"}`}
            />
            <input
              type="submit"
              value="Найти"
              className="searchForm__button button"
            ></input>
          </form>
          <FilterCheckbox
            isChecked={isChecked}
            handleShortMoviesCheck={handleShortMoviesCheck}
          />
        </>
      ) : (
        <>
          <form className="searchForm__container" onSubmit={handleSubmit}>
            <input
              className="searchForm__input"
              value={savedMoviesSearchValue}
              onChange={(e) => setSavedMoviesSearchValue(e.target.value)}
              type="text"
              placeholder={`${localStorage.getItem("savedMoviesSearchValue") || "фильм"}`}
            />
            <input
              type="submit"
              value="Найти"
              className="searchForm__button button"
            ></input>
          </form>
          <FilterCheckbox
            isChecked={isChecked}
            handleShortMoviesCheck={handleShortMoviesCheck}
          />
        </>
      )}
    </section>
  );
}
