import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../services/api';



const initialState = {
  isLoading: false,
  user: null,
  isError: false, // Corrected the typo in the state key
};

export const getUser = createAsyncThunk('getUser', async () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        // Add more headers as needed
    }
  };
  try {
    const res = await api.get('/auth',config);
    return res.data; // Assuming the response data contains the user details
    console.log(res.data)
  } catch (error) {
    throw new Error(error.message);
  }
});

export const userSlice = createSlice({
  name: 'user', // Changed 'cartSlice' to 'userSlice'
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isError = false; // Reset the error state on successful API call
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.log(action.error.message); // Corrected 'cosnole' to 'console'
      });
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
