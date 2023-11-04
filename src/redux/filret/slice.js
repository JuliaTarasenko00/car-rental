import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterSliceCar: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterSliceCar } = filterSlice.actions;
