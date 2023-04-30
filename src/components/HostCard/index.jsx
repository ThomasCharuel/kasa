import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

function HostCard({ name, picture }) {
  return (
    <div className={styles.card}>
      <p className={styles.card__name}>{name}</p>
      <img src={picture} className={styles.card__picture} />
    </div>
  );
}

HostCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default HostCard;
