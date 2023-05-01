import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import AngleDown from '../../assets/angle-down.svg';

function Collapse({ title, children, isCollapsedInit = true }) {
  const [isCollapsed, setIsCollapsed] = useState(isCollapsedInit);

  return (
    <article className={styles.collapse + (!isCollapsed ? ` ${styles.active}` : '')}>
      <header className={styles.header}>
        <h2 className={styles.header__title}>{title}</h2>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className={styles.collapseButton}>
          <img src={AngleDown} className={styles.collapseButton__icon} />
        </button>
      </header>
      {!isCollapsed && <div className={styles.content}>{children}</div>}
    </article>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isCollapsedInit: PropTypes.bool,
};

export default Collapse;
