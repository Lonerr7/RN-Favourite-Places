import { configureStore } from '@reduxjs/toolkit';
import favouritePlacesSlice from './favouritePlacesSlice';

const store = configureStore({
  reducer: {
    favouritePlaces: favouritePlacesSlice,
  },
});

export default store;
