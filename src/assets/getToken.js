const getToken = async () => {
  const userToken = await JSON.parse(localStorage.getItem('session'));
  const conf = {
    headers: {
      Authorization: `Bearer ${await userToken}`,
    },
  };
  return conf;
};

export default getToken;
