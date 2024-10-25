export const getToken = () => {
  const userToken = JSON.parse(localStorage.getItem('session'));
  const conf = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  return conf;
};

export const setToken = async (data) => {
  const setToken = localStorage.setItem('session', JSON.stringify(await data));
  return setToken;
};

export const deleteToken = () => {
  const removeToken = localStorage.removeItem('session');
  return removeToken;
};
