import { getTrending } from 'services/API';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);

  useEffect(() => {
    getTrending().then(data => {
      setMoviesTrend(data);
    });
  }, []);

  return (
    <main>
      <h2>Trending today:</h2>
      <MoviesList movies={moviesTrend} />
    </main>
  );
};

export default Home;
