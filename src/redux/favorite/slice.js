import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorite.push(payload);
    },
    deleteFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(car => car.id !== payload.id);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
