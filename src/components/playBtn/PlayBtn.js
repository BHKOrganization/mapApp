import React from "react";
import { Link } from "react-router-dom";
import "./playBtn.css";

const PlayBtn = () => {
  return (
    <div className="playButton">
      <Link to={"/game-map"} className="playLink">
        PLAY
      </Link>
    </div>
  );
};

export default PlayBtn;
