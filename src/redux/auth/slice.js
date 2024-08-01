import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";

    
const authSlice = createSlice({
  name: 'auth',
  initialState: {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;              
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  }
});


export default authSlice.reducer;