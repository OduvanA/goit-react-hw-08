import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";
import { logout } from "../auth/operations";

   
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = false;
      })
      .addCase(editContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
       const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        } 
        // state.items = state.items.map((item) =>
        //   item.id === action.payload.id ? (item = action.payload) : item
        // );
        state.loading = false;
      })
      .addCase(editContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export default contactsSlice.reducer;