import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import kasaLogo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={kasaLogo} alt="Logo Kasa" className={styles.header__logo} />
      </Link>
      <nav className={styles.header__navigation}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
