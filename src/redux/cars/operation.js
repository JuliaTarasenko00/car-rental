import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/toastify';

const $instants = axios.create({
  baseURL: 'https://65424bb5f0b8287df1ffdc6c.mockapi.io/',
});

export const getCarsRental = createAsyncThunk(
  'cars',
  async (page = 1, thunkApi) => {
    try {
      const { data } = await $instants.get(`cars?page=${page}&limit=12`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCarsEverything = createAsyncThunk(
  'cars/number',
  async (_, thunkApi) => {
    try {
      const { data } = await $instants.get('cars');
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getDetailsCar = createAsyncThunk(
  'car/details',
  async (id, thunkApi) => {
    try {
      const { data } = await $instants.get(`cars/${id}`);
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 500) {
        toast.error('Server error.', styleToastify);
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
