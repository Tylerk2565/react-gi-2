import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  // id holds the value from the url, then useParams gives access to id value
  const { id } = useParams();
  // state to store movie data when it's fetched
  const [movie, setMovie] = useState(null);

  // Fetches movie data 
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5a2ab6434b46666207ac759bc3fa9685`);
      setMovie(response.data); // Updates the movie state with the fetched movie data
    };
    fetchMovie();
  }, [id]); // Reruns whenever movie id changes

  // Basic loading message 
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto"
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetail;