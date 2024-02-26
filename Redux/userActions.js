
import { createAsyncThunk } from "@reduxjs/toolkit";


// Async thunk to fetch user data from a JSON file fronm pulblic file
export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  try {
    //  // Fetch user data from the userData file
    const response = await fetch('/userData.json');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Error fetching user data');
  }
});

// Async thunk to toggle the 'liked' status of a user
export const toggleLike = createAsyncThunk('user/toggleLike', (userId, { getState }) => {
  const state = getState();
  const updatedData = state.user.data.map((user) => {
    if (user.id === userId) {
      return { ...user, liked: !user.liked };
    }
    return user;
  });

  return updatedData;
});

// Async thunk to delete user data based on user ID
export const deleteUserData = createAsyncThunk('user/deleteUserData', (userId, { getState }) => {
  const state = getState();
  const newData = state.user.data.filter((user) => user.id !== userId);
  return newData;
});

// Async thunk to update user data based on user ID and edited data
export const updateUserData = createAsyncThunk('user/updateUserData', ({ userId, editedUserData }, { getState }) => {
  const state = getState();
  const updatedData = state.user.data.map((user) => {
    if (user.id === userId) {
      return { ...user, ...editedUserData };
    }
    return user;
  });

  return updatedData;
});
