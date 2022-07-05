import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import MovieList from "./components/MovieList";
import OverlayAddText from "./components/OverlayAddText";
import OverlayRemoveText from "./components/OverlayRemoveText";
import SearchBox from "./components/Searchbox";
function App() {
  let [movies, setMovies] = useState([]);
  let [searchVal, setSearchVal] = useState("toy");
  let [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    getData();
  }, [searchVal]);

  let getData = async () => {
    try {
      let res = await fetch(
        `https://www.omdbapi.com/?s=${searchVal}&apikey=525fa42f`
      );

      let data = await res.json();

      console.log(data.Search);
      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let localMovies = JSON.parse(localStorage.getItem("fav_movies"));
    if (localMovies) {
      setFavouriteMovies(localMovies);
    }
  }, []);

  function addToFavourite(movie) {
    console.log(movie);
    favouriteMovies.forEach((favouriteMovie) => {
      if (favouriteMovie.imdbID === movie.imdbID) {
        alert("Allready in favourite shows");
throw new Error (
  'Can not add duplicate'
)     } 
        
    });
    setFavouriteMovies([...favouriteMovies, movie]);
        updateLocalStorage([...favouriteMovies, movie]);
      console.log('in');
    console.log(favouriteMovies);
  }

  function removeFromFavourite(movie) {
    let filteredMovies = favouriteMovies.filter((favMovie) => {
      return favMovie !== movie;
    });
    setFavouriteMovies(filteredMovies);
    updateLocalStorage(filteredMovies);
  }

  function updateLocalStorage(movies) {
    localStorage.setItem("fav_movies", JSON.stringify(movies));
  }
  return (
    <div>
      <div className="nav">
        <Heading headline={"iShow"} />
        <SearchBox
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          getData={getData}
        />
      </div>
      <MovieList
        movies={movies}
        overlayText={OverlayAddText}
        handleClick={addToFavourite}
      />
      <Heading headline={"Favourites❤️"} />
      <MovieList
        movies={favouriteMovies}
        overlayText={OverlayRemoveText}
        handleClick={removeFromFavourite}
      />
    </div>
  );
}

export default App;
