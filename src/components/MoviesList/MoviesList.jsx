import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

import { UlMovies, LiMovies, NavLinkStyle } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <UlMovies>
      {movies.map(({ id, title }) => {
        return (
          <LiMovies key={id}>
            <NavLinkStyle to={`/movies/${id}`}>{title}</NavLinkStyle>
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
