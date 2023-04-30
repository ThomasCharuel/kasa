import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import StarFull from '../../assets/star-full.svg';
import StarEmpty from '../../assets/star-empty.svg';

function Rating({ rating }) {
  const emptyStarsToDisplay = 5 - rating;

  return (
    <div className={styles.rating}>
      {[...Array(rating)].map((_, i) => (
        <img key={i} src={StarFull} />
      ))}
      {[...Array(emptyStarsToDisplay)].map((_, i) => (
        <img key={i} src={StarEmpty} />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
