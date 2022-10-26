import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UlMovies, LiMovies, NavLinkStyle } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <UlMovies>
      {movies.map(({ id, title }) => {
        return (
          <LiMovies key={id}>
            <NavLinkStyle to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLinkStyle>
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
