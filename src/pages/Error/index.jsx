import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <main>
      <p>404</p>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </main>
  );
}
