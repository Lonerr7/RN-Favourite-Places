import { createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  favPlaces: [
    {
      id: uuidv4(),
      title: 'School',
      imageUri: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      address: 'School Address',
      location: {
        lat: 0,
        lng: 0,
      },
    },
    {
      id: uuidv4(),
      title: 'School',
      imageUri: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      address: 'School Address',
      location: {
        lat: 0,
        lng: 0,
      },
    },
  ],
  currentFavPlace: {},
};

const favouritePlacesSlice = createSlice({
  name: 'favouritePlaces',
  initialState,
  reducers: {},
});

export const {} = favouritePlacesSlice.actions;
export default favouritePlacesSlice.reducer;
