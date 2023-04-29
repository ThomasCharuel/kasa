import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/stays/c67ab8a7">Stay 1</Link>
        </li>
        <li>
          <Link to="/stays/b9123946">Stay 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
