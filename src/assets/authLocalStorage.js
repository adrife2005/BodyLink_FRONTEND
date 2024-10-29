export const setLocalStorage = async (auth) => {
  const setAuth = localStorage.setItem('auth', await auth);
  return setAuth;
};

export const getLocalStorage = () => {
  const getAuth = localStorage.getItem('auth');
  return getAuth;
};

export const deleteLocalStorage = () => {
  const removeToken = localStorage.removeItem('auth');
  return removeToken;
};
