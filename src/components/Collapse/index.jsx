import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AngleDown from '../../assets/angle-down.svg';

function Collapse({ title, children, isCollapsedInit = true }) {
  const [isCollapsed, setIsCollapsed] = useState(isCollapsedInit);

  return (
    <article className={styles.collapse + (!isCollapsed ? ` ${styles.active}` : '')}>
      <header className={styles.collapse__header}>
        <h2 className={styles.collapse__title}>{title}</h2>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          <img src={AngleDown} className={styles.collapse__icon} />
        </button>
      </header>
      {!isCollapsed && <div className={styles.collapse__content}>{children}</div>}
    </article>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isCollapsedInit: PropTypes.bool,
};

export default Collapse;
