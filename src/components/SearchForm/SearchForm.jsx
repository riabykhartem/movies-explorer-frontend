import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";
import React from "react";
export default function SearchForm({
  onSubmit,
  cashedSearchValue,
  handleShortMoviesCheck,
  isChecked,
  }) {
  const [searchValue, setSearchValue] = useState(cashedSearchValue || "");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchValue);
  }

  return (
    <section className="searchForm">
      <form className="searchForm__container" onSubmit={handleSubmit}>
        <input
          className="searchForm__input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder={`${cashedSearchValue || "фильм"}`}
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
    </section>
  );
}
