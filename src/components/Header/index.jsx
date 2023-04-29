import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">Accueil</Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
