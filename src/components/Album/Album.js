import React from "react";
import propTypes from "prop-types";
import "./Album.css";
import ReactPlayer from "react-player";

const Album = props => (
  <div>
    <h2>{props.album}</h2>
    <img src={props.imageUrl} />
    <p>Release date: {props.releaseDate}</p>
    <p>Genre: {props.genre}</p>
    <ReactPlayer url={props.videoUrl} playing />
  </div>
);

Album.propTypes = {
  album: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  releaseDate: propTypes.string.isRequired,
  genre: propTypes.string.isRequired
};

export default Album;
