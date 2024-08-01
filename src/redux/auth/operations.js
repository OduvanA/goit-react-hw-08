import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register', async (newUser, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', newUser);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login', async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      setAuthHeader('');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh', async (newUser, thunkAPI) => {
//     try {
//       const res = await axios.get('/users/current', newUser);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );