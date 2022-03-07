import React from "react";
import { ReactComponent as StarFull } from "assests/imgs/star_full.svg";
import { ReactComponent as StarHalf } from "assests/imgs/star_half.svg";
import { ReactComponent as StarEmpty } from "assests/imgs/star_empty.svg";

import "./styles.css";

const MovieStars: React.FC = () => {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
};

export default MovieStars;
