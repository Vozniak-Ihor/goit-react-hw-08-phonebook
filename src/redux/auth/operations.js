import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});


export const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('users/signup', credentials);
      //   setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
