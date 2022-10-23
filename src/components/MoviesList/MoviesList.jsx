import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { UlMovies, LiMovies } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <UlMovies>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <LiMovies key={id}>
            <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </LiMovies>
        );
      })}
    </UlMovies>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
