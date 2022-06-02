import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    contacts: [],
  },
  reducers: {
    add(state, action) {
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(
        (item) => item.name !== action.payload
      );
    },
  },
});

export const { add, remove } = itemsSlice.actions;
