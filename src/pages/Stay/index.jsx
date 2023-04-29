import React from 'react';
import { useLoaderData } from 'react-router-dom';
import stays from '../../data/stays.json';

// TODEV: Incorrect implementation
async function getStay(stayId) {
  const stay = stays.filter((stay) => stay.id === stayId)[0];

  return stay;
}

export async function loader({ params }) {
  const stay = await getStay(params.stayId);
  return { stay };
}

export default function Stay() {
  const { stay } = useLoaderData();
  return (
    <div>
      {stay.id}
      Cozy loft on the Canal Saint-Martin
    </div>
  );
}
