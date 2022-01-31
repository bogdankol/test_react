const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getName = (state) => state.auth.user.name;
const getIsFetchingUser = (state) => state.auth.isFetchingUser;
const getEmail = (state) => state.auth.email;
const getToken = (state) => state.auth.token;
const getCreatedFilm = (state) => state.auth.createdFilm;
const getOneFilm = (state) => state.auth.filmInfo;
const getFilms = (state) => state.auth.userFilms;
const getFoundFilms = (state) => state.auth.foundFilms;

const authSelectors = {
  getIsLoggedIn,
  getName,
  getIsFetchingUser,
  getEmail,
  getToken,
  getCreatedFilm,
  getOneFilm,
  getFilms,
  getFoundFilms
};

export default authSelectors;
