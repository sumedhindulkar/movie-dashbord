import React from "react";

import luca from "../assets/images/main.jpg";
import luca1 from "../assets/images/1.jpg";
import luca2 from "../assets/images/2.jpg";
import luca3 from "../assets/images/3.jpg";
function Movie() {
  const styles = {
    backgroundImage: `url("${luca2}")`,
  };
  return (
    <>
      <div className="movie-head " style={styles}>
        <div className="movie-img">
          <img src={luca} />
          <img src={luca1} />
          <img src={luca2} />
          <img src={luca3} />
        </div>
      </div>
    </>
  );
}

export default Movie;
