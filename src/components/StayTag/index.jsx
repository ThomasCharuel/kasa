import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

function StayTag({ tag }) {
  return <p className={styles.tag}>{tag}</p>;
}

StayTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default StayTag;
