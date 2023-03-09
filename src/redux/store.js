import { configureStore } from "@reduxjs/toolkit";

//api
import { api } from "./app";

export const store = configureStore({
  reducer: {
    //api
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({}).concat([
      //api
      api.middleware,
    ]),
});