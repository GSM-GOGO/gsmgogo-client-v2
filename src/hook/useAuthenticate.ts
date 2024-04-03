export const useAuthenticate = (): boolean => {
  const refreshToken = localStorage.getItem('refreshToken');

  const isUserLoggedIn = !!refreshToken;

  return isUserLoggedIn;
};
