import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCarsEverything, getCarsRental, getDetailsCar } from './operation';

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
      .addCase(getCarsEverything.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.number = payload.length;
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
          getCarsRental.pending,
          getCarsEverything.pending,
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
          getCarsEverything.rejected,
          getDetailsCar.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});
