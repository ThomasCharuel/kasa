import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

function Banner({ picture, children }) {
  return (
    <div className={styles.banner}>
      <img src={picture} className={styles.banner__picture} />
      <div className={styles.banner__content}>{children}</div>
    </div>
  );
}

Banner.propTypes = {
  picture: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Banner;
