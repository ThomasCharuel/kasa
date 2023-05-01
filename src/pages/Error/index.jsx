import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Error() {
  return (
    <main className={styles.main}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/" className={styles.homePageLink}>
        Retourner sur la page d&apos;accueil
      </Link>
    </main>
  );
}
