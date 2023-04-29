import stays from '../../data/stays.json';

// TODEV: Incorrect implementation
async function getStay(stayId) {
  const stay = stays.filter((stay) => stay.id === stayId)[0];

  return stay;
}

export async function staysLoader() {
  return { stays };
}

export async function stayLoader({ params }) {
  const stay = await getStay(params.stayId);
  return { stay };
}
