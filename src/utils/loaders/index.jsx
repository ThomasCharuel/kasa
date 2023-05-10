import stays from '../../data/stays.json';

const getStays = async () => {
  return { stays };
};

const getStay = async (stayId) => {
  const { stays } = await getStays();
  const stay = stays.find((stay) => stay.id === stayId);

  return { stay };
};

const staysLoader = async () => {
  const { stays } = await getStays();
  return { stays };
};

const stayLoader = async ({ params }) => {
  const { stay } = await getStay(params.stayId);
  return { stay };
};

export { staysLoader, stayLoader };
