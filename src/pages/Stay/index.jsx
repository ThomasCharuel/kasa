import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';
import HostCard from '../../components/HostCard';

export default function Stay() {
  const { stay } = useLoaderData();

  const navigate = useNavigate();

  useEffect(() => {
    if (!stay) {
      navigate('/error');
    }
  }, []);

  return (
    <main>
      {stay && (
        <>
          <Slideshow medias={stay.pictures} />
          <header>
            <h1>{stay.title}</h1>
            <p>{stay.location}</p>
            <HostCard name={stay.host.name} picture={stay.host.picture} />
            <ul>
              {stay.tags.map((tag, index) => (
                <li key={index}>
                  <p>{tag}</p>
                </li>
              ))}
            </ul>
            <div>{stay.rating}/5</div>
          </header>
          <div>
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
