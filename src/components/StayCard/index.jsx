import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

function StayCard({ title, picture }) {
  return (
    <article className={styles.card}>
      <img src={picture} className={styles.card__picture} />
      <h2 className={styles.card__title}>{title}</h2>
    </article>
  );
}

StayCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default StayCard;
