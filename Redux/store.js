

import { configureStore } from '@reduxjs/toolkit';
//importing slice and actions
import userReducer from './userSlice';
import { fetchUserData } from './userActions';

// Configure the Redux store with the userReducer
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Dispatch the fetchUserData action to initialize user data
store.dispatch(fetchUserData());

export default store;