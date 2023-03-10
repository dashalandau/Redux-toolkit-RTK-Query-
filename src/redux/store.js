import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/counterSlice';

//api
import { api } from "./app";

export const store = configureStore({
  reducer: {
    //api
    [api.reducerPath]: api.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({}).concat([
      //api
      api.middleware,
    ]),
});