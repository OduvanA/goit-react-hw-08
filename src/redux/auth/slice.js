import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

    
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
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.contacts.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.contacts.loading = false;
        state.contacts.error = true;
      })
      .addCase(login.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.contacts.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.contacts.loading = false;
        state.contacts.error = true;
      })
      .addCase(logout.pending, (state) => {
        state.contacts.loading = true;
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
        state.contacts.loading = false;
        state.contacts.error = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
    .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
  }
});

export default authSlice.reducer;