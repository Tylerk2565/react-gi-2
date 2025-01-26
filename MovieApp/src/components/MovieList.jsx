import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="border p-4 rounded">
          <Link to={`/movie/${movie.id}`}>
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;