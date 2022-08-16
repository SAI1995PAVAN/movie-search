import React from "react";
import "./EachMovie.css";

const EachMovie = (props) => {
  const { title, image, year } = props;

  if (title) {
    return (
      <div className="each-movie-container">
        <img src={image} alt="movieName" />
        <div className="each-movie-container-data">
          <h3>{title}</h3>
          <span>
            <strong>{year}</strong>
          </span>
        </div>
      </div>
    );
  }
};

export default EachMovie;
