import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, toggleLike, deleteUserData, updateUserData } from "./userActions";

//making a userslice for handling actions
const userSlice = createSlice({
  name: 'user',
  initialState: { data: [], status: 'idle', error: null },

  extraReducers: (builder) => {
    builder
      // Handle the pending state when fetching user data
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      // Handle the fulfilled state when fetching user data
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      // Handle the rejected state when fetching user data
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle the fulfilled state when toggling like status
      .addCase(toggleLike.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      // Handle the fulfilled state when deleting user data
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      // Handle the fulfilled state when updating user data
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

// Selectors
export const selectUserData = (state) => state.user.data;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;

// A selector to get users who are liked
export const selectLikedUsers = (state) => state.user.data.filter((user) => user.liked);

export default userSlice.reducer;
