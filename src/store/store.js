import { configureStore } from '@reduxjs/toolkit';
import stateSlice from './stateSlice';
import joinSlice from './joinSlice';

const store = configureStore({
  reducer: {
    auth: stateSlice,
    join: joinSlice,
  },
});

export default store;
