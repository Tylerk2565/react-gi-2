import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  // query is our state, setQuery is the function to change the set, in this case query would be our movie id 
  const [query, setQuery] = useState('');

  // prevents blank submissions, runs our onsearch function with our query(movieid) as our argument, then resets the query(id) so we can search other movies
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="px-12 mx-auto block bg-blue-500 text-white p-2 rounded mt-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;