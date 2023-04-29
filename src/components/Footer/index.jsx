import React from 'react';
import styles from './index.module.scss';
import kasaLogo from '../../assets/logo-white.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={kasaLogo} alt="Logo Kasa" className={styles.footer__logo} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
