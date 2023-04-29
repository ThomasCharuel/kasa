import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Stay() {
  const { stay } = useLoaderData();

  return (
    <div>
      {stay.id}
      {stay.title}
    </div>
  );
}
