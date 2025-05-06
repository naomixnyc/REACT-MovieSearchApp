import { useState, useEffect } from "react";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };


  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("1984");
  }, []);
  

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

// http://www.omdbapi.com/?apikey=847a4783&t=1987
// {"Title":"1987","Year":"2014","Rated":"N/A","Released":"04 Aug 2014","Runtime":"105 min","Genre":"Biography, Comedy, Drama","Director":"Ricardo Trogi","Writer":"Ricardo Trogi","Actors":"Jean-Carl Boucher, Sandrine Bisson, Claudio Colangelo","Plot":"In 1987, Ricardo is 17. That summer, he has a busy schedule: lose his virginity, find a way to get into bars, have a car, spend time with friends.","Language":"French, Italian, English","Country":"Canada","Awards":"3 wins & 9 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjEzODMyMTEzN15BMl5BanBnXkFtZTgwMjgwMTA0MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"}],"Metascore":"N/A","imdbRating":"7.4","imdbVotes":"1,689","imdbID":"tt2833074","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}