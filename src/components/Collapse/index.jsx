import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

function Collapse({ title, children }) {
  return (
    <article className={styles.collapse}>
      <h2 className={styles.collapse__title}>{title}</h2>
      <div className={styles.collapse__content}>{children}</div>
    </article>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Collapse;
