import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const delAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('users/signup', credentials);
        setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      await instance.post('/users/logOut');
      delAuthHeader()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);