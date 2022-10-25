import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieReviews } from 'services/API';
import { LiReviews } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);

  useEffect(() => {
    async function getReviewsInfo(movieId) {
      try {
        const data = await getMovieReviews(movieId);
        setReviewsInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getReviewsInfo(movieId);
  }, [movieId]);

  if (reviewsInfo.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }
  return (
    <ul>
      {reviewsInfo.map(({ id, author, content }) => {
        return (
          <LiReviews key={id}>
            <b>Author: {author}</b>
            <p>{content}</p>
          </LiReviews>
        );
      })}
    </ul>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviewsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
