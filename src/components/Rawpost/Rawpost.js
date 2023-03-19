import React, { useEffect, useState } from "react";
import "./Rawpost.css";
import axios from "../../axios";
import { API_KEY, IMAGEURL } from "../Constants/Constants";
import Youtube from "react-youtube";

function Rawpost(props) {
  const [urlid, seturlid] = useState("");
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    console.log(API_KEY);
    axios
      .get(props.url)
      .then((Response) => {
        console.log("679");
        console.log(Response.data);
        setmovies(Response.data.results);
      })
      .catch((err) => {
        // alert("networlk err")
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const Handlemovies = (id) => {
    console.log(id);
    console.log(API_KEY);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((Response) => {
        console.log(Response.data);
        if (Response.data.results.length !== 0) {
          seturlid(Response.data.results[0]);
        } else {
          console.log("trailer not available  ");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map(
          (obj) => (
            <img
              onClick={() => Handlemovies(obj.id)}
              className={props.issmall ? "smallposters" : "poster"}
              alt="poster"
              src={` ${IMAGEURL + obj.backdrop_path}`}
            />
          )
          // <img className='poster' alt='poster' src={` ${IMAGEURL + obj.backdrop_path}`}/>
        )}
      </div>
      {urlid && <Youtube videoId={urlid.key} opts={opts} />}
    </div>
  );
}

export default Rawpost;
