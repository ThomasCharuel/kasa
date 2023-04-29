import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Stay() {
  const { stay } = useLoaderData();

  return (
    <main>
      {stay.id}
      {stay.title}
    </main>
  );
}
