import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import StarFull from '../../assets/star-full.svg';
import StarEmpty from '../../assets/star-empty.svg';

function Rating({ rating }) {
  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, i) =>
        i < rating ? <img key={i} src={StarFull} /> : <img key={i} src={StarEmpty} />,
      )}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
