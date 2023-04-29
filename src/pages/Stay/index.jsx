import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';

export default function Stay() {
  const { stay } = useLoaderData();

  return (
    <main>
      <Slideshow medias={stay.pictures} />
      <header>
        <h1>{stay.title}</h1>
        <p>{stay.location}</p>
        <div>
          {stay.host.name}
          <img src={stay.host.picture} />
        </div>
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
        <Collapse title="Description" isCollapsedInit={false}>
          <p>{stay.description}</p>
        </Collapse>
        <Collapse title="Équipements" isCollapsedInit={false}>
          <ul>
            {stay.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}
