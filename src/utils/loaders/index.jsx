import stays from '../../data/stays.json';

async function getStays() {
  return { stays };
}

async function getStay(stayId) {
  const { stays } = await getStays();
  const stay = stays.find((stay) => stay.id === stayId);

  return { stay };
}

export async function staysLoader() {
  const { stays } = await getStays();
  return { stays };
}

export async function stayLoader({ params }) {
  const { stay } = await getStay(params.stayId);
  return { stay };
}
