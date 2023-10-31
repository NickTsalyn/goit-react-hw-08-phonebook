import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';
// import { logOut } from './auth/operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.error]: (state, action) => {
      state.isLoading = true;
      state.error = true;
    },
    [addContacts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
      state.error = null;
    },
    [addContacts.error]: (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.items = [];
    },
    [deleteContacts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContacts.error]: (state, action) => {
      state.isLoading = true;
      state.error = true;
    },
  },
});

export const contactReducer = contactSlice.reducer;
