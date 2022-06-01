import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// export const add = createAction("items/add");
// export const remove = createAction("items/remove");
export const searchContact = createAction("filter/searchContact");

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },
    remove(state, action) {
      return state.filter((item) => item.name !== action.payload);
    },
  },
});

export const {add,remove}=itemsSlice.actions

const filterReducer = createReducer("", {
  [searchContact]: (state, action) => (state = action.payload),
});

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    filter: filterReducer,
  },
});



// const itemsReducer = createReducer([], {
//   [add]: (state, action) => [...state, action.payload],
//   [remove]: (state, action) =>
//     state.filter((item) => item.name !== action.payload),
// });

// export const store = configureStore({
//   reducer: {
//     items: itemsReducer,
//     filter: filterReducer,
//   },
// });