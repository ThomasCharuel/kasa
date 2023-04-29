import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import StayCard from '../../components/StayCard';

function Home() {
  const { stays } = useLoaderData();

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {stays.map((stay) => (
          <li key={stay.id}>
            <Link to={`/stays/${stay.id}`}>
              <StayCard title={stay.title} picture={stay.pictures[0]} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
