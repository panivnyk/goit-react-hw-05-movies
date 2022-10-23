import { getTrending } from 'services/API';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(data => {
      setMovies(data);
    });
  }, []);

  return (
    <main>
      <h2>Trending today:</h2>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
