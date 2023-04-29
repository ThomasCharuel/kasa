import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AngleRight from '../../assets/angle-right.svg';
import AngleLeft from '../../assets/angle-left.svg';

function Slideshow({ medias }) {
  return (
    <div className={styles.slideshow}>
      {medias}
      <img src={AngleLeft} />
      <img src={AngleRight} />
    </div>
  );
}

Slideshow.propTypes = {
  medias: PropTypes.arrayOf(PropTypes.string),
};

export default Slideshow;
