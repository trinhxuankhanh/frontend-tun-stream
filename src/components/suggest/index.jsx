import React from "react";
import { Link } from "react-router-dom";

const Sugget = (props) => {
  const { id, name, show, items } = props;
  return (
    <li>
      <Link
        onClick={() => {
          show.current.value = "";
          items([]);
        }}
        to={`/game/${id}`}
      >
        {name}
      </Link>{" "}
    </li>
  );
};

export default Sugget;
