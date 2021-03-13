import React, { useState } from "react";
import "./style.scss";
import searchIcon from "../../asset/img/search.svg";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <form onSubmit={handleSubmitSearch} className="search">
      <label htmlFor="search">
        <img className="search__img" src={searchIcon} alt="icon"></img>
      </label>
      <input
        className="search__item"
        maxLength="40"
        id="search"
        type="text"
        placeholder="Name game or stream's name ..."
        value={search}
        onChange={handleOnChange}
      />
    </form>
  );
};

export default Search;
