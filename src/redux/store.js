import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./slice/items";
import { filterReducer } from "./reduce/filter";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, itemsSlice.reducer);

export const store = configureStore({
  reducer: {
    items: persistedReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// export const add = createAction("items/add");
// export const remove = createAction("items/remove");
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
