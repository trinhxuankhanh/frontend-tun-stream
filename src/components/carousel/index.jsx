import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import getGameApi from "../../api/getGameApi";
import CardGame from "../card/cardgame";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const CarouselGame = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGameApi
      .getGame({ type: "" })
      .then((response) => {
        setGames(response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let changeStyle = document.getElementsByClassName(
      "react-multi-carousel-track"
    );
    let change = setTimeout(() => {
      Array.from(changeStyle[0].childNodes).map((li) => {
        li.attributes[3].value =
          "flex: 1 1 auto; position: relative; width: 450px;";
        return li;
      });
    }, 700);

    return () => {
      clearTimeout(change);
    };
  });

  return (
    <Carousel
      ssr
      itemClass="image-item"
      containerClass="carousel-container"
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {games.map((cardgame) => (
        <CardGame
          key={cardgame._id}
          id={cardgame._id}
          img={cardgame.img}
          name={cardgame.name}
        />
      ))}
    </Carousel>
  );
};

export default CarouselGame;
