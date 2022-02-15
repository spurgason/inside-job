import { configureStore } from '@reduxjs/toolkit';
import currentWeatherReducer from "../reducers/currentWeatherReducer"

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
  }
});
