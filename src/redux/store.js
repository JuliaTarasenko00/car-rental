import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { carsSlice } from './cars/slice';
import { filterSlice } from './filret/slice';
import { favoriteSlice } from './favorite/slice';

const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    filter: filterSlice.reducer,
    favorite: persistReducer(persistConfig, favoriteSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
