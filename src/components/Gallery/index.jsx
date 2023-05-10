import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AngleRight from '../../assets/angle-right.svg';
import AngleLeft from '../../assets/angle-left.svg';

function Gallery({ medias }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < medias.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(medias.length - 1);
    }
  };

  return (
    <div className={styles.gallery}>
      {medias.map((media, index) => (
        <img
          key={index}
          src={media}
          className={styles.slide + (index === currentIndex ? ` ${styles.active}` : '')}
        />
      ))}
      {medias.length > 1 && (
        <>
          <button onClick={prevSlide} className={styles.gallery__button}>
            <img src={AngleLeft} />
          </button>
          <button onClick={nextSlide} className={styles.gallery__button}>
            <img src={AngleRight} />
          </button>
          <p className={styles.gallery__numbering}>
            {currentIndex + 1}/{medias.length}
          </p>
        </>
      )}
    </div>
  );
}

Gallery.propTypes = {
  medias: PropTypes.arrayOf(PropTypes.string),
};

export default Gallery;
