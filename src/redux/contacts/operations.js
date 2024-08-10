import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://connections-api.goit.global/';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', newContact);
      toast.success("The contact is added");
      return res.data;
    } catch (error) {
      toast.error("Something went wrong, please try again later");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      toast.success("The contact is deleted");
      return res.data;
    } catch (error) {
      toast.error("Something went wrong, please try again later");
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ contactId, updatedData }, thunkAPI) => {
    try {
      const res = await axios.patch(`/contacts/${contactId}`, updatedData);
      return res.data;
    } catch (error) {
      toast.error("Something went wrong, please try again later");
      return thunkAPI.rejectWithValue(error.message);
    }
  });
