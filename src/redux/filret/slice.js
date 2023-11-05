import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: null,
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
