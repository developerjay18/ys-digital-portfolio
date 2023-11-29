import { configureStore } from '@reduxjs/toolkit';
import stateSlice from './stateSlice';

const store = configureStore({
  reducer: stateSlice,
});

export default store;
