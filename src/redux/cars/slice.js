import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllCar,
  getCarsFilter,
  getCarsRental,
  getDetailsCar,
} from './operation';

const initialState = {
  isLoading: false,
  cars: [],
  error: null,
  number: 0,
  allCar: [],
  car: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCarsRental.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const newCars = payload.filter(
          car => !state.cars.some(stateCar => stateCar.id === car.id)
        );
        state.cars = [...state.cars, ...newCars];
        state.error = null;
      })
      .addCase(getAllCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.number = payload.length;
        state.error = null;
      })
      .addCase(getCarsFilter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allCar = payload;
        state.error = null;
      })
      .addCase(getDetailsCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.car = payload;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getAllCar.pending,
          getCarsRental.pending,
          getCarsFilter.pending,
          getDetailsCar.pending
        ),
        (state, _) => {
          state.isLoading = true;
          state.error = null;
          state.car = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getCarsRental.rejected,
          getCarsFilter.rejected,
          getDetailsCar.rejected,
          getAllCar.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});
