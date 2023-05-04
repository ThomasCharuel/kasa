import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Gallery from '../../components/Gallery';
import HostCard from '../../components/HostCard';
import StayTag from '../../components/StayTag';
import Rating from '../../components/Rating';
import styles from './index.module.scss';

export default function Stay() {
  const { stay } = useLoaderData();

  const navigate = useNavigate();

  useEffect(() => {
    if (!stay) {
      navigate('/error');
    }
  }, []);

  return (
    <main className={styles.main}>
      {stay && (
        <>
          <Gallery medias={stay.pictures} />
          <header className={styles.header}>
            <div className={styles.header__firstContainer}>
              <h1 className={styles.header__title}>{stay.title}</h1>
              <p className={styles.header__location}>{stay.location}</p>

              <ul className={styles.tags}>
                {stay.tags.map((tag, index) => (
                  <StayTag key={index} tag={tag} />
                ))}
              </ul>
            </div>
            <div className={styles.header__secondContainer}>
              <Rating rating={Number(stay.rating)} />
              <HostCard name={stay.host.name} picture={stay.host.picture} />
            </div>
          </header>
          <div className={styles.contentSection}>
            <Collapse title="Description">
              <p>{stay.description}</p>
            </Collapse>
            <Collapse title="Équipements">
              <ul>
                {stay.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </>
      )}
    </main>
  );
}
