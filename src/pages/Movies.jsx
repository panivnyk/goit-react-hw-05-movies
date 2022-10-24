import { getBySearch } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import InputForm from 'components/InputForm/InputForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const queryInput = searchParams.get('query');

  useEffect(() => {
    if (queryInput) {
      setQuery(queryInput);
      return;
    }
    setQuery('');
  }, [queryInput]);

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }
    getBySearch(query)
      .then(data => {
        setMovies(data);
      })
      .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
    setQuery(searchQuery);
  };

  return (
    <main>
      <h2>Movies search page</h2>
      <InputForm onSubmit={handleSubmit} />
      {movies.length === 0 ? (
        <p>Sorry, there is no any movie</p>
      ) : (
        <MoviesList movies={movies} />
      )}
    </main>
  );
};

export default Movies;
