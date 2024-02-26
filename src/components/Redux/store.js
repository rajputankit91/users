

import { configureStore } from '@reduxjs/toolkit';
import userReducer, { fetchUserData } from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

store.dispatch(fetchUserData());

export default store;