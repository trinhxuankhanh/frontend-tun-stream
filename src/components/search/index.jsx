import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import searchIcon from "../../asset/img/search.svg";
import getGameApi from "../../api/getGameApi";
import Sugget from "../suggest";

const Search = () => {
  const searchRef = useRef(null);
  const [games, setGames] = useState([]);
  const [results, setResults] = useState([]);

  const handleKeyup = () => {
    const result = games.filter((item) =>
      item.name.includes(searchRef.current.value.toLowerCase())
    );

    setResults(result);
    if (searchRef.current.value.toLowerCase() === "") setResults([]);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getGameApi
      .getGame({ type: "" })
      .then((response) =>
        setGames(
          response.map((item) => {
            return {
              id: item._id,
              name: item.name.toLowerCase(),
            };
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <form onSubmit={handleSubmitSearch} className="search" autocomplete="off">
      <label htmlFor="search">
        <img className="search__img" src={searchIcon} alt="icon"></img>
      </label>
      <input
        className="search__item"
        autocomplete="off"
        maxLength="40"
        id="search"
        type="text"
        placeholder="Name game ..."
        ref={searchRef}
        onKeyUp={handleKeyup}
      />

      {results.length > 0 && (
        <ul className="search__suggests">
          {results.map((item) => (
            <Sugget
              show={searchRef}
              items={setResults}
              name={item.name}
              id={item.id}
            ></Sugget>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Search;
