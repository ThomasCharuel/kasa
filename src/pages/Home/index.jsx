import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner';
import StayCard from '../../components/StayCard';
import BannerPicture from '../../assets/home-banner.png';
import styles from './index.module.scss';

function Home() {
  const { stays } = useLoaderData();

  return (
    <main>
      <Banner picture={BannerPicture}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>

      <ul className={styles.stays__listing}>
        {stays.map((stay) => (
          <li key={stay.id}>
            <Link to={`/stays/${stay.id}`}>
              <StayCard title={stay.title} picture={stay.pictures[0]} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
