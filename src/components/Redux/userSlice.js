import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  try {
    const response = await fetch('/userData.json');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Error fetching user data');
  }
});
  
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

export const deleteUserData = createAsyncThunk('user/deleteUserData', (userId, { getState }) => {
  const state = getState();
  const newData = state.user.data.filter((user) => user.id !== userId);
  return newData;
});

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
  
const userSlice = createSlice({
  name: 'user',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUserData.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    })
    .addCase(fetchUserData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(toggleLike.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(deleteUserData.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(updateUserData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const selectUserData = (state) => state.user.data;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;
export const selectLikedUsers = (state) => state.user.data.filter((user) => user.liked);

export default userSlice.reducer;