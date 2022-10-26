import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';

import { getMovieDetails } from 'services/API';
import {
  NavLinkStyled,
  DivDetailsCard,
  DivDetailsInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const srcImgBase = 'https://image.tmdb.org/t/p/w300';
  const noImage = '/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg';
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function getDetailsById(movieId) {
      try {
        const data = await getMovieDetails(movieId);
        setDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getDetailsById(movieId);
  }, [movieId]);

  console.log(location.state?.from);

  return (
    <div>
      {details && (
        <>
          <NavLinkStyled to={backLinkHref}> &#8592; Go back</NavLinkStyled>
          <DivDetailsCard>
            {details.poster_path === null ? (
              <img src={`${srcImgBase}${noImage}`} alt={details.title} />
            ) : (
              <img
                src={`${srcImgBase}${details.poster_path}`}
                alt={details.title}
              />
            )}
            <DivDetailsInfo>
              <h2>
                {details.title}{' '}
                {details.release_date === '' ||
                details.release_date === undefined
                  ? '(No date)'
                  : `(${details.release_date.slice(0, 4)})`}
              </h2>
              <p>User score: {Math.floor(details.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{details.overview}</p>
              <h3>Genres</h3>
              <p>
                {details.genres.length === 0
                  ? 'No genres'
                  : `${details.genres.map(genre => genre.name).join(', ')}.`}
              </p>
            </DivDetailsInfo>
          </DivDetailsCard>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink
                  to={`/movies/${movieId}/cast`}
                  state={{ from: backLinkHref }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: backLinkHref }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  detail: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    })
  ),
};
