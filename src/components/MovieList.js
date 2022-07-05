import "../index.css";

let MovieList = ({ movies, overlayText, handleClick }) => {
  let OverlayText = overlayText;

  return (
    <div className="movie_container">
      {movies.map((movie) => {
        let { imdbID, Poster } = movie;
        return (
          <div className="movie" key={imdbID}>
            <img className="movie_poster" src={Poster} alt="Poster not found" />
            <div className="overlay" onClick={() => handleClick(movie)}>
              <OverlayText />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MovieList;
