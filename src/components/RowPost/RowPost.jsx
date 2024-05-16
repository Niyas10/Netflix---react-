import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key);
          setShowVideo(true);
        } else {
          console.log("Trailer Not Available");
        }
      });
  };

  const handleCloseVideo = () => {
    setUrlId("");
    setShowVideo(false);
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleMovie(movie.id)}
            key={movie.id}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl}${movie.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {showVideo && urlId && (
        <div style={{ textAlign: "end" }}>
          <button
            onClick={handleCloseVideo}
            className="close_button"
            style={{ marginBottom: "20px" }}
          >
            {" "}
            <i class="fa-solid fa-xmark"></i>{" "}
          </button>
          <Youtube
            opts={opts}
            videoId={urlId}
            style={{ paddingBottom: "5px", marginRight:'20px'}}
          />
        </div>
      )}
    </div>
  );
}

export default RowPost;
