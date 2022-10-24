import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';

import { getMovieDetails } from 'services/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  return (
    <>
      <NavLink to={backLink}>Go back</NavLink>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      //   release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ),
};
