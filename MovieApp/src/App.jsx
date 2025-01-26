import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  // movies is our state, setMovies is the function to change the state, state starts off as empty []
  const [movies, setMovies] = useState([]);

  // Handles api search to get movies, using axios to fetch
  const handleSearch = async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&api_key=5a2ab6434b46666207ac759bc3fa9685`
    );
    setMovies(response.data.results);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-400">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Tyler's Movie Search App
          </h1>
          <SearchBar onSearch={handleSearch} />
          <Routes>
            <Route path="/" element={<MovieList movies={movies} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
