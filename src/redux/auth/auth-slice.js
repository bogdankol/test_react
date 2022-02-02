import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  userFilms: [],
  error: null,
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
  createdFilm: null,
  filmInfo: null,
  foundFilms: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.registration.pending]: (state, { payload }) => {
      state.isFetchingUser = true;
    },
    [authOperations.registration.fulfilled]: (state, { payload }) => {
      if(payload) {
        state.token = payload;
        state.isFetchingUser = false;
        state.isLoggedIn = true;
      } 
    },
    [authOperations.registration.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isFetchingUser = false;
    },
    [authOperations.logIn.pending]: (state, { payload }) => {
      state.isFetchingUser = true;
    },
    [authOperations.logIn.fulfilled]: (state, { payload }) => {
      if(payload) {
        state.token = payload;
        state.isFetchingUser = false;
        state.isLoggedIn = true;
      } 
    },
    [authOperations.logIn.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isFetchingUser = false;
    },

    [authOperations.createFilm.fulfilled]: (state, { payload }) =>{
    state.createdFilm = payload
    },
    [authOperations.createFilm.rejected]: (state, { payload }) =>
      {state.error = payload},

    [authOperations.deleteFilm.fulfilled]: (state, {payload}) =>  {
      state.userFilms = state.userFilms.filter(el => el.id !== payload)
    },
    [authOperations.deleteFilm.rejected]: (state, { payload }) =>
      {state.error = payload},

    [authOperations.getFilm.fulfilled]: (state, {payload}) => {
      state.filmInfo = payload
    },
    [authOperations.getFilm.rejected]: (state, { payload }) =>
      {state.error = payload},

    [authOperations.getFilms.fulfilled]: (state, {payload}) => {
      state.userFilms = [...payload]
    },
    [authOperations.getFilms.rejected]: (state, { payload }) =>
      {state.error = payload},

    [authOperations.patchFilm.fulfilled]: (state, {payload}) => {
      if(payload) {
        state.filmInfo = {...payload}
      }
    },
    [authOperations.patchFilm.rejected]: (state, { payload }) =>
      {state.error = payload},

    [authOperations.searchFilms.fulfilled]: (state, {payload}) => {
      if(payload) {
        state.foundFilms = [...payload]
      }
    },
    [authOperations.searchFilms.rejected]: (state, { payload }) =>
      {state.error = payload},
    
    [authOperations.clearLocalData.fulfilled]: (state, {payload}) => {
      if(payload) {
        state.foundFilms = payload
        state.createdFilm = null
      }
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, {payload}) => {
      if(payload) {
        state.isLoggedIn = payload
      }
    }
  },
});

export default authSlice.reducer;
