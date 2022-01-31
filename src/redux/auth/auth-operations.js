import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registration = createAsyncThunk(
  'auth/registration',
  async ({ email,name, confirmPassword, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:8000/api/v1/users', {
        email,
        password,
        name,
        confirmPassword
      });

      if(data.status === 1) {
        if (data.token) {
          token.set(data.token)
          return data.token;
        };
      } 
      if(data.status === 0) {
        alert(JSON.stringify(data.error.fields))
        return
      }
      
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:8000/api/v1/sessions', {
        email,
        password,
      });
      if(data.status === 1) {
        if (data.token) {
          token.set(data.token)
          return data.token;
        };
      } 
      if(data.status === 0) {
        alert(JSON.stringify(data.error.fields))
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({
        data: err.response.data.message,
        status: err.response.status,
        statusText: err.response.statusText,
      });
    }
  },
);

const createFilm = createAsyncThunk('auth/createFilm', async ({title, year, format, actors}, thunkAPI) => {
 try {
      const {data} = await axios.post('http://localhost:8000/api/v1/movies', {
        title, year, format, actors
      });
      if(data.status === 1) {
        if (data.data) {
          alert(
            'created!',
          );
          return data.data;
        };

      } 
      if(data.status === 0) {
        alert(JSON.stringify(data.error.fields))
      }
    } catch (err) {
      return thunkAPI.rejectWithValue({
        data: err.response.data.message,
        status: err.response.status,
        statusText: err.response.statusText,
      });
    }
});

const deleteFilm = createAsyncThunk('auth/deleteFilm', async (id, thunkAPI) => {
  try {
       const {data} = await axios.delete(`http://localhost:8000/api/v1/movies/${id}`);
       if(data.status === 1) {
        return id;
       } 
       if(data.status === 0) {
         alert(JSON.stringify(data.error.code))
       }
     } catch (err) {
       return thunkAPI.rejectWithValue({
         data: err.response.data.message,
         status: err.response.status,
         statusText: err.response.statusText,
       });
     }
 });

 const getFilm = createAsyncThunk('auth/getFilm', async (id, thunkAPI) => {
  try {
       const {data} = await axios.get(`http://localhost:8000/api/v1/movies/${id}`);
       if(data.status === 1) {
         if (data.data) {
           return data.data;
         };
 
       } 
       if(data.status === 0) {
         alert(JSON.stringify(data.error.fields))
       }
     } catch (err) {
       return thunkAPI.rejectWithValue({
         data: err.response.data.message,
         status: err.response.status,
         statusText: err.response.statusText,
       });
     }
 });

 const patchFilm = createAsyncThunk('auth/patchFilm', async ({id, dataToPatch}, thunkAPI) => {
  try {
       const {data} = await axios.patch(`http://localhost:8000/api/v1/movies/${id}`, dataToPatch);
       if(data.status === 1) {
         if (data.data) {
           alert(
             'edited film!',
           );
           return data.data;
         };
 
       } 
       if(data.status === 0) {
         alert(JSON.stringify(data.error.fields))
       }
     } catch (err) {
       return thunkAPI.rejectWithValue({
         data: err.response.data.message,
         status: err.response.status,
         statusText: err.response.statusText,
       });
     }
 });

 const getFilms = createAsyncThunk('auth/getFilms', async (_, thunkAPI) => {
  try {
       const {data} = await axios.get(`http://localhost:8000/api/v1/movies?sort=title&order=ASC&limit=20&offset=0`);
       if(data.status === 1) {
         if (data.data) {
           return data.data;
         };
 
       } 
       if(data.status === 0) {
         alert(JSON.stringify(data.error.fields))
       }
     } catch (err) {
       return thunkAPI.rejectWithValue({
         data: err.response.data.message,
         status: err.response.status,
         statusText: err.response.statusText,
       });
     }
 });

 const searchFilms = createAsyncThunk('auth/searchFilms', async ({criteria, input}, thunkAPI) => {
   let string = '';
  try {
    if(criteria === "byTitle") string = `http://localhost:8000/api/v1/movies?sort=title&order=ASC&limit=20&offset=0&title=${input}`
    if(criteria === "byActor") string = `http://localhost:8000/api/v1/movies?sort=title&order=ASC&limit=20&offset=0&actor=${input}`
       const {data} = await axios.get(string);
       
       if(data.status === 1) {
        if(data.data.length === 0) return alert('no movies were found')
         if (data.data) {
           return data.data;
         };
       } 
       if(data.status === 0) {
         alert(JSON.stringify(data.error.fields))
       }
     } catch (err) {
       return thunkAPI.rejectWithValue({
         data: err.response.data.message,
         status: err.response.status,
         statusText: err.response.statusText,
       });
     }
 });

const clearLocalData = createAsyncThunk(
  'auth/clearLocalData',
  async (_, thunkAPI) => {
   return []
  },
);


const authOperations = {
  registration,
  logIn,
  createFilm,
  clearLocalData,
  deleteFilm,
  getFilm,
  patchFilm,
  getFilms,
  searchFilms
};

export default authOperations;